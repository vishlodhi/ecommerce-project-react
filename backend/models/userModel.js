import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    }
}, { minimize: false }
)

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;