var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    console.log(req.url)
    if(req.url === "/welcome"){
        res.writeHead(200, { "Content-Type": "text/plain" });
        //set the response
        res.write("Welcome to Dominos!");
        //end the response
        res.end();
    }else if(req.url === "/contact"){
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        
        res.end(JSON.stringify({  
                phone: '18602100000', 
                mail: 'guestcaredominos@jublfood.com' 
            }
        ));
    }
    else{
        res.writeHead(400, { "Content-Type": "text/plain" })
        res.end("Page Not Found")
    }
    
};


httpServer.listen(8081)

module.exports = httpServer;