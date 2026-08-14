import express from "express";
import { 
  registerPatient, 
  loginPatient, 
  logoutPatient 
} from "../contollers/patient.controller.js";

const router = express.Router();

// Authentication Routes
router.post("/register", registerPatient);
router.post("/login", loginPatient);
router.post("/logout", logoutPatient);

export default router;