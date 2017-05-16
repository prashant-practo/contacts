var express = require('express');
var contacts = require("../data/contacts.json")

/* GET home page. */

var info = function (req, res) {
  var contact = contacts.filter(function(item) {
    return item.id == req.params.id;
  })
  if(!contact[0])
    return res.status(404).json({error: "id not found"});
  var data = {
   title: 'Prashant Chaudhary is your father',
   contact : contact[0] 
  }
  res.render('info', data);
};

module.exports = info;
