const express=require('express');
const billRoute=express.Router();
let Bill =require('./bill.model');
//save bill
billRoute.route('/billsave').post((req,res)=>{
    let bill= new Bill(req.body);

    bill.save().then(bill=>{
        res.send({'bill':'bill added successfully'});
    }).catch(err=>{
        res.send(err);
    });
});

//show all bill by customer id
billRoute.route('/billshow/:CId').get((req,res)=>{
    Bill.find({"CId":req.params.CId}).then(bill=>{
        res.send(bill);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});

billRoute.route('/billshowbillids/:CId').get((req,res)=>{
    Bill.distinct("billid",{"CId":req.params.CId}).then(bill=>{
        res.send(bill);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});
//get id of last entered bill to generate id for next bill
billRoute.route('/getbillid').get((req,res)=>{
    Bill.find().sort({"billid":-1}).limit(1).then(bill=>{
        console.log(bill);
        res.send(bill);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});

//get bill details by billid
billRoute.route('/showbillbyid/:billid').get((req,res)=>{
    Bill.find({"billid":req.params.billid}).then(bill=>{
        res.send(bill);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});
//show all bill
billRoute.route('/billshow').get((req,res)=>{
    Bill.find().then(bill=>{
        res.send(bill);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    });
});
module.exports=billRoute;