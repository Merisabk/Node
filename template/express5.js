let express=require("express")
let app = express()
app.set("view engine", "ejs")

app.get("/",function(req,res){
    let data={name:"shafeeq", dept:"HR", salary:3000}
    res.render("homepage.ejs",data)
})
app.listen(4005)