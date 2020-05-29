import React from "react";
import TaskListItem from "../components/TaskListItem/TaskListItem";
import TaskList from "../components/TaskList/TaskList";
import { project } from "../model/newModel";

export default {
  title: "TaskList",
  component: TaskListItem,
};

const columnId = project.columnOrder[0];
const column = project.columns[columnId];
const tasks = column.taskIds.map((id) => project.tasks[id]);

export const list = () => (
  <TaskList>
    {tasks.map((task) => {
      return <TaskListItem task={task} key={task.id} />;
    })}
  </TaskList>
);
