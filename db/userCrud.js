const User=require('./models/userSchema');
var bcrypt=require('bcryptjs');
const userOperation={
    getAllUsers(callback) {
        User.find({},(err,docs)=> {
            if(err) throw err;
            callback(docs);
        })
    },
    register(user,callback) {
        bcrypt.genSalt(10,(err,salt)=> {
            bcrypt.hash(user.password,salt,(err,hash)=> {
                if(!user.name || !user.password || !user.email || user.password.length<8 || user.name==user.password) {
                    callback(false);
                    return false;
                }
                this.getAllUsers(function(docs) {
                    if(docs.find((currentUser)=> currentUser.email===user.email)) {
                        callback(false);
                        return false;
                    }
                })
                var newUser= {
                    name:user.name,
                    password:hash,
                    email:user.email
                }
                User(newUser).save((err)=> {
                    if(err) throw err;
                    console.log('registration saved');
                    callback(true);
                    return true;
                })
            })
        })
    },
    login(user,callback) {
        User.find({email:user.email},(err,doc)=> {
            if(doc.length===0) {
                callback(false,null);
                return false;
            }
            if(err) throw err;
            bcrypt.compare(user.password,doc[0].password,(err,result)=> {
                result?console.log('successful'):console.log('unsuccessful');
                callback(result,doc[0].name);
                return result;
            })
        });
    }
}
module.exports=userOperation;