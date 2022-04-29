let refHTTP = require('http')
let refURL = require('url')
let f = function(request, response) {
    let requestDetails = refURL.parse(request.url, true)
    let data = requestDetails.query
    
    console.log(requestDetails.pathname)
    console.log(requestDetails.query.num)

    if(requestDetails.pathname == "/"){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write('<h1> <center> Click any number</h1>')

        for (let i=1; i<10; i++){
            response.write(`<a href='http://localhost:4005/printing?num=${i}'> ${i} </a> <br>`)
        }
        response.end()
    }

    if(requestDetails.pathname == "/printing"){
        response.writeHead(200, {'Content-Type': 'text/html'});
        let T=parseInt(data.num)
        response.write(`<h1> <center> Times table of ${T}</h1>`)
        
        for (let i=1; i<=10;i++){
            response.write(`${T} x ${i} = ${T*i} <br>`)
        }
        response.end()
    }
   
}

let server = refHTTP.createServer(f)
server.listen(4005)