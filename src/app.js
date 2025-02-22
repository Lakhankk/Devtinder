const express = require(`express`);

const app = express();

app.use("/home", (req,res) => {
    res.send("hello tooo");
});

app.use("/home2", (req,res)=> {
    res.send( "hello threee");
});

app.use((req,res) => {
    res.send("hello");
});

app.listen(7777,() =>{
    console.log(`server started sucefully`)
});