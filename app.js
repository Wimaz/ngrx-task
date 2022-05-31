const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8080;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true  }));

app.all('/*', function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allo-Heaeders', 'Content-Type, Authorization, Content-Length, X-Request-With');
    next();
});

let array = ['Data', 'From', 'Server', 'Does', 'Update','Tho it resets once the server restarts...',  'Sorry'];

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/list', (req, res) => {
    res.send(200, {data: array})
})


app.post('/list', (req, res) => {
    array = req.body.items;
    res.send(200, {data: array});
});

app.listen(port, () => {
    console.log(`Express backend running on ${port}`);

})
