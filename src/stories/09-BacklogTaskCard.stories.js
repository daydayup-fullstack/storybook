import React from 'react'
import BacklogTaskCard from '../components/BacklogTaskCard/BacklogTaskCard'
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
    title: "BacklogTaskCard",
    component: BacklogTaskCard,
}


const task_1 = new Task(
    generateId(),
    randomFirstName() + randomLastName(),
    false,
    randomDate(),
    randomDate(),
    randomFirstName() + randomLastName(),
    randomUserIdArray(),
    randomNumber(),
    randomSentence(),
)

export const Task1 = () => {
    return <BacklogTaskCard task={task_1} />
}

