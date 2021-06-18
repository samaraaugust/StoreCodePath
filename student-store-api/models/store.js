const { storage } = require("../data/storage")
class Store {
    static async allProducts() 
    {
        const products = storage.get("products")
        return products
    }

    static async fetchProduct(value)
    {
        const product = storage.get("products").find({ idNum: +value }).value()
        return product
    }
}

module.exports = Store