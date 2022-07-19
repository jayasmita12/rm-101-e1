import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = ({func,tasks}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [text,setText]=useState({
    id:null,
    text:"",
    done:false, 
    count: 1
  })
 console.log(text.id)
  const uptext=(value)=>{
      setText({
        ...text,
        text:value
      })   
  }

  return (
    <div className={styles.todoForm}>
      <input onChange={(e)=>uptext(e.target.value)} data-testid="add-task-input" type="text" />
      <button onClick={(()=>{
         setText({
           ...text,
           id:tasks.length+1
         })
        func([...tasks,text])})} data-testid="add-task-button">add todo</button>
    </div>
  );
};

export default AddTask;
