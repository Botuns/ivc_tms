const Atfal = require('../models/_atfalModel');
const Attendee= require('../models/_attendeeModel')

async function _tagNumGenerator(dila) {
  try {
    const _dila = dila
    // Find the last inserted document with the highest tag number
    const lastAtfal = await Atfal.findOne({_dila}, { _tagNumber: 1 }, { sort: { _tagNumber: -1 } });

    let lastTagNumber = 0;
    if (lastAtfal) {
      lastTagNumber = parseInt(lastAtfal._tagNumber.replace('ATF', ''), 10);
    }

    // Increment the tag number and pad it with leading zeroes to get the desired format
    const nextTagNumber = lastTagNumber + 1;
    const nextTag = `ATF${nextTagNumber.toString().padStart(4, '0')}`;

    return nextTag;
  } catch (error) {
    throw new Error('Error generating next tag number');
  }
}


async function _tagNumGeneratorForAttendee(phoneNumber) {
  try {
    // Find the last inserted document with the highest tag number
    const lastAttendee = await Attendee.findOne({phoneNumber}, { tagNumber: 1 }, { sort: { tagNumber: -1 } });

    let lastTagNumber = 0;
    if (lastAttendee) {
      lastTagNumber = parseInt(lastAttendee.tagNumber.replace('k', ''), 10);
    }

    // Increment the tag number and pad it with leading zeroes to get the desired format
    const nextTagNumber = lastTagNumber + 1;
    const nextTag = `k${nextTagNumber.toString().padStart(4, '0')}`;

    return nextTag;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { _tagNumGenerator,_tagNumGeneratorForAttendee };
