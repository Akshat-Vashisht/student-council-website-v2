import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import cloudinary from 'cloudinary';
import formidable from 'formidable-serverless';

const uri = process.env.DB_URI;
const dbName = "studentcouncil"; // Database name
const photoCollection = "photos"; // Photos Collection

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}); //Configure Cloudinary

export const config = {
    api: {
      bodyParser: false,
    },
  };

// Define the upload route
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Error during form parsing:', err);
            return res.status(500).json({ message: 'Internal server error during form parsing' });
        }
        const img = files.image as formidable.File;
        
        try {
            const client = await MongoClient.connect(uri);
            const db = client.db(dbName);
            console.log("Successfully established connection with MongoDB");
            const photos = db.collection(photoCollection);
            const response = await cloudinary.v2.uploader.upload(img.path, { public_id: 'events/' + img.name });
            await photos.insertOne({ img_desc: img.name, img_url: response.url });
            return res.status(200).json({ message: "Updated Successfully", url: response.url });
        }
    
        catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    });
}
