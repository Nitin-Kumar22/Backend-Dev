// Exercise 4: Simple API
// Build a simple TODO API with endpoints for creating, reading, updating, and deleting tasks.
// Store tasks in memory.

import fs from "fs";

function createTask(name,task){
    try{
        let tasks=[];

        if(fs.existsSync("task.json")){
            let data=fs.readFileSync("task.json");
            let tasks=JSON.parse(data);
        }
        let istasks=tasks.find((t)=>t.name===name);
        if(istasks){
            return "Task already exists";
        }
        let ob={
            id:new Date(),
            name:name,
            task:task
        };
        
        tasks.push(ob);

        fs.writeFileSync("task.json",JSON.stringify(tasks,null,2));
        return "task created successfully";


    }
    catch(err){
        return err;
    }
    
}
function readTask(name){
    try{
        if(fs.existsSync("task.json")){
            let data=fs.readFileSync("task.json");
            let tasks=JSON.parse(data).find((t)=>t.name===name);
            if(tasks){
                return tasks;
            }
            return "task not found";
        }
        return "no task found";

    }
    catch(err){
        return err;
    }
}

function updateTask(name,task){
    try{
        if(fs.existsSync("task.json")){
            let data=fs.readFileSync("task.json");
            let istasks=JSON.parse(data).find((t)=>t.name===name);
            if(istasks){
                istasks.task.push(task);
                fs.writeFileSync("task.json",JSON.stringify(data,null,2));
                return "task update successfully";
            }
            return "no task found";
        }
        return "no task found";
    }
    catch(err){
        return err;
    }
}

function deleteTask(name){
    try{
        if(fs.existsSync("task.json")){
            let data=fs.readFileSync("task.json");
            let istasks=JSON.parse(data).find((t)=>t.name===name);
            if(istasks){
                let tasks=JSON.parse(data).filter((t)=>t.name!==name);
                fs.writeFileSync("task.json",JSON.stringify(tasks,null,2));
                return "task delete successfully";
            }


        }

    }
    catch(err){
        return err;
    }
}

export {createTask,readTask,updateTask,deleteTask};