import { Router } from "express";
import client from "../mongodb";
import { randomBytes } from "crypto";
import { sets } from "../data/data";
import { ObjectId } from "mongodb";
import { isValidEmail, sendEmail } from "../email";


const router = Router();
let ctoken = "";


router.post("/submit", async (req, res) => {
    const { city, address, unit, phone, email, name, type, items } = req.body;

    if (!phone || !name || !type || !items || !email || !isValidEmail(email) || !Array.isArray(items)) {
        res.status(400).send({ reason: "MissingParameters" });
    }

    if (type == "delivery") {
        if (!city || !address) {
            res.status(400).send({ reason: "MissingParameters" });
        }

        client.db("orders").collection("list").insertOne({
            type, city, address, unit, phone, name, items, status: "new",
            date: Date.now(),
        });


    } else if (type == "pickup") {

        client.db("orders").collection("list").insertOne({
            type, phone, name, items, status: "new",
            date: Date.now(),
        });
    }


    const result = await sendEmail("varenyky.onthelake@gmail.com", "NEW VARENYKY ORDER",
        `

Someone ordered ${type} order. ${items.length} items:

${items.map((item: any) => `${item.amount} ${item.id}`).join(", ")}

`

    );


    let message = "Thanks for ordering varenyky! We'll be waiting for you to pick up your varenyky! \n \n You can check how to cook the varenyky <a href='varenykyonthelake.com'>here</a> ";

    if (type == "delivery") {
        message = "Thanks for ordering varenyky! We'll contact you shortly when your varenyky will be delivered! \n \n You can check how to cook the varenyky <a href='varenykyonthelake.com'>here</a>";
    }

    const confirmation = await sendEmail(email, "Thanks for ordering varenyky!", message);


    res.send({ success: result == 1 });
});
router.post("/login", async (req, res) => {
    const { password } = req.body;

    if (!password) {
        res.status(400).send({ reason: "MissingParameters" });
        return;
    }

    if (password != "20000106Ss") {
        res.status(403).send({ reason: "InvalidPassword" });
        return;
    }


    // create random token
    ctoken = randomBytes(16).toString("hex");


    res.send({ token: ctoken });
});
router.get("/list", async (req, res) => {
    if (!ctoken) {
        res.status(403).send({ reason: "Unauthorized" });
        return;
    }

    const token = req.headers["x-token"] as string;

    if (!token) {
        res.status(403).send({ reason: "Unauthorized" });
        return;
    }

    if (token != ctoken) {
        res.status(403).send({ reason: "Unauthorized" });
        return;
    }

    const orders = await client.db("orders").collection("list").find({ status: "new" }).toArray();

    if (!orders) {
        res.send(500).send({ reason: "UnknownError" });
        return;
    }

    const result = [];

    for (const order of orders) {
        const { type, city, address, unit, phone, name, items, date } = order;

        const convertedItems = [];
        let price = 0;

        for (const item of items) {
            for (const i of sets) {
                if (item.id == i.id) {
                    convertedItems.push({
                        name: i.name,
                        amount: item.amount,
                    });
                    price += item.amount == 12 ? 15 : item.amount;
                    break;
                }
            }
        }

        result.push({
            address: {
                city, address, unit,
            },
            phone,
            name,
            type,
            _id: order._id,
            total: price,
            items: convertedItems,
            date: Intl.DateTimeFormat("en-US").format(date),
        });
    }

    res.send(result);
});
router.post("/status/:orderId", async (req, res) => {
    if (!ctoken) {
        res.status(403).send({ reason: "Unauthorized" });
        return;
    }

    const token = req.headers["x-token"] as string;

    if (!token) {
        res.status(403).send({ reason: "Unauthorized" });
        return;
    }

    if (token != ctoken) {
        res.status(403).send({ reason: "Unauthorized" });
        return;
    }


    const { orderId } = req.params;
    const { status } = req.body;


    if (!orderId || !status) {
        res.status(400).send({ reason: "MissingParameters" });
        return;
    }
    if (status != "removed" && status != "done") {
        res.status(400).send({ reason: "InvalidParameters" });
        return
    }

    const result = await client.db("orders").collection("list").updateOne({
        _id: new ObjectId(orderId),
        status: "new",
    },
        {
            $set: {
                status,
            }
        });

    if (result.modifiedCount > 0) {
        res.send({ success: true })
        return;
    }


    res.status(500).send({ reason: "UnknownError" });
});

export {
    router as OrdersRouter
}