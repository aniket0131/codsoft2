// const express = require('express');
// const database = require('./config/config');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// // const cors = require('cors');
// const { register } = require('./Controllers/authController');
// const userRoutes = require("./Routes/AuthRoutes");
// const createjob = require("./Routes/jobRoutes");
// const CandidateRoutes = require("./Routes/CandidateRoutes");
// const cookieParser = require('cookie-parser'); // Add this line
// const cors = require('cors')    
// dotenv.config();

// app.use(cors(
//     {
//         origin: ['https://codsoft2-fed.vercel.app/'],
//         methods: ["POST","GET"],    
//         credentials: true,
//     }
// ))
// const app = express();
// const PORT = 4000;

// // const corsOptions = {
// //     origin: 'https://codsoft2-fed.vercel.app/', // Allow requests from this origin
// //     credentials: true, // Allow cookies and other credentials
// //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
// //     allowedHeaders: ['Content-Type', 'Authorization'], // Al
// //   };
// // Init Middleware
// app.use(bodyParser.json());
// app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(express.json());

// // Connect to the database
// database.connect();

// //Routes
// app.use('/api', userRoutes);
// app.use('/api', createjob);
// app.use("/api", CandidateRoutes);

// // Basic route to test the server
// app.get("/", (req, res) => {
//     return res.json({
//         success: true,
//         message: "Server is running....."
//     });
// });

// app.listen(PORT, () => {
//     console.log(`App is running on port ${PORT}`);
// });







// const express = require('express');
// const database = require('./config/config');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { register } = require('./Controllers/authController');
// const userRoutes = require("./Routes/AuthRoutes");
// const createjob = require("./Routes/jobRoutes");
// const CandidateRoutes = require("./Routes/CandidateRoutes");
// const cookieParser = require('cookie-parser'); 

// dotenv.config();

// const app = express();
// const PORT = 4000;

// const corsOptions = {
//   origin: 'https://codsoft2-fed.vercel.app', // Allow requests from this origin
//   credentials: true, // Allow cookies and other credentials
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
// };

// // Use CORS middleware
// app.use(cors(corsOptions));

// // Set CORS headers for all responses
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://codsoft2-fed.vercel.app');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   next();
// });

// // Handle preflight OPTIONS requests
// app.options('*', cors(corsOptions));

// // Init Middleware
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(express.json());

// // Connect to the database
// database.connect();

// // Routes
// app.use('/api', userRoutes);
// app.use('/api', createjob);
// app.use("/api", CandidateRoutes);

// // Basic route to test the server
// app.get("/", (req, res) => {
//   return res.json({
//     success: true,
//     message: "Server is running....."
//   });
// });

// app.listen(PORT, () => {
//   console.log(`App is running on port ${PORT}`);
// });



const express = require('express');
const database = require('./config/config');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { register } = require('./Controllers/authController');
const userRoutes = require("./Routes/AuthRoutes");
const createjob = require("./Routes/jobRoutes");
const CandidateRoutes = require("./Routes/CandidateRoutes");
const cookieParser = require('cookie-parser'); 

dotenv.config();

const app = express(); // Initialize app here

const PORT = 4000;

const corsOptions = {
  origin: 'https://codsoft2-fed.vercel.app', // Allow requests from this origin
  credentials: true, // Allow cookies and other credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Use CORS middleware
app.use(cors(corsOptions));

// Set CORS headers for all responses (optional, if using the corsOptions above this might be redundant)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://codsoft2-fed.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Handle preflight OPTIONS requests
app.options('*', cors(corsOptions));

// Init Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Connect to the database
database.connect();

// Routes
app.use('/api', userRoutes);
app.use('/api', createjob);
app.use("/api", CandidateRoutes);

// Basic route to test the server
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Server is running....."
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
