const Attendee = require('../models/attendeeModel');
const { _tagNumGeneratorForAttendee } = require('../utils/_tagGenerator');

class AttendeeService {
  async getAllAttendees() {
    try {
      return await Attendee.find();
    } catch (error) {
      throw new Error('Error fetching all attendees');
    }
  }

  async getCountOfAllAttendees() {
    try {
      return await Attendee.countDocuments();
    } catch (error) {
      throw new Error('Error fetching count of all attendees');
    }
  }

  async getCountOfAttendeesByType(type) {
    try {
      return await Attendee.countDocuments({ type });
    } catch (error) {
      throw new Error(`Error fetching count of attendees for type: ${type}`);
    }
  }

  async getCountOfAttendeesByAuxiliary(auxiliary) {
    try {
      return await Attendee.countDocuments({ auxiliary });
    } catch (error) {
      throw new Error(`Error fetching count of attendees for auxiliary: ${auxiliary}`);
    }
  }

  async createAttendee(data) {
    try {
      const { fullName, auxiliary, type } = data;

      // Generate the next tag number based on the type using _tagNumGenerator function
      const tagNumber = await _tagNumGeneratorForAttendee(type);

      const attendeeObj = {
        fullName,
        auxiliary,
        type,
        tagNumber,
      };

      return await Attendee.create(attendeeObj);
    } catch (error) {
      throw new Error('Error creating new attendee');
    }
  }
}

module.exports = AttendeeService;
