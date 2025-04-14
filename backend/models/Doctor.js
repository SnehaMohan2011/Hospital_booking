const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: Number, default: 0 }, // Optional, default to 0
  gender: { type: String, enum: ["Male", "Female", "Other"], default: "Other" }, // Optional, with allowed values
  timeSlots: {
    type: [String],
    default: [], // Optional, defaults to an empty array
  }, // Example: ["10:00 AM", "2:00 PM"]
});



module.exports = mongoose.model("Doctor", doctorSchema);
