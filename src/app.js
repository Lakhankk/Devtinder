const express = require(`express`);
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');


app.post("/signup", async (req, res) => {

    const user = new User({
        firstName: "Ankit",
        lastName: "Shahu",
        emailId: "ankit@gmail.com",
        password: "ankit@1234"
    });

    try{
        await user.save();
    res.send("User added sucessfully")
    }catch(err) {
        res.status(401).send("error saving the user:" + err.massege)
    }
});


connectDB().then(() => {
    console.log("Databse connection esatablished");
    app.listen(7777, () => {
        console.log("server started on port 7777...");
    });    
}).catch((err) => {
    console.log("Databse connection failed")
});
