const express = require(`express`);

const app = express();

const{adminAuth, userAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);

//app.use("/user", userAuth)

app.get("/admin/getAllData", (req, res) => {
    res.send("All data fetched")
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("User deleted")
});

app.get("/user/userLogin", userAuth, (req, res) => {
    res.send("Login sucessfully")
});

app.listen(7777,() =>{
    console.log(`server started sucefully`)
});