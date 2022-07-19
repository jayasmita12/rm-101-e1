import React from "react";
import styles from "./tasks.module.css";
import {Task}  from "../Task/index"

const Tasks = ({tasks,func}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {tasks.length!==0? tasks.map((ele)=>{
             return <Task key={ele.id} task={ele} tasks={tasks} update={func}/>
           }):null}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {tasks.length===0? <h1>Empty</h1>:null}
      </div>
    </>
  );
};

export default Tasks;
