const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  auxiliary: {
    type: String,
    enum: ['lajna', 'khudam', 'ansarullah'],
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
      'Volunteer',
    ],
    required: true,
  },
  tagNumber: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Attendee', attendeeSchema);
