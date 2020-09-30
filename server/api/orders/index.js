var express=require('express')
var router=express.Router()


var controller=require('./orders.controller.js')

router.post('/create',controller.create)
router.post('/update',controller.update)
router.post('/list',controller.getOrderList)

router.post('search',controller.search)


router.delete('/:id', controller.destroy);






module.exports = router;