const {Readable,Writable}=require('stream');

// const readableStream=new Readable({
//   read(s){
//     console.log(s)
//   }
// });
// const writableStream=new Writable({
//   write(s){
//     console.log(s.toString())
//   }
// })
// readableStream.on('data',(chunk)=>{
//   console.log("DATA IS: "+ chunk);
//   writableStream.write(chunk)
// })
// readableStream.push("PAK");

//transform stream ----------------->CAN READ AND WRITE at same time
