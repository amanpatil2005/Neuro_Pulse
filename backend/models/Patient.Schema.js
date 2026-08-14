import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  // --- Core Registration Fields ---
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
    trim: true, 
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  

  // --- Post-Registration Profile Data (Collected Later) ---
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  bloodGroup: { type: String },
  emergencyContact: {
    name: { type: String },
    phone: { type: String }
  }
}, { 
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

const Patient = mongoose.model('Patient', PatientSchema);

export default Patient;