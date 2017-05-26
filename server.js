var express = require('express'),
    app = express(),
    fs = require('fs');

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/products', function (req, res) {
    fs.readFile(__dirname + '/store_items.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.status(200).send(JSON.parse(data));
    });
});

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(8080, function () {
    console.log('Server is running at http://localhost:8080');
});