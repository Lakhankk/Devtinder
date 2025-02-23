const express = require(`express`);

const app = express();

app.use("/user", (req,res) => {
    res.send("hahahhahahahaha")
});

app.get("/user", (req,res) => {
    res.send({firstName : "Lakhan", lastName : "Kharade"})
});

app.post("/user", (req,res) => {
    res.send("data upload successfully")
});

app.patch("/user", (req,res) => {
    res.send("user name updated")
});

app.put("/user", (req,res) => {
    res.send("data upadated sucessfully")
});

app.delete("/user", (req,res) => {
    res.send("user delete secussfully")
});

app.listen(7777,() =>{
    console.log(`server started sucefully`)
});