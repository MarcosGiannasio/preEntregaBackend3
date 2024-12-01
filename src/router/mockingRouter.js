const { Router }    = require("express")
const compression   = require("express-compression")
const { faker }     = require("@faker-js/faker")
const { logger }    = require("../utils/logger")
const router        = Router()

router.use(compression({
    brotli : {
        enabled: true,
        zlib: {}
    }
}))

router.get("/generateData", (req,res) => {
    let products = []
    let product = {
        _id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(), 
        price: faker.commerce.price(),
        thumbnails: faker.image.url(),
        stock: faker.number.int(100),
        code: faker.finance.bitcoinAddress()
    }
    for (let i = 0; i < 1000; i++) {
        products.push(product)
    }
    res.send({status:"success", totalProducts: products.length , products: products})
})

router.get("/mockingusers", (req,res) => {
    let user = {
        _id: faker.database.mongodbObjectId(),
        firtsName: faker.person.firstName(),
        lastName: faker.person.lastName(), 
        email: faker.internet.email(),
        userName: faker.internet.displayName(),
        password: faker.internet.password(),
        birthDate: faker.date.birthdate()
    }
    res.send({status:"success", users: user})
})


module.exports = router