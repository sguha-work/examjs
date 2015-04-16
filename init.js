var express = require('express');
var applicationMain = express();
var server   = require("./server");
var locallydb = require('locallydb');//creating localdb instance
var db = new locallydb('./examdb');


applicationMain.get('/', function (req, res) {
  res.send("Setup done")
});
var serverApplication = applicationMain.listen(server.ApplicationPortNumber, function () {
   console.log('Application server listening at %s',  server.ApplicationPortNumber)
});