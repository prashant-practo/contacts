var express = require('express');
var router = express.Router();
var contacts = require("../data/contacts.json");
var generateOtp = require('../utils/generateOtp.js');

/* GET home page. */

router.get('/', function(req, res) {
  var data = {
   title: 'Prashant Chaudhary is your father',
   contacts : contacts 
  }
  res.render('index', data);
});

router.get('/user/:id/otp', function(req, res) {
  var contact = contacts.filter(function(item) {
    return item.id == req.params.id;
  })
  contact = contact[0];
  if(!contact)
    return res.status(404).json({error: "id not found"});

  generateOtp(req.params.id, function(otp) {
    contact.otp = otp;
    var data = {
      title: 'Prashant Chaudhary is your father',
      contact : contact 
    }
    res.render('otp', data);
  });
  
});

module.exports = router;
