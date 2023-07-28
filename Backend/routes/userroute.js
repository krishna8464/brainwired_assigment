const express = require("express");

const Userroute = express.Router();

Userroute.use(express.json())

const { UserModel } = require("../model/usermodel");
const { logger } = require("../middleware/logger")

// To create User through the link -------> http://localhost:5000/user/create
                          //Body --------> 
                                            //   {
                                            //     "firstname" : "santosh",
                                            //     "lastname" : "kumar"
                                            //     "DOB" : "santosh@123",
                                            //     "address" : "hyderbad"
                                            // }
                          //Method -------> POST  
                          Userroute.post("/create",logger,async(req,res)=>{
                            console.log(req.body)
                            const { firstname, lastname, dob, address } = req.body;
                            try {
                                let all_data = await UserModel.find({firstname,lastname});
                                if(all_data.length === 0){
                                            const user = new UserModel(req.body);
                                            await user.save()
                                            res.status(200).send({"suc" : "User registered Successfully"});
                                        
                                }else{
                                    res.status(405).send({"err" : "User already registered"})
                                }
                            } catch (error) {
                                res.status(400).send({"err":"some thing went wrong"});
                            }
                        });



Userroute.get("/get",logger,async(req,res)=>{
    try {
        let userdata = await UserModel.find({});
        res.status(200).send({"suc": userdata});
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

Userroute.get("/get/:id",logger,async(req,res)=>{
    try {
        let Id = req.params.id;
        let user = await UserModel.find({_id:Id});
        res.status(200).send({"suc":user[0]})
    } catch (error) {
        res.status(400).send({"err":error})
    }
});

Userroute.patch("/update/:id",logger,async(req,res)=>{
    try {
        let Id = req.params.id;
        let body = req.body;
        await UserModel.findByIdAndUpdate({_id:Id},body);
        res.status(200).send({"suc":"Updated Successfully"})
    } catch (error) {
        res.status(400).send({"err":error})
    }
});



Userroute.delete("/delete/:id",logger,async(req,res)=>{
    try {
        let Id  = req.params.id;
        await UserModel.findByIdAndDelete({_id:Id});
        res.status(200).send({"suc":"Userdeleted Successfully"});
    } catch (error) {
        res.status(400).send({"err":error});
    }
});



module.exports={
    Userroute
}