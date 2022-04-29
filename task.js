let express = require('express')
let app = express()


app.use("/printing/:T/:x", function(req,res,next){
    if(req.params.x=="80"){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write("Noooo")
        res.end()
    } else {
        next()
    }
})

app.get("/", function(req,res){
    res.write('<h1> <center> Select any number</h1>')
    for(let i=1;i<=10;i++){
        res.write(`<a href='http://localhost:4005/range/${i}'> ${i}</a> <br>`)
    }
    res.end()
});

app.get("/range/:T", function(req,res){
    let T=req.params.T
    res.write(`<h1>Times table of: ${T}</h1>`)
    res.write(`<h2>select range<h2>`)
    for(let i=10; i<=100;i+=10){
        res.write(`<a href = 'http://localhost:4005/printing/${T}/${i}'> ${i}</a> <br>`)
    }

    res.end()
})

app.get("/printing/:T/:x", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req.params)
    let T = parseInt(req.params.T)
    let x = parseInt(req.params.x)

    res.write("Times table of:" + T)
    for(let i=1; i<=x ;i++){
   res.write(`${T} x ${i} = ${T*i} <br>`)
    }
    res.end();
}
)


app.listen(4005)