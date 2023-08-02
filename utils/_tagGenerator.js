// const Atfal = require('../models/_atfalModel');
// const Attendee= require('../models/_attendeeModel')
// const crypto = require('crypto')
function generateUniqueNumbers() {
  const maxNumber = 9000;
  let numbers = Array.from({ length: maxNumber }, (_, index) => index + 1);

  return function () {
    if (numbers.length === 0) {
      // Reset the array when all numbers have been used
      numbers = Array.from({ length: maxNumber }, (_, index) => index + 1);
    }

    // Generate a random index within the remaining numbers array
    const randomIndex = Math.floor(Math.random() * numbers.length);

    // Get the number at the random index and remove it from the array
    const randomNumber = numbers.splice(randomIndex, 1)[0];

    return randomNumber;
  };
}
async function _tagNumGenerator() {
  try {
    // const otpLength = 2;

    // // Generate a random buffer
    // const buffer = crypto.randomBytes(otpLength);
  
    // // Convert the buffer to a hexadecimal string
    // const otpCode = buffer.toString('hex');
    const num = generateUniqueNumbers()
    const nextTag = `ATF${num}`;
    const res = nextTag.toUpperCase()

    return res;
  } catch (error) {
    throw new Error('Error generating next tag number');
  }
}


async function _tagNumGeneratorForAttendee() {
  try {
    // const otpLength = 2;

    // // Generate a random buffer
    // const buffer = crypto.randomBytes(otpLength);
  
    // // Convert the buffer to a hexadecimal string
    // const otpCode = buffer.toString('hex');

    const num = generateUniqueNumbers()
    const nextTag = `K${num}`;
    const res = nextTag.toUpperCase()

    return res;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { _tagNumGenerator,_tagNumGeneratorForAttendee };
