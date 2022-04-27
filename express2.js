let express = require('express')
let app = express()

app.all("/qa", function(req,res) {
    res.write(`QA limited is back`)
    res.end()
})

// app.get("/uk", function(req,res,next){
//                        res.write("England")
//                        next()
//                     },
//                     function(req,res,next){
//                         res.write("Wales")
//                         next()
//                     },
//                     function(req,res,next){
//                         res.write("Ireland")
//                         res.end()
//                     },  
// )


let f1 = function(req,res,next){
    res.write("England")
    next()
}
let f2 = function(req,res,next){
    res.write("Wales")
    next()
}
let f3 = function(req,res,next){
    res.write("Ireland")
    res.end()
}

app.get("/uk1", [f1,f2,f3])


app.listen(4005)