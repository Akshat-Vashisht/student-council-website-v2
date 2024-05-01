<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
// import Cors from 'cors';

// const cors = Cors({
//   methods: 'GET',
// });

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // await cors(req, res);
    const uri = process.env.DB_URI;
    const dbName = "studentcouncil"; //Database name
    const eventCollection = "events"; // Replace with your database name
    
    try {
    if(req.method === "GET"){  
      if(uri !== undefined){
=======
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import Cors from "cors";

const cors = Cors({
  methods: "GET",
  origin: "*",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  const uri = process.env.DB_URI;
  const dbName = "studentcouncil"; //Database name
  const eventCollection = "events"; // Replace with your database name
  try {
    if (req.method === "GET") {
      if (uri !== undefined) {
>>>>>>> 00fd6ad7deeb58a82e9fcaf37e9008aeb2789f88
        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        console.log("Successfully established connection with MongoDB");

        const events = db.collection(eventCollection);
        const collection = await events.find().toArray();
        res.status(200).json({ events: collection });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
        console.log("MongoDB URI is undefined");
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unsuccessful Fetch" });
  }
};
