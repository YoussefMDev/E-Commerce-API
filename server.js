const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const compression = require('compression');

dotenv.config();
const morgan = require('morgan');
const fs = require('fs');



const dbConnection = require('./Config/Database');

const ApiError = require('./utils/ApiError');
const globalError = require('./Middlewares/errorMiddleware');
// Routes
const mountRoutes = require('./Routes');

// Connect with db
dbConnection();

// express app
const app = express();


// Enable other domains to access your application
app.use(cors());
app.options(/.*/, cors());


// compress all responses
app.use(compression());

// Checkout webhook
// app.post(
//   '/webhook-checkout',
//   express.raw({ type: 'application/json' }),
//   webhookCheckout
// );

const uploadsDir = path.join(__dirname, 'uploads');


if (!fs.existsSync(path.join(uploadsDir, 'categories'))) {
  fs.mkdirSync(path.join(uploadsDir, 'categories'), { recursive: true });
}


if (!fs.existsSync(path.join(uploadsDir, 'products'))) {
    fs.mkdirSync(path.join(uploadsDir, 'products'), { recursive: true });
}

console.log('Upload directories are ready.');

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.NODE_ENV}`);
}


// Mount Routes
mountRoutes(app);




// Handle unhandled routes
app.all(/.*/, (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});



app.use(globalError);

app.use((err, req, res, next) => {
  res.status(500).json({ msg: err.message });
});


const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`App  running on port ${PORT}`);
});


// Handle rejection outside express
process.on('unhandledRejection', (err) => {
  console.error(`unhandledRejection error: ${err.message}`);
  server.close(() =>{
    console.error("Shutting down...");
    process.exit(1);
  })
  
});