const UserModel = require('../db/User')
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');


module.exports = {
    loginGet : async(req,res)=>{
        try{
            var result = await UserModel.find().lean();
            res.send(result);     
        }catch(e){
            res.send(e);
        }
    },

    login: async(req,res)=>{  

      var userData2={
        name: req.body.name,  
        email: req.body.email
      }

      var newUser=new  UserModel(userData2);
      console.log("From UserService.js",newUser);
      newUser.save().then((docs)=>{                        
                        var user = { 
                                   id: docs._id, 
                                   name: docs.name,  
                                   email: docs.email,
                                   image: docs.image
                                 }
                       console.log("From UserService.js",user);
                       const accessToken = jwt.sign(user, "Hello", {expiresIn: '24h'});

                       res.status(200).json({
                           accessToken
                       });
                    })
                       
        


        /*console.log("User.js",req.body.email);
        try {
            var result = await UserModel.findOne({email:req.body.email}).lean()
            console.log("User.js",result);
                
                if(!result){
                    var gData = {
                        name: req.body.name,
                        email: req.body.email,
                        image: req.body.image
                    }
                    console.log(gData);
                    
                    var newUser = new UserModel(gData)
                    newUser.save().then((docs)=>{                        
                        var user = { 
                                   id: docs._id, 
                                   name: docs.name,  
                                   email: docs.email,
                                   image: docs.image
                                 }
                                 console.log(user);
                       const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '24h'});
                      // console.log(accessToken);
                       
                       res.status(200).json({
                           accessToken
                       });
                    })
                } else {        
                        var user = { 
                            id: result._id, 
                            name: result.name,  
                            email: result.email,
                            image: result.image
                          }
                         // console.log(user);
                          
                        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '24h'});
                       // console.log(accessToken);
                        res.status(200).json({
                            accessToken
                        });   
                }  
           
        } catch (error) {
            res.send(error)
        }*/
    }

}