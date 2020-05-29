import React from 'react'
import TaskCardDetail from '../components/TaskCardDetail/TaskCardDetail'
import {Task} from "../model/model"
import {users} from "../model/newModel"
import { User } from "../model/model";
import {
    generateId,
    randomFirstName,
    randomLastName,
    randomDate,
    randomUserIdArray,
    randomNumber,
    randomSentence,
    randomAvatar,
    generateRandomColorIndex
} from "../model/utility"
const task = new Task(
    generateId(),
    randomFirstName() + randomLastName(),
    false,
    randomDate(),
    randomDate(),
    randomFirstName() + randomLastName(),
    randomUserIdArray(),
    randomNumber(),
    randomSentence(),
    randomSentence(),
    randomSentence(),
)

const user_1 = new User(
    generateId(),
    randomFirstName(),
    randomLastName(),
    randomAvatar(),
    generateRandomColorIndex()
)
const user = users.b803c8e6;
const user2 = users.e1c540b7;
export default {
    title: "TaskCardDetail",
    component: TaskCardDetail,
};

export const Normal = () => <TaskCardDetail task={task} user={user} user2={user2}/>