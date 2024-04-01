import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {name} = req.body;
    const uri = process.env.DB_URI;
    const dbName = "studentcouncil"; //Database name
    const eventCollection = "events"; // Replace with your database name
    
    try {
    if(req.method === "GET"){  
      if(uri !== undefined){
      const client = await MongoClient.connect(uri);
      const db = client.db(dbName);
      console.log("Successfully established connection with MongoDB");

      const events = db.collection(eventCollection);
      const details = await events.findOne({name});

      if(details === null){
        res.status(404).json({ message: "No Such Event Found" });
      }      
      else{
      res.status(200).json({name: details.name, desc: details.desc, long_desc: details.long_desc, venue: details.venue, start: details.start, end: details.end, img_desc: details.img_desc, img_url: details.img_url});
      }
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