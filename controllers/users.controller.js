const path = require ("path")

const users = require ("../models/users.model");
exports.getUsers = (req,res)=>{
    res.sendfile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUser = (req,res) =>{

    const name = req.body.name;
    const age  = Number(req.body.age);
    const User = {
        name,
        age,
    }
    users.push(User)
    res.status(201).json({
        success : true,
        users,
    });

};