const { UserDao, ProductDao, 
    CartDao, TicketDao }       = require("../daos/factory.js")
const { ProductsRespository }  = require("../repositories/productRepository.js")
const { CartRepository }       = require("../repositories/cartRepository.js")
const { UserRepository }       = require("../repositories/userRepository.js")

const userService              = new UserRepository(UserDao)
const productService           = new ProductsRespository(ProductDao)
const cartService              = new CartRepository(CartDao)

module.exports = {
    userService,
    productService,
    cartService,
    ticketService,
    contactService
}