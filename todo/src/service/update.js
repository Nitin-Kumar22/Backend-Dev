import Todo from "../model/todomodel.js";
import {statusCode} from "http-status-codes";

export function updateTodo(req,res){
    try{
        const {id}=req.params;
        const {title,description}=req.body;
        if(!title||!description){
            return res.status(statusCode.BAD_REQUEST).json({
                code:statusCode.BAD_REQUEST.code,
                message:statusCode.BAD_REQUEST.message,
                data:null
            });

        }
        const updatedTodo=Todo.findByIdAndUpdate(id,{title,description},{new:true});
        if(!updatedTodo){
            return res.status(statusCode.NOT_FOUND).json({
                code:statusCode.NOT_FOUND.code,
                message:statusCode.NOT_FOUND.message,
                data:null
            });
        }
        return res.status(statusCode.OK).json({
            code:statusCode.OK.code,
            message:statusCode.OK.message,
            data:null
        });


    }
    catch(error){
        console.error("Error updating todo:", error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json({
            code:statusCode.INTERNAL_SERVER_ERROR.code,
            message:statusCode.INTERNAL_SERVER_ERROR.message,
            data:null
        });
    }
}