import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {name, desc, long_desc, venue, start, end} = req.body;
    const uri = process.env.DB_URI;
    const dbName = "studentcouncil"; //Database name
    const eventCollection = "events"; // Replace with your database name
    
    try {  
      if(req.method === "POST"){
        if(uri !== undefined){
      const client = await MongoClient.connect(uri);
      const db = client.db(dbName);
      console.log("Successfully established connection with MongoDB");

      const events = db.collection(eventCollection);
      await events.insertOne({name, desc, long_desc, venue, start, end});
      
      res.status(200).json({ message: "Successfully Update" });
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
      res.status(500).json({ message: "Unsuccessful Update" });
    }
}