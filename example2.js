const fs = require("fs");

//fs.writeFileSync('./output.txt','Hello,Node js learning!');

//fs.writeFile('./output.txt','async call',(err)=>{});

// const res=fs.readFileSync('./content.txt',"utf-8");
// console.log(res);

// fs.readFile('./content.txt','utf-8',(err,res)=>{
//     if(err) console.log("error: ",err);
//     else console.log(res);
// })

//fs.appendFileSync("./output.txt","Hey appended text here");

//fs.cpSync('./content.txt','./copied.txt');

//fs.unlinkSync("./copied.txt");
console.log(fs.statSync("./output.txt"));