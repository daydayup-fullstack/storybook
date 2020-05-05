import React from 'react'
import Task from '../components/Task/Task'
import {TaskInfo} from '../model/model'
import {
    generateId,
    randomFirstName,
    randomLastName,
    randomDate,
    randomUserIdArray,
    randomNumber,
} from "../model/utility"

export default {
    title: "Task",
    component: Task,
}

const task_1 = new TaskInfo(
    generateId(),
    randomFirstName() + randomLastName(),
    false,
    randomDate(),
    randomDate(),
    randomFirstName() + randomLastName(),
    randomUserIdArray(),
    randomNumber()
)

export const Task1 = () => {
    return <Task task={task_1} />
}

