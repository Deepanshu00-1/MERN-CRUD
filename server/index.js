import express from "express"
import cors from "cors"
import connectDB from "./db.js"
import UserModel from "./models/UserModel.js";

const app = express();

app.use(cors()); // ensures frontend and backend connection
app.use(express.json()); // ensures that express data is passed in json format through routes or api calls

connectDB();

app.post("/userData", (req,res)=>{
    UserModel.create(req.body)
    .then(usersInfos => res.json(usersInfos))
    .catch(err => res.json(err));
});

app.get("/", (req,res)=>{
    UserModel.find({})
    .then(usersInfos => res.json(usersInfos))
    .catch(err => res.json(err))
})

app.get("/getUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(usersInfos => res.json(usersInfos))
    .catch(err => res.json(err))
})

app.put("/updateUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email, 
        age: req.body.age})
    .then(usersInfos => res.json(usersInfos))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

app.listen(8000, (req,res)=>{
    console.log("Server is running")
});