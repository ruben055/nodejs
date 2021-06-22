var express = require('express');
var app = express();

app.get('/', function (req, res) {
 res.send('Halo Node.js1!');
});

app.listen(3000, function () {
  console.log('aplikasi berjalan pada port 3000!');
});
