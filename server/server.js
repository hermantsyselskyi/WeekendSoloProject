var express = require('express');
var app = express();
var bodyParser = require( 'body-parser' );

var addEntry = require('./modules/routers/addEntryRouter.router.js');


var port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use( bodyParser.json() );

app.use('/addEntry', addEntry);


app.listen(port, function(){
    console.log('listening on port', port);  
});