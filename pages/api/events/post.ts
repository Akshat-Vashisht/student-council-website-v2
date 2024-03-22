import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import cloudinary from 'cloudinary';
import formidable from 'formidable-serverless';

const uri = process.env.DB_URI;
const dbName = "studentcouncil"; // Database name
const eventCollection = "events"; // Collection name
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
    form.on('error', (err) => {
        console.error('Error during form parsing:', err);
        res.status(500).json({ message: 'Internal server error during form parsing' });
    });
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Error during form parsing:', err);
            return res.status(500).json({ message: 'Internal server error during form parsing' });
        }
        const { name, desc, long_desc, venue, start, end, img_desc} = fields;
        const img = files.image as formidable.File;
        
        try {
            if(req.method === "POST"){
                if(uri !== undefined){
            const client = await MongoClient.connect(uri);
            const db = client.db(dbName);
            console.log("Successfully established connection with MongoDB");
            const events = db.collection(eventCollection);
            const photos = db.collection(photoCollection);
            const response = await cloudinary.v2.uploader.upload(img.path, { public_id: 'events/' + img.name });
            await events.insertOne({ name, desc, long_desc, venue, start, end, img_desc: img_desc, img_url: response.url});
            await photos.insertOne({ img_desc: img_desc, img_url: response.url });
            res.status(200).json({ message: "Updated Successfully", img_desc: img_desc, img_url: response.url });
            }
            else{
                res.status(500).json({ message: "Internal Server Error" });
                console.log("MongoDB URI is undefined");
            }
        }
            else{
                res.status(405).json({ message: "Method Not Allowed" });
            }
        }
    
        catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
