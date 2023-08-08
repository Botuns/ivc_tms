const Attendee = require('../models/_attendeeModel');
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

  async getAttendeesByType(type) {
    try {
      return await Attendee.find({ type: type });
    } catch (error) {
      throw new Error(`Error fetching Attendee for Type: ${type}`);
    }
  }

  async getCountOfAttendeesByAuxiliary(auxiliary) {
    try {
      return await Attendee.countDocuments({ auxiliary });
    } catch (error) {
      throw new Error(`Error fetching count of attendees for auxiliary: ${auxiliary}`);
    }
  }
  async getAtfalByIds(ids) {
    try {
      return await Attendee.find({ _id: { $in: ids } });
    } catch (error) {
      throw new Error('Error fetching Attendees by IDs');
    }
  }

  async createAttendee(data) {
    try {
      const { fullName, auxiliary, type,phoneNumber,dila } = data;

      // Generate the next tag number based on the type using _tagNumGenerator function
      const tagNumber = await _tagNumGeneratorForAttendee();

      const attendeeObj = {
        fullName,
        auxiliary,
        dila,
        type,
        tagNumber,
        phoneNumber
      };

      return await Attendee.create(attendeeObj);
    } catch (error) {
      console.log(error)
      throw new Error('Error creating new attendee');
    }
  }

  async updateDilaAndType(attendeeId, newDila, newType) {
    try {
      const attendee = await Attendee.findById(attendeeId);

      if (!attendee) {
        throw new Error('Attendee not found');
      }

      attendee.dila = newDila;
      attendee.type = newType;

      await attendee.save();

      return attendee;
    } catch (error) {
      throw new Error('Error updating dila and type');
    }
  }

  async getCountOfHandlersByDila(dila) {
    try {
      const count = await Attendee.countDocuments({ type: 'Handler', dila });
      return count;
    } catch (error) {
      throw new Error(`Error fetching count of handlers for dila: ${dila}`);
    }
  }
  
}

module.exports = AttendeeService;
