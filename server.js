const express = require('express');
const app = express();
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors
const mysql = require('mysql');
const axios = require('axios');
const fastApiUrl = 'http://localhost:8000'; 

//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const {PORT = 3337} = process.env

// GLOBAL MIDDLEWARE
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies

//used to access css pages
app.use(express.static('views'));

// ROUTES 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// testing end points
axios.get(`${fastApiUrl}/getData`)
  .then(response => {
    console.log('FastAPI GET Response:', response.data);
  })
  .catch(error => {
    console.error('Error calling FastAPI GET:', error.message);
  });

  

/*

//Make MySQL Database Connection
const connection = mysql.createConnection({
	host : 'localhost',
	database : 'tables',
	user : 'demo',
	password : 'password'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});



//SELECT QUERY
// Endpoint to handle the HTTP request for retrieving data from the MySQL table
app.get('/getData', (req, res) => {
  // Perform the database query to retrieve data from the table
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Data retrieved successfully
    console.log('Query results:', results);
    return res.json(results);
  });
});

//INSERT QUERY
app.post('/insertData', (req, res) => {
  // Get data from the request body
  const { name, age } = req.body;

  const query = 'INSERT INTO users (name, age) VALUES  (?, ?)';
  connection.query(query, [name, age], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Data inserted successfully
    //console.log('Query results:', results);
    return res.status(200).send('Data inserted successfully');
  });
});

//NOT WORKING
app.post('/deleteData:id', (req, res) => { 
  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Internal Server Error');
    }

    // Data deleted successfully
    res.redirect('views/index.html')
    return res.status(200).send('Data deleted successfully');
  });
});

// Close the database connection when the application is terminated
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});
*/
// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))
