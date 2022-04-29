let express = require('express')

let app = express()


app.use(["/withdraw, /checkBalance"], function(req,res,next){
    console.log("checking user")
        next()
    })

app.get("/", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Homepage")
    res.end()
});

app.get("/printStatement", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("print statement")
    res.end()
})

app.get("/withdraw", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("withdraw")
    res.end();
}
)

app.get("/checkBalance", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("check balance")
    res.end();
}
)


app.listen(4005)