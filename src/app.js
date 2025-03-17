const express = require(`express`);
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user');

app.use(express.json());

app.get("/user", async (req, res) => {

    const userEmail = req.body.emailId;

   try{ 
    const users = await User.find({emailId : userEmail});
    if(users.length === 0){
        res.status(404).send("user not found");
    }else{
        res.send(users)
    }
    
   }catch(err) {
    res.status(404).send("something went wrong")
   }

});

app.get("/feed", async (req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
    }catch(err) {
        res.status(404).send("something wents wrong")
    }
});

app.post("/signup", async (req, res) => {

    const user = new User(req.body);

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
