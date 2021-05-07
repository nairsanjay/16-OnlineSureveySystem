const UserModel = require('../db/User')
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

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

        var newUser=new UserModel(userData2);
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
        },
    
        signIn: async(req,res)=>{  
            var userData2={
                email: req.body.email,
                password: req.body.password
            }
            UserModel.findOne({email: req.body.email}).then(user => {
                // Check if user exists
                if (!user) {
                  return res.status(404).json({ emailnotfound: "Email not found" });
                }
            
                // Check password
                bcrypt.compare(userData2.password, user.password).then(isMatch => {
                  if (isMatch) {
                    // User matched
                    // Create JWT Payload
                    const payload = {
                      id: user.email,
                      name: user.name
                    };
            
                    // Sign token
                    jwt.sign(
                        payload,
                      "secret",
                      {
                        expiresIn: 31556926 // 1 year in seconds
                      },
                      (err, token) => {
                        res.json({
                          success: true,
                          token: "Bearer " + token
                        });
                      }
                    );
                  } else {
                    return res
                      .status(400)
                      .json({ passwordincorrect: "Password incorrect" });
                  }
                });
              });
            },



    signUp: async(req,res)=>{  
        var userData2={
            name: req.body.name,  
            email: req.body.email,
            password: req.body.password,
            question: req.body.question,
            answer: req.body.answer
        }
        console.log(userData2)
        UserModel.findOne({ email: req.body.email }).then(user => {
            if (user) {
              return res.status(400).json({ email: "Email already exists" });
            } else {
              const newUser = new UserModel({
                name: req.body.name,  
                email: req.body.email,
                password: req.body.password,
                question: req.body.question,
                answer: req.body.answer
              });
        
              // Hash password before saving in database
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
              });
            }
          });
        // var newUser = new  UserModel(userData2);
        // console.log("From UserService.js",newUser);
        // newUser.save().then((docs)=>{                        
        //   var user = { 
        //              id: docs._id, 
        //                  name: docs.name,  
        //                  email: docs.email,
        //                  image: docs.image
        //                }
        //      console.log("From UserService.js",user);
        //      const accessToken = jwt.sign(user, "Hello", {expiresIn: '24h'});
        //      res.status(200).json({
        //          accessToken
        //      });
        // })


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