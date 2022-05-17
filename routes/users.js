var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET users listing. */

  router.get('/', function(req, res, next) {
    fs.readFile("users.json", function(err, data){
   if(err){
     console.log("ohh noo", err)
   }
   const users = JSON.parse(data)
   res.send(users)
   
    })
   });


module.exports = router;
