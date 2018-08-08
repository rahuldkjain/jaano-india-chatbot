var http = require('http');
var fs = require('fs');
function onRequest(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
  fs.readFile('./index.html',null, function(error,data){
    if(error){
      resopnse.writeHead(404);
      response.write('Page Not Found')
    } else {
        response.write(data);
    }
  });
	response.write();
	response.end();
}
http.createServer(onRequest).listen(8000);
