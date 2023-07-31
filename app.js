//Creating Server with the help of Express package 
const express=require('express');

const app=express();

app.listen(3000,()=>{
console.log("Server is Running on Port 3000 using Express")
 });

app.use((req,res)=>{
    res.send( 
        `
        <html>
        <head><title>OnePocket</title></head>
        <body><h1>Server Running on Port 3000 Using Express</h1></body>
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

