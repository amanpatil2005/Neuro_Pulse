import express from 'express';
import 'dotenv/config'; 
import cookieParser from 'cookie-parser'; // Imported for parsing JWT cookies
import connectDB from './config/db.js'; 
import patientRoutes from './routes/patient.routes.js'; // Imported your new routes

const app = express();

// --- Middleware Configuration ---
app.use(express.json());
app.use(cookieParser()); // Mandatoy to read/parse incoming secure cookies

// --- Database Connection ---
connectDB();

// --- API Route Mounts ---
app.use('/api/patients', patientRoutes);

// --- Base Test Route ---
app.get('/', (req, res) => {
  res.send('Modular Server is live!');
});

// --- Server Startup ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Modular Server running on port ${PORT}`);
});