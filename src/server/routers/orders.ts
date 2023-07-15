import { Router } from "express";
import client from "../mongodb";
import { sendEmail } from "../email";


const router = Router();



router.post("/submit", async (req, res) => {
    const { city, address, unit, phone, name, type } = req.body;

    if (!phone || !name || !type) {
        res.status(400).send("Missing parameters");
    }

    if (type == "delivery") {
        if (!city || !address || !unit) {
            res.status(400).send("Missing parameters");
        }

        client.db("orders").collection("list").insertOne({
            type, city, address, unit, phone, name,
            date: Date.now(),
        });


    } else if (type == "pickup") {

        client.db("orders").collection("list").insertOne({
            type, phone, name,
            date: Date.now(),
        });
    }


    const result = await sendEmail("varenyky.onthelake@gmail.com", "NEW VARENYKY ORDER", "Check the website!");


    res.send({ success: result == 1 });
});



export {
    router as OrdersRouter
}