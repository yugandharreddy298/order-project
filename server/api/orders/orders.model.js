var mongoose =require('mongoose')

var Schema=mongoose.Schema

var OdersSchema=new Schema({

    order_id: {type:String},
    item_name:String,
cost:Number,
order_date:Date,
delivery_date:Date,
})

module.exports=mongoose.model('Orders', OdersSchema);
// mongoose.model('Branch', BranchSchema);