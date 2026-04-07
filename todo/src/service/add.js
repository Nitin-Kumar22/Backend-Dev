import todo from "../model/todomodel.js";
import {StatusCode} from "http-status-codes";

export function addTodo(req,res){
    try {
        const {title,description}=req.body;
        if(!title||!description){
            res.status(StatusCode.BAD_REQUEST.code).json({
            code:StatusCode.BAD_REQUEST.code,
            message:StatusCode.BAD_REQUEST.message,
            data:null
            });
        }
        let newTodo=new todo({
            title,
            description,
        });
        return newTodo.save();
        res.status(StatusCode.CREATED.code).json({
            code:StatusCode.CREATED.code,
            message:StatusCode.CREATED.message,
            data:newTodo
        });
        
        
    } 
    catch (error) {
        console.log("error adding todo",error);
        res.status(StatusCode.INTERNAL_SERVER_ERROR.code).json({
            code:StatusCode.INTERNAL_SERVER_ERROR.code,
            message:StatusCode.INTERNAL_SERVER_ERROR.message,
            data:null
        });
        
    }
}
