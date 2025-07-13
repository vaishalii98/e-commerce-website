var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var paymentDetails=new Schema({
    orderCreationId:{type:String},
    razorpayPaymentId:{type:String},
    razorpayOrderId:{type:String},
    razorpaySignature:{type:String},
    CId:{type:Number},
    billid:{type:Number},
    amount:{type:Number}
},
{
    collection:'PaymentDetails'
}
);
module.exports=mongoose.model('PaymentDetails', paymentDetails);