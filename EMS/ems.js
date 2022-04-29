let express = require('express')
let bodyparser = require('body-parser')
let app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

let records = [
    {
        empno:1,
        empname: "John",
        dept: 1,
    }
]

app.get('/', function(req,res){
            res.render("homepage.ejs")
        })

app.get('/entry', function(req,res){
    res.render("inputform.ejs")

})

app.get('/showdata', function(req,res){
    res.render("showdata.ejs", {employee: records})
})

app.post('/processform', function(req,res){

    records.push({
        empno: req.body.empno,
        empname: req.body.empname,
        dept: req.body.dept
    })
    res.render("showdata.ejs", {employee: records})

})

app.get('/deleterecord/:rec', function(req,res){
    let x = parseInt(req.params.rec)
    records.splice(x,1)
    res.render('showdata.ejs', {employee: records})
})

app.get('/updaterecord/:rec', function(req,res){
    res.render('updaterecord.ejs')
})

app.get('/employeedetail/:T', function(req,res){
    let empdetail = req.params.T
    res.render('employeedetail.ejs', {employeename: records}) 

})
app.listen(4005)