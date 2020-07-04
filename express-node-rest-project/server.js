const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'tasks_api'
});
 
// connect to database
mc.connect();
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
// Set port to 3000 for now
app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log('Node app is running on port 3000');
});