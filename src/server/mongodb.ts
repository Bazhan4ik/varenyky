import { MongoClient } from 'mongodb';
import { join } from "path";


console.log(process.env["NODE_ENV"]);
if (process.env["NODE_ENV"] !== "production") require("dotenv").config({ path: join(process.cwd(), "src/server", ".env") });

const client = new MongoClient(process.env["MONGO_URL"] as string);

export default client;