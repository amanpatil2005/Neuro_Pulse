import Patient from "../models/Patient.Schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate JWT Token helper
const generateToken = (res, patientId) => {
  const secret = process.env.JWT_SECRET || "fallback_secret_key";
  
  const token = jwt.sign({ id: patientId }, secret, {
    expiresIn: "30d",
  });

  // Set token in an HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, 
  });

  // --- FIX: Return the token so the controller can capture it ---
  return token;
};

// @desc    Register a new patient
// @route   POST /api/patients/register
export const registerPatient = async (req, res) => {
  try {
    const { firstName, lastName, mobileNumber, email, password } = req.body;

    if (!firstName || !lastName || !mobileNumber || !email || !password) {
      return res.status(400).json({ message: "All registration fields are required" });
    }

    const emailExists = await Patient.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const mobileExists = await Patient.findOne({ mobileNumber });
    if (mobileExists) {
      return res.status(400).json({ message: "Mobile number is already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newPatient = await Patient.create({
      firstName,
      lastName,
      mobileNumber,
      email,
      password: hashedPassword,
    });

    if (newPatient) {
      // Now 'token' will successfully capture the returned string value
      const token = generateToken(res, newPatient._id);

      res.status(201).json({
        message: "Patient registered successfully",
        token: token, // Sent correctly now!
        patient: {
          id: newPatient._id,
          firstName: newPatient.firstName,
          lastName: newPatient.lastName,
          email: newPatient.email,
        },
      });
    } else {
      res.status(400).json({ message: "Invalid patient data received" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error during registration", error: error.message });
  }
};

// @desc    Login patient
// @route   POST /api/patients/login
export const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, patient.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Capturing the returned token value
    const token = generateToken(res, patient._id);

    res.status(200).json({
      message: "Logged in successfully",
      token: token, // Sent correctly now!
      patient: {
        id: patient._id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error during login", error: error.message });
  }
};

// @desc    Logout patient / clear cookie
// @route   POST /api/patients/logout
export const logoutPatient = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0), 
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error during logout", error: error.message });
  }
};