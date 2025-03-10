const adminAuth = (req, res, next) => {
    console.log("admin access checked");
    const token = "1223";
    const isAdminAuth = token === "123";
    if(!isAdminAuth){
        res.status(401).send("something went wrong");
    }else{
        next()
    }
};

const userAuth = (req, res, next) => {
    console.log("User checked")
    const token = "1234";
    const isUserAuth = token === "1234";
    if(!isUserAuth){
        res.status(200).send("Login Failed");
    }else{
        next()
    }
};

module.exports = { adminAuth, userAuth };