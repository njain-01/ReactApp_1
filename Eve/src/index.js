const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const objs=require('./playlist.json');
var path=require('path');
const app=express();
app.use('/static',express.static(__dirname+'/static'));
app.use(cors());

// var data=fs.readFileSync('./playlist.json','utf8');
// var lis=JSON.parse(data);
const playlist=objs.playlist;
app.get('/', (req, res) => {
  var qs = playlist.pop();
  playlist.unshift(qs);
  res.send(qs);
});
app.listen(8081, () => {
  console.log('listening on port 8081');
});






