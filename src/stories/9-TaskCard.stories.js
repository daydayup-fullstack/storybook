import React from 'react'
import TaskCard from '../components/TaskCard/TaskCard'
import {Task} from '../model/model'
import {
    generateId,
    randomFirstName,
    randomLastName,
    randomDate,
    randomUserIdArray,
    randomNumber,
    randomSentence,
} from "../model/utility"

export default {
    title: "TaskCard",
    component: TaskCard,
}


const task_1 = new Task(
    generateId(),
    randomSentence(),
    false,
    randomDate(),
    randomDate(),
    randomFirstName() + randomLastName(),
    randomUserIdArray(),
    randomNumber(),
    randomSentence(),
    "Simple",
    "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png"
)

const task_2 = new Task(
    generateId(),
    randomSentence(),
    false,
    randomDate(),
    randomDate(),
    randomFirstName() + randomLastName(),
    randomUserIdArray(),
    randomNumber(),
    randomSentence(),
    "Normal",
    "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png"
)

const task_3 = new Task(
    generateId(),
    randomSentence(),
    false,
    randomDate(),
    randomDate(),
    randomFirstName() + randomLastName(),
    randomUserIdArray(),
    randomNumber(),
    randomSentence(),
    "Complex",
    "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png"
)

const task_4 = new Task(
    generateId(),
    randomSentence(),
    false,
    randomDate(),
    randomDate(),
    randomFirstName() + randomLastName(),
    randomUserIdArray(),
    randomNumber(),
    randomSentence(),
    "UI",
    "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png"
)

export const Task1 = () => {
    return <TaskCard task={task_1} />
}
export const Task2 = () => {
    return <TaskCard task={task_2} />
}
export const Task3 = () => {
    return <TaskCard task={task_3} />
}
export const Task4 = () => {
    return <TaskCard task={task_4} />
}

