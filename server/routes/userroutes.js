const express = require('express')
const { createOrder } = require('../controller/orderCondroler')
const { createUser, displayOrders, updateStatus } = require('../controller/userController')
const router = express.Router()

router.post('/',createUser) 
router.post('/order',createOrder) 
router.get('/displaylist',displayOrders) 
router.patch('/update',updateStatus) 


module.exports = router