const express = require('express')
const { createOrder } = require('../controller/orderCondroler')
const { createUser } = require('../controller/userController')
const router = express.Router()

router.post('/',createUser)
router.post('/order',createOrder)

module.exports = router