import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {img_desc} = req.body;
    
    try {
      const uri = process.env.DB_URI;
      const dbName = "studentcouncil"; //Database name
      const photoCollection = "photos"; // Replace with your database name
  
      const client = await MongoClient.connect(uri);
      const db = client.db(dbName);
      console.log("Successfully established connection with MongoDB");

      const photos = db.collection(photoCollection);
      const response = await photos.findOne({img_desc});

      if(response === null){
        res.status(404).json({ message: "No Image Found" });
      }      
      else{
      res.status(200).json({ img_url: response.img_url });
    }
  }
    catch(error){
      console.log(error);
      res.status(500).json({ message: "Unsuccessful Fetch" });
    }
}