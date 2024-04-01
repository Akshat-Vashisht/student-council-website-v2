import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const uri = process.env.DB_URI;
    const dbName = "studentcouncil"; //Database name
    const photoCollection = "photos"; // Replace with your database name
    
    try {
    if(req.method === "GET"){  
      if(uri !== undefined){
        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        console.log("Successfully established connection with MongoDB");

        const photos = db.collection(photoCollection); 
        const collection = await photos.find({}).toArray();
        res.status(200).json({photos: collection});
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
    catch(error){
      console.log(error);
      res.status(500).json({ message: "Unsuccessful Fetch" });
    }
}