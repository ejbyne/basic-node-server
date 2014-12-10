var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

var users = require('./modules/users.js');

app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(request, response){
  response.render('index', {layout:'layout'});
});

app.get('/users/:username', function(request, response){
  var login = request.params.username;
  response.json(users[login]);
});

app.post('/', function(request, response){
  var name = request.param('name');
  response.render('welcome',{name:name, layout:'layout'});
});

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("Server listening on port " + port);
});

module.exports = server;
