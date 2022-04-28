const express = require("express");
const app = express();
app.use(express.static('public'))


app.get("/",function(req,res){
  res.sendFile(__dirname + "/src/index.html")
});

app.listen(3000,()=>{
  console.log("server is started at port on 3000");
})
