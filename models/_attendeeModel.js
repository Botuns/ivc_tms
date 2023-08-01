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
      'State-Officer'
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
