let express= require('express')
let bodyparser = require('body-parser')
const { redirect } = require('express/lib/response')
let app = express()

app.set('view engine', 'ejs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


let records = 
    [
    {
        empno:101, 
        name:"Shafeeq", 
        salary:1200,
        deptcode:1
    },
    {
        empno:102, 
        name:"John", 
        salary:2200,
        deptcode:2
    },
    {
        empno:103, 
        name:"Jon", 
        salary:2200,
        deptcode:1
    },
    {
        empno:104, 
        name:"Joy", 
        salary:2200,
        deptcode:2
    },
    {
        empno:105, 
        name:"Fay", 
        salary:2200,
        deptcode:3
    }
]

app.post('/process', function(req,res){
    records.push({
        empno: req.body.empno,
        name: req.body.name,
        salary:parseInt(req.body.salary),
        deptcode: parseInt(req.body.deptcode)
    })
    res.render("showData.ejs",{employees:records})
})

app.get('/', function(req, res){
    res.render("homePage.ejs")
})

app.get('/enterData', function(req,res) {
     res.render("enterData.ejs")
})

app.get('/showData', function(req,res){
    res.render("showData.ejs",{employees:records})
})

app.get('/deleterecord/:rec', function(req,res){
    let i = parseInt(req.params.rec)
    records.splice(i,1)
    res.render('showData.ejs', {employees:records} )
})

app.get('/updaterecord/:rec', function(req, res){
    let i = parseInt(req.params.rec)
    

})

app.listen(4005)

