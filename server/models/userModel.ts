import mongoose from "mongoose"
import Joi from 'joi'
import { joiPasswordExtendCore } from 'joi-password'

const joiPassword = Joi.extend(joiPasswordExtendCore)


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  
    required: [true, "user must have email"]
  },
  userName: {
    type: String,
    required: true
  },
  password: String,
})

const UserModel = mongoose.model("users", UserSchema)

export default UserModel;

export const UserValidation = Joi.object({  
  email: Joi.string().email().required(),
  userName: Joi.string().min(3).max(16).required(),
  password: joiPassword
      .string()
      .min(6)
      .max(16)
      .required(),
  repeatPassword: Joi.equal(Joi.ref('password')).required()
}).required()
