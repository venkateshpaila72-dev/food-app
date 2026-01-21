import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import dotenv from "dotenv";
dotenv.config();


//login user
const loginUser = async (req, res) => {
    const {email,password}=req.body;
    try{
        const user= await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"user does not exist."})
        }

        const match= await bcrypt.compare(password,user.password);
        if(!match){
            return res.json({success:false,message:"Incorrect Credentials."})
        }

        const token=createToken(user._id);
        res.json({success:true,token})
    }catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}
// create token

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

//register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const exist = await userModel.findOne({ email });
        //checking is user already exist
        if (exist) {
            return res.json({ success: false, Message: "User already exist" });
        }
        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, Message: "Incorrect Email Or Invalid Email." })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be atleat 8 characters." })
        }
        //hashing userpassword

        const salt=await bcrypt.genSalt(10);
        const hashespassword= await bcrypt.hash(password,salt);

        const newuser = new userModel({
            name:name,
            email:email,
            password:hashespassword,

        })
       const user = await newuser.save();
        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (err) {
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}

//logout user
const logoutuser = async (req, res) => {

}


export { loginUser, registerUser, logoutuser }

