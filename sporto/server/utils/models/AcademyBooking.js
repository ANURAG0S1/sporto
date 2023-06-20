const mongoose = require('mongoose');

const academyBookingSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  sport:String,
  date: {
    type: Date,
    required: true
  },
  // Add more fields as per your requirements
});

const AcademyBooking = mongoose.model('AcademyBooking', academyBookingSchema);

module.exports = AcademyBooking;