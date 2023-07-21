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
        enum:['Ibadan','Oyo','Monatan','Oluyole-Onaara','Asipa-Oleyo','Omi-adio','Apata','Ikoyi-ile-Ogbomosho','Ibarapa','Coca-cola','Akinyele',],
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
        enum:['vip','stage_one','stage_two','stage_three'],
        required:true
    }
},
{ timestamps: true }
)
module.exports=mongoose.model('Atfal',atfalSchema)
