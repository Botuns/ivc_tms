const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  auxiliary: {
    type: String,
    enum: ['lajna', 'khudam', 'ansarullah','not-applicable'],
    required: true,
  },
  dila:{
    type:String,
    enum:['Ibadan','Oyo','Monatan','Oluyole-Onaara','Asipa-Oleyo','Omi-adio','Apata','Ikoyi-ile-Ogbomosho','Ibarapa','Coca-cola','Akinyele','Oke-ogun','none'],
    default:'none'
},
  type: {
    type: String,
    enum: [
      'Handler',
      'Guest',
      'Security',
      'Kitchen',
      'AudioVisual',
      'Ishaat',
      'Electricity',
      'Mobilization',
      'Mulk-Officer',
      'State-Officer',
      'Plumbing',
      'Vip-Care',
      'Sports',
      'Wakariamoh',
      'Tajneed',
      'Medical'
    ],
    required: true,
  },
  tagNumber: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Attendee', attendeeSchema);
