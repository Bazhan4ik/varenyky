import { Router } from "express";
import { sets as products } from "./../data/data";


const router = Router();



router.get("/", async (req, res) => {
    res.send(products);
});



export {
    router as ProductsRouter
}