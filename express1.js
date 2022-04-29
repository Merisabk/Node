let express = require('express') //imports express

let refApplication = express()


refApplication.get('/', function(req, res) {
    res.write("<h1> <center> Click Any Number</h1>")
    for(let i=1;i<=10;i++){
        res.write(`<a href='http://localhost:4005/printing/${i}'> ${i}</a> <br>`)
    }
    res.end()
});


refApplication.get('/printing/:T', function(req, res) {
    console.log(req.params)
    let T=req.params.T

    res.write(`<h1>Times table of: ${T}</h1>`)
    for(let i=1;i<=10;i++){
        res.write(`${T} x ${T} =${T*i} <br>`)
    }
    res.end()
});

// refApplication.get('/add/:x/:y', function(req, res){
//     console.log(req.params)
//     let x = parseInt(req.params.x)
//     let y = parseInt(req.params.y)

//     res.write(`<h1> ${x}+${y} = ${x+y}`)
//     res.end()
// })

// refApplication.get('/sub/:x/:y', function(req, res){
//     let x = parseInt(req.params.x)
//     let y = parseInt(req.params.y)

//     res.write(`<h1> ${x}-${y} = ${x-y}</h1>`)
//     res.end()
// })

// append.get(["/merisa", "/marisa", "/merissa", "/merrisa"], function(req, res){
//     res.write("Merisa is back")
//     res.end()
// })

refApplication.listen(4005)


