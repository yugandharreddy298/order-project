var express= require('express')
var app= express()
var mongoose= require('mongoose')

var bodyParser=require('body-parser')
var session=require('express-session')
var mongoStore=require('connect-mongo')(session)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(session({
    secret:"key",
    resave:true,
    saveUninitialized:true,
    store:new mongoStore({
        mongooseConnection:mongoose.connection,
        db:'Mydatabase'
    })
}))



var uri="mongodb+srv://mongodb:Dell@123@mynetwork-fzvhx.mongodb.net/mydatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true ,useUnifiedTopology:true});
mongoose.connection.once('open', function(){
  console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});

require('./routes')(app)

app.listen(9000,'0.0.0.0',function(err,result){
    console.log("Server is started")
})

exports=module.exports=app