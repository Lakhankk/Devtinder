const adminAuth = (req, res, next) => {
    console.log("admin auth checked")
    const token = "xyz";
    const isAdminAuth = token === "xyz";
    if(!isAdminAuth){
        res.status(401).send("Unathorised request")
    }else{
        next()
    }
};

const userAuth = (req, res, next) =>{
    console.log("User checked");
    const token = "abc";
    const isUserAuth = token === "abc";
    if(!isUserAuth){
        res.status(401).sent("Unthorised User");
    }else{
        next()
    }
};

module.exports = {adminAuth, userAuth};
