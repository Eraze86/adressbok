var express = require("express");
var router = express.Router();
let fs = require("fs")

/* GET home page. */
router.get("/", function (req, res, next) {
  let form = 
  `<form action="/" method="post">Namn: <input/ type="text" name="firstName"/><br/>` + 
  `Email: <input/ type="text" name="email"/><br/>` +
  `Phonenumber: <input/ type="number" name="phone"/><br/>` +
  `<Button type="submit">Lägg till</button></form>`;

   //hämtar data från users.json
   fs.readFile("users.json", (err, data) =>{
    if(err){
      console.log("oops it didint work" + err)
    }
    //parsar datan så man kan läsa det. 
    let users = JSON.parse(data)
  
for (let i = 0; i < users.length; i++) {
 
}  
  })
 
  res.send(form )
});

router.post("/", function(req, res){
  //hämta json data
  fs.readFile("users.json", (err, data)=> {
if(err){
  console.log("opps, didnt work" + err)
}
let users = JSON.parse(data)
//ändra datan
let newUser = {...req.body}
users.push(newUser)

//spara
fs.writeFile("users.json", JSON.stringify(users, null, 3), (err)=>{
  if(err){
    console.log("opps, didnt work" + err)
  }
  res.redirect("/")
})
  })
})

module.exports = router;
