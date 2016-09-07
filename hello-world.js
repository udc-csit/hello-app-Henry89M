var http = require('http');

const PORT = 3000;

function handleRequest(request, response) {
    response.writeHead(200);
    response.end('Hello Http, from Henry Marroquin');
}


var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

