// const Atfal = require('../models/_atfalModel');
const Attendee= require('../models/_attendeeModel')
const crypto = require('crypto')
async function _tagNumGenerator() {
  try {
    const otpLength = 2;

    // Generate a random buffer
    const buffer = crypto.randomBytes(otpLength);
  
    // Convert the buffer to a hexadecimal string
    const otpCode = buffer.toString('hex');
    const nextTag = `ATF${otpCode}`;
    const res = nextTag.toUpperCase()

    return res;
  } catch (error) {
    throw new Error('Error generating next tag number');
  }
}


async function _tagNumGeneratorForAttendee() {
  try {
    const otpLength = 2;

    // Generate a random buffer
    const buffer = crypto.randomBytes(otpLength);
  
    // Convert the buffer to a hexadecimal string
    const otpCode = buffer.toString('hex');
    const nextTag = `K${otpCode}`;
    const res = nextTag.toUpperCase()

    return res;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { _tagNumGenerator,_tagNumGeneratorForAttendee };
