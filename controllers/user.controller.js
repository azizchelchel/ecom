import {User} from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

export const signup = async (req, res) => { 
    const {email, password} = req.body;
    cryptedPassword = bcrypt.hash(password, 8)
    // creation of object user
    const object_user = new User(
        {
            ... email, password: cryptedPassword
        }
    );
    try {
        object_user.save();
        return res.status(200).send("welcome, signedup successfully!")
    } catch (error) {
        console.log(error)
        
    }

 }

 export const signin = async (req, res) => {
    const {password, email} = req.body;
    const foundUser = await User.findOne({email});
    const passMatching = bcrypt.compare(password, foundUser.password)
    if (foundUser && passMatching) {
        const payload = {
            name: foundUser.name,
            email: foundUser.email,
            id: foundUser.id
        }
        // creation of the token
        const token = jwt.sign(
            payload, process.env.secret_string,
            {
                expiresIn: '24h'
            }
        )
        return res.send({token})
    }
 }

// update user
export const updateUser = async (req, res) => {
    // retreive user id from request params
    const {userID} = req.params;
   
    //retreive user data from request body
    const userInfo = req.body;
    //encrypt new password 
    const encryptedPassword = await bcrypt.hash(userInfo?.password, 8)
    const newUserInfo = {...userInfo, password: encryptedPassword};
    User.findByIdAndUpdate(userID, {$set: {newUserInfo}}, {new: true})
    .then(
        (user) => { 
            return res.send(
                {user}
            )
         }
    )
}