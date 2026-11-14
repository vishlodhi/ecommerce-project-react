import validator from 'validator';
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import createToken from '../utils/jwt.js';
import jwt from "jsonwebtoken"


/* routes for Login */
const userLogin = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({
                success: false,
                message: "Missing details"
            });
        }
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Invalid Email Format"
            })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        const token = createToken(user._id);
        return res.json({
            success: true,
            token
        })

    }
    catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message
        })
    }
}

/* routes for user registration */

const registerUser = async (req, res) => {

    try {
        const { name, password, email } = req.body;

        /* Check whether user exists or not */

        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "Missing details"
            })
        }
        /* Validate email and strong password */
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email"
            })
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Password must be at least 8 characters"
            })
        }
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({
                success: false,
                message: "User already exists"
            })
        }
        /* Hashing user password */
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        return res.json({
            success: true,
            token
        })
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}


/* Admin Login */

const adminLogin = async (req, res) => {

    try {

        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(
                { role: "admin" },
                process.env.JWT_SECRET)

            return res.json({
                success: true,
                token
            })
        }
        return res.json({
            success: false,
            message: "Invalid Credentials"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Invalid Credentials"
        })
    }
}
export { userLogin, registerUser, adminLogin } 