const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Init middleware
