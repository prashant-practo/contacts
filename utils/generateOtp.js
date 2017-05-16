var contacts = require("../data/contacts.json");
var fs = require("fs");

module.exports = function(id, cb) {
  var otp = Math.floor(100000 + Math.random() * 900000);

  var cts = contacts.map(function(item) {
    if(item.id == id){
      item.otp = otp;
    }
    return item;
  });

  fs.writeFile("/Users/pc/practo/contacts/data/contacts.json", JSON.stringify(cts), "utf8", function(err){
    if(err) throw err;
      return cb(otp);             
  });
}