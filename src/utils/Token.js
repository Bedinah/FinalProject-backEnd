import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export default class TokenAuth{
//function to generate
static generateToken(data){
    const token=jwt.sign(data,process.env.JWT_KEY,{expiresIn:"10d"});
    return token;
}
//decode token
static getDataFromToken(token){ 
 const data=jwt.verify(token,process.env.JWT_KEY);
return data;
}
}
