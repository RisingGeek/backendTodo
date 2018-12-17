/*const mongoose=require('mongoose');
const bodyParser=require('body-parser');

mongoose.connect('mongodb://bhavay:hpnotebook2@ds139992.mlab.com:39992/login');
var userSchema=new mongoose.Schema({
    name: String,
    password: String,
    email: String
})
var userLogin=mongoose.model('user',userSchema);
var urlencodedParser=bodyParser.urlencoded({extended:false});*/
app.factory("userFactory",()=> {
    const userObject={
        registerUser(user) {
            console.log(user);
            /*var userOne=userLogin(user).save((err)=> {
                if(err) throw err;
                console.log('saved');
            });*/
        }
    }
    return userObject;
})