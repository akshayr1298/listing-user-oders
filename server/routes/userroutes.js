const express = require('express')
const { createOrder } = require('../controller/orderCondroler')
const { createUser, displayOrders } = require('../controller/userController')
const router = express.Router()

router.post('/',createUser)
router.post('/order',createOrder)
router.get('/displaylist',displayOrders)

module.exports = router