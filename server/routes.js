var path= require('path')

module.exports=function(app){
    app.use('/orders',require('./api/orders'))
}