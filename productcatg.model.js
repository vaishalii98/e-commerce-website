var mongoose=require('mongoose');
//mongoose LIBRARY USED TO PROVIDE mongodb SCHEMA CLASS TO MANAGE STRUCTURE OF DATA FOR DATABASE.

const Schema=mongoose.Schema;
//Schema NAMED CLASS PROVIDES INFORMATION ABOUT DATA TYPES.
//productCatg IS OBJECT AND USED TO DEFINED FILEDS/COLUMNS OF DATABASE WITH DATATYPES

var ProductCatg=new Schema({
    pcatgid:{type:Number},//INTEGER LIKE 1,2,3
    pcatgname:{type:String} //TEXT AMIT INDORE,INDIA,ELECTRONICS
},
{
    collection:'productcatg'
}
);
module.exports=mongoose.model('ProductCatg',ProductCatg);