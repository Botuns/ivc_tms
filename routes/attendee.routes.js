const express = require('express');
const router = express.Router();
const AttendeeController = require('../controllers/_attendeeController');
const attendeeController = new AttendeeController();

// Get all attendees
router.get('/attendees', attendeeController.getAllAttendees);

// Get count of all attendees
router.get('/attendees/count', attendeeController.getCountOfAllAttendees);

// Get count of attendees by type
router.get('/attendees/count/:type', attendeeController.getCountOfAttendeesByType);

// Get count of attendees by auxiliary
router.get('/attendees/count/auxiliary/:auxiliary', attendeeController.getCountOfAttendeesByAuxiliary);

// Create a new attendee
router.post('/attendees', attendeeController.createAttendee);

module.exports = router;
