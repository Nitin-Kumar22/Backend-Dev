// Exercise 3: System Information Logger
// Create an application that logs system information (CPU, memory, platform) to a file every 5
// seconds using the os and fs modules.

import fs from "fs";
import os from "os";

function logSystemInfo(){
    let info={
        cpu:os.cpus(),
        memory:os.totalmem(),
        platform:os.platform()

    };
    
    fs.appendFile("systemInfo.txt",JSON.stringify(info,null,2),(err)=>{
        if(err){
            return err;
        }
        return "system info. logged successfully";
    });


}
setInterval(logSystemInfo,3000);
setTimeout(()=>{
    clearInterval(logSystemInfo);
    return "system info. logging stopped";
},6000);