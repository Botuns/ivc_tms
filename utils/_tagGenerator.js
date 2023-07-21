// Import the necessary modules
const crypto = require('crypto');

// Function to generate an OTP code
const _tagNumGenerator=()=> {
  // Specify the length of the OTP code
  const otpLength = 4;

  // Generate a random buffer
  const buffer = crypto.randomBytes(otpLength);

  // Convert the buffer to a hexadecimal string
  const otpCode = buffer.toString('hex');

  // Return the OTP code
  return otpCode;
}

// Example usage
const otp = _tagNumGenerator();
console.log('Generated OTP:', otp);

module.exports= { _tagNumGenerator}
