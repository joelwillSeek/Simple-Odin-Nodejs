const https = require("http");
const url = require("url");
const fs=require("fs")
const port=8089

https
  .createServer((req, res) => {
    let parsedUrl=url.parse(req.url,true);
    let filename=`.${parsedUrl.pathname}`;
  
    fs.readFile(filename,(error,data)=>{
      if(error){
        res.writeHead(404,{"Content-Type":"text/html"});
        return res.end("Page Not Found")
      }

      res.writeHead(200,{"Content-Type":"text/html"});
      res.write(data);
      return res.end();
    })
    })
  .listen(port);

console.log("listen on "+port);
