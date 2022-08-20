import TokenAuth  from "../utils/token";
import Response from "../utils/response";

const VerifyToken = async(req, res, next) =>{
    const token = req.header("x-auth-token");
    if(!token){
        return Response.errorMessage(res, "No token provide",404)
    }

    try{
        const user = TokenAuth.getDataFromToken(token);
        req.user = user;
        return next();
    }

    catch(err){
        console.log("<><><><><><><", err);
    }

}
export default VerifyToken