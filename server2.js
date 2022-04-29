
// let refHTTP = require('http')
// let f = function(request,response){
//     console.log(request.url)
//   }

// let server = refHTTP.createServer(f)

// server.listen(4005)

// let refHTTP = require('http')
// let refUrl = require('url')
// let f = function(request, response) {
//     let requestDetails = refUrl.parse(request.url,true)
//   let data = requestDetails.query
//   console.log(request.url)
//   console.log("----------------")
//   console.log(requestDetails)

//   console.log("----------------")
//   console.log(data.pathname)
//   console.log(data)
// }

// let server = refHTTP.createServer(f)
// server.listen(4005)


// let refHTTP = require('http')
// let refURL = require('url')
// let f = function(request, response) {
//     let requestDetails = refURL.parse(request.url, true)
//     let data = requestDetails.query

//     if (requestDetails.pathname == "/add") {
//         let result = parseInt(data.no1) + parseInt(data.no2)
//         console.log("The result of addition is: " + result)
//     }

//     if (requestDetails.pathname == "/sub") {
//         let result = parseInt(data.no1) - parseInt(data.no2)
//         console.log("The result of subtraction is: " + result)
//     }

//     if (requestDetails.pathname == "/mul") {
//         let result = parseInt(data.no1) * parseInt(data.no2)
//         console.log("The result of multiplication is: " + result)
//     }

//     if (requestDetails.pathname == "/div") {
//         let result = parseInt(data.no1) / parseInt(data.no2)
//         console.log("The result of division is: " + result)
//     }
// }

// let server = refHTTP.createServer(f)
// server.listen(4005)
