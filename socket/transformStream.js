const express=require('express')
const app=express()
const http=require('http');
const fs=require('fs')
const {createReadStream, Transform}=require('stream')

const server=http.createServer((req,res)=>{


    const SampleFileSream=fs.createReadStream('text.txt');
    const outputWriteableStream=fs.createWriteStream('output.txt');

    const transformStream=new Transform({
        transform(chunk,utf8,callback){
            // console.log();
            
            outputWriteableStream.write(chunk.toString());
        }
    })
    // SampleFileSream.on('data',(chunk)=>{
    //     const finalString=chunk.toString().toUpperCase();
    //     
    // })
    SampleFileSream.pipe(transformStream).pipe(outputWriteableStream);
    res.end();
})
const Port=process.env.PORT || 5000;
server.listen(Port,()=>{
console.log('server is listening');
})