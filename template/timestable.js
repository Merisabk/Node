let express=require('express')
let bodyparser=require('body-parser')
let app=express()
app.set('view engine', 'ejs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get("/", function(req,res){
    res.render("timestable.ejs")
})

app.get("/secondPage/:T", function(req,res){
        let A=req.params.T
        res.render("secondPage.ejs",{TimesTable:A} )
})

app.get("/thirdPage/:T/:R", function(req,res){
    let timestable=req.params.T
    let range = req.params.R
    res.render("thirdPage.ejs", {TimesTable: timestable, Range:range})
})

app.listen(4005)