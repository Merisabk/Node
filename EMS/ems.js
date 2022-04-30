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
        salary:2200,
    }
]

app.get('/', function(req,res){
            res.render("homepage.ejs",{employee: records})
        })

app.get('/entry', function(req,res){
    res.render("inputform.ejs")

})


app.post('/processform', function(req,res){

    records.push({
        empno: req.body.empno,
        empname: req.body.empname,
        dept: req.body.dept
    })
    res.render("homepage.ejs", {employee: records})

})

app.get('/deleterecord/:rec', function(req,res){
    let x = parseInt(req.params.rec)
    records.splice(x,1)
    res.render('homepage.ejs', {employee: records})
})

app.get('/updaterecord/:rec', function(req,res){
    res.render('updaterecord.ejs')
})

app.get('/employeedetail', function(req,res){
    let emp = ({
        empno: req.body.empno,
        empname: req.body.empname,
        dept: req.body.dept,
        salary: req.body.salary
    })
 
    res.render('employeedetail.ejs', {employee: emp}) 

})  

app.post('/:T', function(req,res){
    console.log(req.params)
    let T = req.params.T
})
app.listen(4005)