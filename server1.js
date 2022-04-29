// let refHTTP = require('http')
// let server = refHTTP.createServer(function(A,B){  
//     console.log("Hello friends")
// })

// server.listen(4005);


//Inside the response object there are many methods - one of them is with the name of write
// - write method is responsible to create yoour html file at runtime 
//response.end - sends the method to the browser. 

// let refHTTP = require('http')
// let f = function(request,response){
//     console.log("Hello friends")
// }
// let server = refHTTP.createServer(f)

// server.listen(4005)


// let refHTTP = require('http')
// let f = function(request,response){
//   if (request.url == "/"){
//       console.log("Welcome to the homepage")
//   }
//   if(request.url=="/trainings"){
//       console.log("we provide following trainings")
//       console.log("1.Java")
//       console.log("2.Node")
//       console.log("3.Phh")
//   }
//   if(request.url == "/services"){
//     console.log("We provide following services")
//     console.log("1. Trainings")
//     console.log("2.Software development")
//     console.log("3.Degree courses")

//   }
// }
// let server = refHTTP.createServer(f)

// server.listen(4005)

let refHTTP = require('http')
let f = function(request,response){
  if (request.url == "/"){
      response.write("Welcome to the homepage")
  }
  if(request.url=="/trainings"){
      response.write("we provide Java training")

  }
  if(request.url == "/services"){
      response.write("we provide trainings, degrees, software development")
  }
  response.end();  //sends response back to the client
}
let server = refHTTP.createServer(f)

server.listen(4005)