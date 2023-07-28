const AttendeeService = require('../services/_attendeeService');
const attendeeService = new AttendeeService();

class AttendeeController {
  async getAllAttendees(req, res) {
    try {
      const attendees = await attendeeService.getAllAttendees();
      res.json(attendees);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching all attendees' });
    }
  }

  async getCountOfAllAttendees(req, res) {
    try {
      const count = await attendeeService.getCountOfAllAttendees();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching count of all attendees' });
    }
  }

  async getCountOfAttendeesByType(req, res) {
    try {
      const type = req.params.type;
      const count = await attendeeService.getCountOfAttendeesByType(type);
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching count of attendees by type' });
    }
  }

  async getCountOfAttendeesByAuxiliary(req, res) {
    try {
      const auxiliary = req.params.auxiliary;
      const count = await attendeeService.getCountOfAttendeesByAuxiliary(auxiliary);
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching count of attendees by auxiliary' });
    }
  }

  async createAttendee(req, res) {
    try {
      const data = req.body;
      const attendee = await attendeeService.createAttendee(data);
      res.status(201).json(attendee);
    } catch (error) {
      res.status(500).json({ error: 'Error creating new attendee' });
    }
  }
}

module.exports = AttendeeController;
