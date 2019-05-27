//load any required libraries/modules
const express = require('express');

//declare tunables
const PORT = 3000;

//create an express application
const app = express();

//Routes
app.use(
    express.static(__dirname + '/public')
);

//start the server, listen on port 3000
app.listen(PORT, () => {
    console.info('Application started on port ${PORT} at ${new Date()}');
    console.info(__dirname);
} );

