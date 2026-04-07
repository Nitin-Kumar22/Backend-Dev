import todo from "../model/todomodel.js";
import {statusCode} from "http-status-codes";

export function getTodo(req,res){
    try{
        const todo=todo.find();
        return res.status(statusCode.OK).json({
            code:statusCode.OK.code,
            message:statusCode.OK.message,
            data:todo
        });
    } catch(error){
        console.error("Error fetching todos:", error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json({
            code:statusCode.INTERNAL_SERVER_ERROR.code,
            message:statusCode.INTERNAL_SERVER_ERROR.message,
            data:null
        });
    }
}