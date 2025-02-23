const express = require(`express`);

const app = express();

app.use("/hello/2", (req,res) => {
    res.send("abarakadabra")
});

app.use("/hello", (req,res) => {
    res.send("hello hello hello");
});

app.use("/test", (req,res)=> {
    res.send( "hello ");
});

app.use("/", (req,res) => {
    res.send("Namaste Lakhan");
});

app.listen(7777,() =>{
    console.log(`server started sucefully`)
});