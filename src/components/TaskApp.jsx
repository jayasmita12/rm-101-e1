import React,{useState} from "react";
import AddTask from "./AddTask/AddTask";
import { useEffect } from "react";
import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";
import data from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [taskData,setTaskdata]=useState(data)
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={taskData}/>
      <AddTask func={setTaskdata} tasks={taskData}/>
      <Tasks tasks={taskData} func={setTaskdata}/>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
