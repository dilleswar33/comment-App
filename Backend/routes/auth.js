const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Users = require('../models/Users')

router.post('/signup', async (req,res)=>{
    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    

        try {
        let user = await Users.findOne({ email: req.body.email });
        if (user)   {
             return res.status(400).json({ error: "Sorry a user with email already exist" });
        }

           user = Users(req.body);
           user.save();
           res.send({message:"user Sucessfully registered"});

    }   
             catch (error) {
                
                res.status(500).send("some Error occured");
        
    }

})

router.post('/signin', async (req,res)=>{
    const {email,password} = req.body;
    try {
        let user = await Users.findOne({ email: email });
        
        if(user) {
            if(password === user.password) {
                res.send({message:"login sucess",user:user._id})
            }
            else {
                res.send({message:"Wrong Credentials"})
            }

        }
        else {
            res.send("Not Registered");
        }

    }   
             catch (error) {
                
                res.status(500).send("some Error occured");
        
    }
   
})

router.post('/forgotPassword', async (req,res)=>{
    const {email,secretCode} = req.body;
    try {
        let user = await Users.findOne({ email: email });
        if(user) {
            if(secretCode === user.secretCode) {
                // res.send({message:"login sucess",user:user.password})
                res.send({message:"Fetched User password",password:user.password})
            }
            else {
                res.send({message:"Wrong Credentials"})
            }

        }
        else {
            res.send("No User Exist with this Email");
        }

    }   
             catch (error) {
                
                res.status(500).send("some Error occured");
        
    }
   

})

router.post('/comment', async (req,res)=>{
    const {comment,userId} = req.body;
   
    
    try {
    let user = await Users.findById(userId).select('email');
    

        
        // await user.update({'email':user.email,comment:comment})
        await Users.updateOne({'email':user.email},
                                { $push: {comment: comment }});
        
        
       res.send({message:"comment saved",user,comment})

}   
         catch (error) {
           
            res.status(500).send("some Error occured");
    
}

})

router.post('/myComments', async (req,res)=>{
    const {userId} = req.body;
   

    
    try {
    let user = await Users.findById(userId).select('email');
    // console.log(user);

        
        const myComments=await Users.findById(userId).select('comment').select('email')
        
       res.send(myComments)

}   
         catch (error) {
           
            res.status(500).send("some Error occured");
    
}

})

router.get('/allComments', async (req,res)=>{
    
    try {
    let user = await Users.find({}).select('-password').select('-secretCode');

        let email=await Users.find({}).select('email').select('comment');
        
        res.send(email)

}   
         catch (error) {
            console.log(error.message);
            res.status(500).send("some Error occured");
    
}

})







module.exports = router;