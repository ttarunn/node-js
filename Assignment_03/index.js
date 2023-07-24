const fs = require('fs/promises');
const http = require('http');

// fs.writeFile('index.html', "<h1>Hello World</h1>\n<p>This is Tarun...</p>");
const fileWriter = async (filename, fileContent) => {
    try{
        await fs.writeFile('index.html', "<h1>Hello World</h1>\n<p>This is Tarun...</p>");
    }catch(err){
        console.log(err)
    }
};

fileWriter('index.html', "<h1>Hello World</h1>\n<p>This is Tarun...</p>");

const readFile = async(filename) => {
    try{
        let data = await fs.readFile(filename);
        return data
    }catch(err){
        console.log(err)
    }
};


const server = http.createServer((req, res) => {
    readFile('index.html').then(msg => {
        
        res.end(msg)
    })
});


server.listen(5000)