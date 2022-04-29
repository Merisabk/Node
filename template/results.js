let express=require('express')
let app =express()
app.set("view engine", "ejs")

app.get("/", function(req, res){
    let record ={
        name:"James Bond",
        phy:100,
        che:50,
        mat:150
    }
    res.render("results.ejs", record)

})
app.listen(4005)

