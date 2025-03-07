const express = require(`express`);

const app = express();

app.use("/", (err, req, res, next) => {
    res.status(501).send("Something wents wrong");
})

app.get("/getUserData", (req, res) => {
   throw new error(bdbsbsbdcb);
   res.send("gor user data")
});

app.use("/", (err, req, res, next) => {
    res.status(501).send("Something wents wrong");
})

app.listen(7777,() =>{
    console.log(`server started sucefully`)
});