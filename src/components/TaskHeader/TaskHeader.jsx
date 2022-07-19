import React from "react";
import styles from "./taskHeader.module.css";


const TaskHeader = ({tasks}) => {
  // sample values to be replaced
  let totalTask = tasks.length;
  let unCompleted= tasks.filter((e)=>{
    return e.done !== true
  });
  let unCompletedTask=unCompleted.length

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo App</h1>
      <b data-testid="header-remaining-task">UncompletedTask:{unCompletedTask}</b>
      <b data-testid="header-total-task">TotalTask:{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
