import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String
});
const UserModel = mongoose.model("usersInfos", UserSchema);

export default UserModel;