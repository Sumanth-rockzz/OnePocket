//Creating Server with the help of Express package 
const express=require('express');

const app=express();

//importing sum ,textFileContent and wordCount to to display 

const {sum}=require('./sum')
const {wordCount,fileText}=require('./wordCount');


app.listen(3000,()=>{
console.log("Server is Running on Port 3000 using Express")
 });

console.log(`Sum of Array Elements is ${sum}`);

app.use((req,res)=>{
    res.send( 
        `
        <html>
        <head>
        <title>OnePocket</title>
        </head>
        <style>
        body{
            padding:75px;
            padding-top:unset;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
        }
        h1,h2{
            text-align:center;
            text-decoration: underline;
        }
        p{
            padding:20px;
            border:2px solid black;
            border-radius:5px;
        }
        </style>
        <body>
        <h1>OnePocket Assessment</h1>
        <h2>Server Running on Port 3000 Using Express</h2>
        <h3>Sum of Array Elements is : ${sum}</h3>
        <p><b>${fileText}<b></p> 
        <h3>Total number of words in the data.txt file (above text) : ${wordCount}</h3>
        <h2>Thanks for considering my application!!!</h2>
        </body>
        </html>
        `
    );
 })


// //Creating Server with the help of http module

// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-type','text/html');
//     res.write(
//     `
//     <html>
//     <head><title>OnePocket</title></head>
//     <body><h1>Server Running on Port 3000 Using Http</h1></body>
//     </html>
//     `
//     )
//     res.end();
// })
// server.listen(3000,()=>{
//     console.log("Server is Running on Port 3000 Using Http");
// });

