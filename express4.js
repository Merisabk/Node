let express = require("express")
let bodyparser = require("body-parser")
let app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))


app.get("/", function(req,res){
    // console.log(__dirname)
    res.sendFile(__dirname + "//welcome.html")
})

app.post("/process", function(req,res){
    let num1=parseInt(req.body.no1)
    let num2=parseInt(req.body.no2)

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Form received <br>")
    res.write("Result =" + (num1+num2))

    res.end()
})
app.listen(4005)
