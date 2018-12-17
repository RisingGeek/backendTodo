const User=require('./userSchema');
var bcrypt=require('bcryptjs');
const userOperation={
    getAllUsers(callback) {
        User.find({},(err,docs)=> {
            if(err) throw err;
            callback(docs);
        })
    },
    register(user) {
        bcrypt.genSalt(10,(err,salt)=> {
            bcrypt.hash(user.password,salt,(err,hash)=> {
                var newUser= {
                    name:user.name,
                    password:hash,
                    email:user.email
                }
                User(newUser).save((err)=> {
                    if(err) throw err;
                    console.log('registration saved');
                })
            })
        })
    },
    login(user) {
        User.find({email:user.email},(err,doc)=> {
            if(err) throw err;
            bcrypt.compare(user.password,doc[0].password,(err,result)=> {
                result?console.log('successful'):console.log('unsuccessful');
                return result;
            })
        });
    }
}
module.exports=userOperation;