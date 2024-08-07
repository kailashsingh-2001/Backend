const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

const rootRoute = require('./routes/rootroute');
const productRoutes = require('./routes/products/productroutes');
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
const app = express();

// Connect to the database
connectDB();

// Body parser middleware to parse JSON bodies
app.use(express.json());

// Logger middleware to log HTTP requests
app.use(morgan("dev"));

// Root route
app.use('/', rootRoute);

// Product routes
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow);
});
