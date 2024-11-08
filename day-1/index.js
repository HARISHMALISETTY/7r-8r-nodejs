// const{a,b,c,sample}=require("./file1")

// sample()


const http =require("http");
const port=3100;

const server=http.createServer((req,res)=>{

    // res.write("hello world");
    res.write("welcome to nodejs")
    res.end("end with response");
})

server.listen(port,()=>{
    console.log(`server is running at`, port)
})
