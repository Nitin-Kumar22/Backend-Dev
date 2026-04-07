import joi from "joi";
import {statusCodes} from "http-status-codes";

export function addTodo(req,res,next){
    try{
        const schema=joi.object({
            title:joi.string().required().min(3).max(100),
            description:joi.string().required().min(5).max(500)
        })
        let {error,value}=schema.validate(req.body);
        if(error){
            return res.status(statusCodes.BAD_REQUEST).json({
                code:statusCodes.BAD_REQUEST.code,
                message:statusCodes.BAD_REQUEST.message,
                data:error.details[0].message
            });
        }
        else{
            req.body=value;
            next();

            
        }
    }
    catch(error){
        console.error("Error validating todo:", error);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            code:statusCodes.INTERNAL_SERVER_ERROR.code,
            message:statusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        });
    }

}