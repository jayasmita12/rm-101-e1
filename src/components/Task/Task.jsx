import React from "react";
import styles from "./task.module.css";
import {Counter} from "../Counter/index"
const Task = ({task,tasks,update}) => {
  // NOTE: do not delete `data-testid` key value pair
  const taskdatachnage=()=>{
 
    for(var i=0;i<tasks.length;i++){
      if(tasks[i].id===task.id){
       let ans= [...tasks]
          ans.splice(i,1)
        
        return  update(ans)
         
          

      }
    }
}

const dataupdone=()=>{
 let ans=[...tasks]
 for(var i=0;i<ans.length;i++){
   if(ans[i].id===task.id){
        ans[i].done=!ans[i].done  
     return  update(ans)
   }
 }

}
  return (
    <li data-testid="task" className={styles.task}>
    {task.done===true ?<input  onChange={()=>dataupdone()} type="checkbox" data-testid="task-checkbox" checked/> :<input   onChange={()=>dataupdone()} type="checkbox" data-testid="task-checkbox" />}
    {task.done===true ? <div style={{textDecoration:"line-through",textAlign:"center",width:"80px"}} data-testid="task-text">{task.text}</div> :<div style={{textAlign:"center",width:"80px"}} data-testid="task-text">{task.text}</div>}
    {/* Counter here */<Counter task={task} tasks={tasks} up={update}/>}
    <button onClick={()=>taskdatachnage()} data-testid="task-remove-button">X</button>
  </li>
  );
};

export default Task;
