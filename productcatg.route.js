const express=require('express');
const productcatgRoute=express.Router();
var ProductCatg=require('./productcatg.model');

productcatgRoute.route('/addproductcatg/:pcatgid/:pcatgname').post(function(req,res){
    var productcatg=new ProductCatg({pcatgid:req.params.pcatgid,pcatgname:req.params.pcatgname});

    productcatg.save().then(productcatg=>{
        res.send('PRODUCT CATEGORY ADDED SUCCESSFULLY');
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});
//SHOW ALL PRODUCT CATEGORY
productcatgRoute.route('/showproductcatg').get(function(req,res){
    ProductCatg.find().then(productcatg=>{
        res.send(productcatg);
        res.end();
    }).catch(err=>{
        res.send("DATA NOT FOUND SOMETHING WENT WRONG");
        res.end();
    });
});
module.exports=productcatgRoute;