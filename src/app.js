const express = require(`express`);

const app = express();

app.get("/user/:userId/:name/:password", (req,res) => {
    console.log(req.params)
    res.send({firstName : "Lakhan", lastName: "Kharade"})
});

app.listen(7777,() =>{
    console.log(`server started sucefully`)
});