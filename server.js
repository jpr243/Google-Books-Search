const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/api/books');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('API running'));

//Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Define Routes
//app.use('/api/books', require('./routes/api/books'));
//app.use('/api/index', require('./routes/api/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
