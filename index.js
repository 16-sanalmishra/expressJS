// Import Express Package
var express = require('express');
var app = express();

// Create root URL
app.get('/', function (req, res) {
   res.send('Hello World');
})

// Start application at Port 3000
const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, () => {
   console.log("Server started at Port: ", PORT);
});