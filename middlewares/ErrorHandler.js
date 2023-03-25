import CustomErrorHandler from "./CustomErrorHandler";
const errorHandler=(err,req,res,next)=>{
    let statusCode=500;
    let msg="Internal Server Error";

if(err instanceof CustomErrorHandler)
{
    statusCode=err.status;
    msg=err.message;
}
}
export default errorHandler;