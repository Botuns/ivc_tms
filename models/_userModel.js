const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    _username:{
        type:String,
        required:true,
        unique:true,
    },
    _password:{
        type:String,
        required:true,
    },
    
},
{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('User', userSchema);