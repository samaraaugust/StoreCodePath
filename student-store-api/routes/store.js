const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

router.post("/", async (req, res, next) => {
    try {
        const order = req.body.order
        const newOrder = await Store.saveUserInfo(order)
        res.status(201).json({ order: newOrder })
    }
    catch (err)
    {
        next(err)
    }
})

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.allProducts()
        res.status(200).json({ products })
    }
    catch(err)
    {
        next(err)
    }
})

router.get("/:productID", async (req, res, next) => {
    try {
        const product = req.params.productID
        const productResponse = await Store.fetchProduct(product)
        res.status(200).json({ productResponse })
    }
    catch(err)
    {
        next(err)
    }
})

module.exports = router