
let express = require("express")
let cookieparser=require("cookie-parser")
let app = express()

app.use(cookieparser()) //use middleware

app.get("/", function(req,res){
    res.write('<h1> <center> Select any number</h1>')
    for(let i=1;i<=10;i++){
        res.write(`<a href='http://localhost:4005/range/${i}'> ${i}</a> <br>`)
    }
    res.end()
});

app.get("/range/:T", function(req,res){
    res.cookie("T", req.params.T)
    let T=req.params.T
    res.write(`<h1>Times table of: ${T}</h1>`)
    res.write(`<h2>select range<h2>`)
    for(let i=10; i<=100;i+=10){
        res.write(`<a href = 'http://localhost:4005/printing/${i}'> ${i}</a> <br>`)
    }

    res.end()
})

app.get("/printing/:T", function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req.params)
    let T = parseInt(req.params.T)
    let x = parseInt(req.cookies.x)

    res.write("Times table of:" + req.cookies.x)
    for(let i=1; i<=T ;i++){
   res.write(`${T} x ${i} = ${T*i} <br>`)
    }
    res.end();
}
)


app.listen(4005)






// let express = require("express")
// let cookieparser=require("cookie-parser")
// let app = express()

// app.use(cookieparser()) //use middleware

// app.get("/createCookie", function(req,res){
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     res.cookie("org1", "QA consulting")
//     res.write("Cookie created")
//     res.end()
// })

// app.get("/readCookie", function(req,res){
//     console.log(req.cookies.org1)
//     res.write(req.cookies.org1)
//     res.end()
// })

// app.listen(4005)


