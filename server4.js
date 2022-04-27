let refHTTP = require('http')
let refURL = require('url')

let requestDetails
function homePage(request, response) {
    if(requestDetails.pathname == "/"){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write('<h1> <center> Click any number</h1>')

        for (let i=1; i<10; i++){
            response.write(`<a href='http://localhost:4005/printing?num=${i}'> ${i} </a> <br>`)
        }
        response.end()
    }

}

function printingPage(request, response) {
    let data = requestDetails.query
        response.writeHead(200, {'Content-Type': 'text/html'});
        let T=parseInt(data.num)
        response.write(`<h1> <center> Times table of ${T}</h1>`)
        for (let i=1; i<=10;i++){
            response.write(`${T} x ${i} = ${T*i} <br>`)
        }
        response.end()
    }

let f = function(request, response) {
    requestDetails = refURL.parse(request.url, true)

    if(requestDetails.pathname == "/"){
        homePage(request, response)
    }

    if(requestDetails.pathname == "/printing"){
        printingPage(request, response)
    }
  
}
let server = refHTTP.createServer(f)
server.listen(4005)