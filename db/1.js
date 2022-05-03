let express = require('express')
let bodyparser = require('body-parser')
let mysql= require("mysql") //driver 
let app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


let db = mysql.createConnection({

    host:"localhost",
    user:"root", 
    password: "Amana4dm1n*",
    database: "node"
})

db.connect()

app.post("/processForm", function(req,res){
    let sqlQuery = `insert into employee(name, salary, deptname) values ('${req.body.ename}', ${req.body.esalary}, '${req.body.edeptname}')`
    db.query(sqlQuery, function(err, result){})
    res.render("index.ejs")
})

app.get('/', function(req,res){
    res.render("index.ejs")
})

app.get("/entry", function(req,res){
    res.render("inputform.ejs")
})



app.get("/show", function(req,res){
    db.query("select * from employee", function(err, results){
        res.render("showdata.ejs", {employee:results})
})
})

app.get("/deleterecord/:empno", function(req,res){
    let sqlQuery = `delete from employee where empno = ${req.params.empno}`
    db.query(sqlQuery, function(err,results){
        db.query("select * from employee", function(err, results){
            res.render("showdata.ejs", {employee:results})
    })
  })
})

app.get("/filterdept/:dname", function(req,res){
    let sqlQuery = `select * from employee where deptname = '${req.params.dname}'`
    db.query(sqlQuery, function(err,results){
            res.render("showdata.ejs", {employee: results})
    })
})

app.post("/processUpdateForm", function(req,res){
    
    let sqlQuery = `update employee set name = '${req.body.ename}', salary = ${req.body.esalary}, deptname ='${req.body.edeptname}' where empno = ${req.body.empno}`
    console.log(sqlQuery)
    db.query(sqlQuery, function(err, results){
            db.query("select * from employee",function(err,results){
            res.render("showdata.ejs", {employee: results})
        }
        )
    })
    //res.render("showdata.ejs")
})

app.get("/updateRecord/:empno", function (req,res){
    let sqlQuery = `select * from employee where empno = ${req.params.empno}`
    db.query(sqlQuery, function(err,results){
        console.log(results)
            res.render("updateform.ejs", {data: results})
    })
})

app.listen(4005)