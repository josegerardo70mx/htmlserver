const path = require('path');
const fs = require('fs/promises');
const http =require('http');


const app = http.createServer(async (request, response) => {
    const url = request.url;
    console.log(url);
    if(url === '/' ){
    const htmlpath = path.resolve('./lombok/index.html');
    const html = await fs.readFile(htmlpath, 'utf-8')
    response.write(html);
    }   
// responder archivos css...

   if(url.includes('/styles')){
    const stylePath = path.resolve(`./lombok${url}`)
// reading files...
    const stylesheet = await fs.readFile(stylePath, 'utf-8');
// response...
    response.setHeader('Content-Type', 'text/css')
    response.write(stylesheet);

   }

          
      
response.end();

});


const PORT = 8000

app.listen(PORT);

console.log('server is running');

