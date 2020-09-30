

var Orders= require('./orders.model')
var moment=require('moment')
exports.create=function(req,res){
    try{
Orders.create(req.body,(err,result)=>{
    if(err) throw new Error()
    else{
        res.status(200).json({'result':"Odrder Created successfully"})
    }
})
    }catch{
        res.status(400).send({"error":"Something went wrong"})
    }
}


exports.update=function(req,res){
    try{
Orders.update({order_id:req.body.orderid},{delivery_date:req.body.deliverydate},(err,result)=>{
    if(err) throw new Error()
    else{
        res.status(201).json({'result':"Odrder Updated successfully"})
    }
})
    }catch{
        res.status(400).send({"error":"Something went wrong"})
    }
}



exports.search=function(req,res){
    try{
Orders.find({order_id:req.body.orderid},(err,result)=>{
    if(err) throw new Error()
    else{
        res.status(201).json({'result':result})
    }
})
    }catch{
        res.status(400).send({"error":"Something went wrong"})
    }
}




exports.getOrderList=function(req,res){
    try{
Orders.find({order_date: {$eq:moment(req.body.orderid).format("DD/MM/YYYY")}},(err,result)=>{
    if(err) throw new Error()
    else{
        res.status(201).json({'result':result})
    }
})
    }catch{
        res.status(400).send({"error":"Something went wrong"})
    }
}



exports.destroy=function(req,res){
    try{
Orders.findOneAndRemove({order_date:req.params.id},(err,result)=>{
    if(err) throw new Error()
    else{
        res.status(201).json({'result':" order deleted successfully"})
    }
})
    }catch{
        res.status(400).send({"error":"Something went wrong"})
    }
}