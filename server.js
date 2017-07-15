var express   = require('express'); //Framework Express

const app = express();

app.use('/', express.static('public'));

app.set('port', (process.env.PORT || 3000));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
})

app.listen(app.get('port'),function(){
    console.log('Node app is running on port',
    app.get('port'));
});