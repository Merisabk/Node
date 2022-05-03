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
    },
    {
        empno:2,
        empname: "Jessie",
        dept: 3,
        salary:2000,
    },
    {
        empno:3,
        empname: "Mercy",
        dept: 1,
        salary:2500,
    },
    {
        empno:4,
        empname: "Jack",
        dept: 3,
        salary:1500,
    },
    {
        empno:5,
        empname: "Esther",
        dept: 2,
        salary:2000,
    },
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
        dept: req.body.dept,
        salary: req.body.salary
    })
    res.render("homepage.ejs", {employee: records})

})

app.get('/deleterecord/:rec', function(req,res){
    let x = parseInt(req.params.rec)
    records.splice(x,1)
    res.render('homepage.ejs', {employee: records})
})

app.post('/processupdateform', function(req,res){

    for(let i=0; i<records.length; i++) {
        if(records[i].empno == req.body.empno) {
            records[i].empname = req.body.empname
            records[i].dept = parseInt(req.body.dept)
            records[i].salary = req.body.salary

        }
    }
    res.render("homepage.ejs", {employee: records})

})

app.get('/updaterecord/:empno', function(req,res){
    let record
    for(let i=0;i<records.length;i++){
        if(records[i].empno==req.params.empno){
            record = records[i]
        }
    }
    res.render('updateform.ejs', {data:record})

})

// app.get('/employeedetail/:empno', function(req,res){

//     let record
//     for(let i=0;i<records.length;i++){
//         if(records[i].empno==req.params.empno){
//             records[i].empname = req.body.empname
//             records[i].dept = parseInt(req.body.dept)
//             records[i].salary = req.body.salary
//             record = records[i]
//         }
//     }

//     res.render('employeedetail.ejs', {employee: record})
// })  

app.get('/employeedetail/:x/:y/:z', function(req,res){
    let name = (req.params.x)
    let dept = parseInt(req.params.y)
    let sal = parseInt(req.params.z)
    let dname
    if(dept==1){
     dname="IT"
    }if(dept==2){
     dname="HR"
    }if(dept==3){
     dname="Sales"
    }
    res.render('employeedetail.ejs', {employee: name, department: dname, salary: sal})
})  

app.get("/departmentList/:dname",function(req,res){

    let departmentRecords=[]
    for(let i=0;i<records.length;i++){
        // console.log(records[i])
        if(records[i].dept==req.params.dname){
            departmentRecords.push(records[i])
        }

    }
    res.render("homepage.ejs",{employee: departmentRecords})
})

app.listen(4005)