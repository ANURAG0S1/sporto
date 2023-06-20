const express = require('express');
const router = express.Router();
const AcademyBooking = require('../models/AcademyBooking');

// Create a new booking
router.post('/bookings', async (req, res) => {
  try {
    const booking = await AcademyBooking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Retrieve all bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await AcademyBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Retrieve a specific booking
router.get('/bookings/:id', async (req, res) => {
  try {
    const booking = await AcademyBooking.findById(req.params.id);
    if (booking) {
      res.json(booking);
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a booking
router.put('/bookings/:id', async (req, res) => {
  try {
    const booking = await AcademyBooking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (booking) {
      res.json(booking);
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a booking
router.delete('/bookings/:id', async (req, res) => {
  try {
    const booking = await AcademyBooking.findByIdAndDelete(req.params.id);
    if (booking) {
      res.json({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
