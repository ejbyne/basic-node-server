var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('layout', 'layout');

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(request, response){
  response.render('index', {layout:'layout'});
});

app.post('/', function(request, response){
  var name = request.param('name');
  response.render('welcome',{name:name, layout:'layout'});
});

server.listen(3000, function() {
  console.log("Server listening on port 3000");
});

module.exports = server;
