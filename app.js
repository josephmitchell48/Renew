const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/home.html'));
})
app.get('/home.html', function(req, res){
    res.sendFile(path.join(__dirname, '/home.html'));
})
app.get('/therapy.html', function(req, res){
    res.sendFile(path.join(__dirname, '/therapy.html'));
})
app.get('/massage.html', function(req, res){
    res.sendFile(path.join(__dirname, '/massage.html'));
})
app.get('/staff.html', function(req, res){
    res.sendFile(path.join(__dirname, '/staff.html'));
})
app.get('/contact.html', function(req, res){
    res.sendFile(path.join(__dirname, '/contact.html'));
})

app.listen(3000);

console.log('listening on port 3000...');
