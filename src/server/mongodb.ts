import { MongoClient } from 'mongodb';
import { join } from "path";
import { config } from 'dotenv';


console.log(process.env["NODE_ENV"]);
if (process.env["NODE_ENV"] !== "production") config({ path: join(process.cwd(), "src/server", ".env") });

const client = new MongoClient(process.env["MONGO_URL"] as string);

export default client;