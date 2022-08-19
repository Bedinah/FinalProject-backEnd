import Response from "../utils/response";
import TokenAuth from "../utils/token";


const VerifyToken =  (req,res,next)=>{
   const Token = req.header("x-auth-token");
   if(!Token){
       return Response.errorMessage(res,"no token provided",403);
   }
   try{
      const user=TokenAuth.decodeToken(Token);

       req.user=user;
      return next();
  } catch(err){
        console.log("<><><><><>>>>>",err);
   }

}
export default VerifyToken;