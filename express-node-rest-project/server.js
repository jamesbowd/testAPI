const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
 
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

// points express to the /public page for static pages e.g. css style sheets
app.use(express.static("public"));
 
// connect to database
mc.connect();
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

app.get('/home', function (req, res) {
	res.render('index');
});

// Retrieve all todos 
app.get('/todos', function (req, res) {
    mc.query('SELECT * FROM tasks', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Todos list.' });
    });
});


// Search for todos with ‘bug’ in their name
app.get('/todos/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    mc.query("SELECT * FROM tasks WHERE task LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Todos search list.' });
    });
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
// Set port to 3000 for now
app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log('Node app is running on port 3000');
});