const http=require('http');

const server=http.createServer((req,res)=>{//server bann jayega
 console.log("Request in");
 console.log(req.headers);
 res.end("Namaste to all");

}); 
server.listen(8002,()=>console.log('Server runs'));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") res.end("Hello, GET request!");
//   else if (req.method === "POST") {
//     let body = "";
//     req.on("data", chunk => (body += chunk));
//     req.on("end", () => res.end(body));
//   }
// });

// server.listen(8002, () => console.log("Server running on port 8002"));
