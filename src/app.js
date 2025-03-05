const express = require(`express`);

const app = express();

app.use("/user", (req, res, next) => {
    console.log("route handler 1");
    //res.send("Response 1")
    next()
},
(req, res, next) => {
    console.log("route handler 2");
    next()
    //res.send("Response 2");
},
(req, res, next) => {
    console.log("route handler 3");
    res.send("Response 3");
},
(req, res, next) => {
    console.log("route handler 4");
    res.send("response 4");
}
);

app.listen(7777,() =>{
    console.log(`server started sucefully`)
});