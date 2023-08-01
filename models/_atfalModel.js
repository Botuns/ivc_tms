const mongoose = require('mongoose');

// declare the schema of the mongo model

var atfalSchema= new mongoose.Schema({
    _fullName:{
        type:String,
        required:true,
    },
    _age:{
        type:String,
        required:true
    },
    _dila:{
        type:String,
        enum:['Ibadan','Oyo','Monatan','Oluyole-Onaara','Asipa-Oleyo','Omi-adio','Apata','Ikoyi-ile-Ogbomosho','Ibarapa','Coca-cola','Akinyele','Oke-ogun'],
        required:true,
    },
    _tagNumber:{
        type:String,
        required:true,
    },
    _muqami:{
        type:String,
        required:true
    },
    _stage:{
        type:String,
        enum:['stage_one','stage_two','stage_three','stage_four'],
        required:true
    },
    amountPaid:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['paid','unfinished','unpaid'],
        default:'unpaid'
    }
    
},
{ timestamps: true }
)
module.exports=mongoose.model('Atfal',atfalSchema)
