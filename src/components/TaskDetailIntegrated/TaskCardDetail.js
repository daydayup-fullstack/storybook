import React, { useState, useEffect } from "react"
import "./TaskCardDetail.css"
import PopupMenu from "../PopupMenu/PopupMenu";
import ActionList from "../ActionList/ActionList";
import Profile from "../Profile/Profile"
import CircularButton from "../CircularButton/CircularButton"
import CalendarPopup from "../CalendarPopup/CalendarPopup"
import { action } from "@storybook/addon-actions";
import TaskStory from "../TaskStory/TaskStory"


export const UsageInCircularButton = () => {
    const [toggleCalendar, setToggleCalendar] = useState(false);

    useEffect(() => {
        // to close the tab, there is a problem here wait to be solved
        document.onclick = () => {
            setToggleCalendar(false);
        };
    }, [toggleCalendar]);

    return (
        <div
            style={{ width: "200px" }}
            onClick={(e) => {
                setToggleCalendar(true);
                e.nativeEvent.stopImmediatePropagation();
            }}
        >
            <CircularButton iconName={"calendar_today"} />
            {toggleCalendar && (
                <CalendarPopup
                    handleSelectDate={(date) => {
                        return action(`The submitted due date is ${date}`);
                    }}
                />
            )}
        </div>
    );
};

const UnassignedInput = ({ assignee, handleAssigneeInput }) => {

    return (
        <span className='TCD__taskPanel__inputContainer' >
            <span className="material-icons TCD__taskPanel__assignContainer__icon">
                person_outline
            </span>
            <input className='TCD__taskPanel__inputContainer__input' placeholder="Name or email" value={assignee} onChange={handleAssigneeInput} autoFocus />
        </span>
    );
}

const NoDueDateInput = ({ dueDate, handleDueDateInput }) => {
    return (
        <span>
            {/* <span className="material-icons TCD__taskPanel__assignContainer__icon">
            </span> */}
            <span className="TCD__calendar">
                <UsageInCircularButton />
            </span>
            <input className='TCD__taskPanel__inputContainer__input' value={dueDate} onChange={handleDueDateInput} autoFocus />
        </span>
    );
}

function AssigneeArea({ assignState, Unassigned, assignee, handleAssigneeInput, setAssignState }) {

    return (<span>
        {assignState === "void" ? <div className='TCD__taskPanel__assignContainer' onClick={() => setAssignState("input")}>
            <Unassigned />
        </div> : <UnassignedInput assignee={assignee} handleAssigneeInput={handleAssigneeInput} />}
    </span>)
}

const DueDateArea = ({ dueDateState, NoDueDate, dueDate, handleDueDateInput, setDueDateState }) => {
    return (<span>
        {/* {dueDateState === false ? <div className='TCD__taskPanel__assignContainer TCD__taskPanel__dueDateContainer' onClick={() => setDueDateState(true)}>
            <NoDueDate />
        </div> :
            <div className=' TCD__taskPanel__focusedContainer' onClick={() => setDueDateState(true)}>
                <NoDueDateInput dueDate={dueDate} handleDueDateInput={handleDueDateInput} />
            </div>
        } */}
        <div className='TCD__taskPanel__assignContainer TCD__taskPanel__dueDateContainer'>
            <NoDueDate />
        </div>
    </span>);
}

const TaskCardDetailIntegrated = ({ task, user, user2 }) => {
    const [complete, setComplete] = useState(false);
    const handleCompleteClick = () => { setComplete(!complete); }
    const [taskDescription, setTaskDescription] = useState(task.description);
    const [assignState, setAssignState] = useState("void");
    const [assignee, setAssignee] = useState("");
    const [dueDateState, setDueDateState] = useState(false);
    const [dueDate, setDueDate] = useState("");
    const [descriptionBelow, setDescriptionBelow] = useState("");
    const handleAssigneeInput = (e) => setAssignee(e.target.value)
    const handleDueDateInput = (e) => setDueDate(e.target.value)
    const handleDescriptionBelowChange = (e) => setDescriptionBelow(e.target.value)
    const [comment, setComment] = useState("");
    const handleCommentInput = (e) => setComment(e.target.value);

    const Completed = () => {
        return (<div>
            <div className='TCD__header__completed' onClick={handleCompleteClick} >
                <span className="TCD__header__completed__check material-icons">
                    check
                </span>
                Completed
            </div>
        </div>);
    }

    const Uncompleted = () => {
        return (<div>
            <div className='TCD__header__uncompleted' onClick={handleCompleteClick} >
                <span className="TCD__header__uncompleted__check material-icons">
                    check
                </span>
                Mark Complete
            </div>
        </div>);
    }

    const Unassigned = () => {
        return (
            <span>
                <span className="material-icons TCD__taskPanel__assignContainer__icon ">
                    person_outline
                </span>
                <div className='TCD__taskPanel__assignContainer__status'>Unassigned</div>
            </span>
        );
    }





    const NoDueDate = () => {
        return (
            <span>
                {/* <span className="material-icons TCD__taskPanel__assignContainer__icon">
                    calendar_today
                </span> */}
                <span className='TCD__calendar'>
                    <UsageInCircularButton />
                </span>
            </span>
        );
    }





    const { id, description } = { task };
    return (<div className='tcdContainer'>
        <div className='TCD'>
            <div className='TCD__header'>
                {complete ? <Completed /> : <Uncompleted />}
                <span className="TCD__header__attach material-icons">
                    attach_file
            </span>
                <span className="material-icons">
                    call_split
            </span>
                <span className="material-icons">
                    link
            </span>
                <span className="material-icons">
                    thumb_up
            </span>
                {/* <Display>
                <ActionList />
            </Display> */}
                <span className="material-icons">
                    more_horiz
            </span>
                <span className="material-icons">
                    close
            </span>
            </div>
            <div className="TCD__height">
                <textarea className='TCD__taskName' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                <div className='TCD__taskPanel' >
                    <div className='TCD__taskPanel__title'>Assignee</div>
                    <AssigneeArea assignState={assignState} Unassigned={Unassigned} assignee={assignee} handleAssigneeInput={handleAssigneeInput} setAssignState={setAssignState} />
                    <br />
                    <div className='TCD__taskPanel__title'>Due date</div>
                    <DueDateArea handleDueDateInput={handleDueDateInput} dueDate={dueDate} dueDateState={dueDateState} setDueDateState={setDueDateState} NoDueDate={NoDueDate} />
                    <br />
                    <div className='TCD__taskPanel__title'>Description</div>
                    <textarea className='TCD__taskPanel__description' placeholder="Add more detail to this task..." value={descriptionBelow} onChange={handleDescriptionBelowChange} />
                    <button className='TCD__taskPanel__addContainer'><span className='TCD__taskPanel__addContainer__plus'>+</span> Add subtask</button>
                    <TaskStory />
                </div>
            </div>
            <div className='TCD__footer'>
                <div className='TCD__footer__container'>
                    <Profile user={user} className='TCD__footer__container__avatar' />
                    <div className='TCD__footer__container__commentContainer' >
                        <textarea className='TCD__footer__container__commentContainer__input' placeholder="Ask a question or post an update..." value={comment} onChange={handleCommentInput} />
                        <div className='TCD__footer__container__commentContainer__hideBar' >
                            <span className="material-icons">
                                text_format
                            </span>
                            <span class="material-icons">
                                alternate_email
                            </span>
                            <span class="material-icons">
                                emoji_emotions
                            </span>
                            <span class="material-icons">
                                attach_file
                            </span>
                            <button>
                                Comment
                            </button>
                        </div>
                    </div>
                </div>
                <div className='TCD__footer__below'>
                    <span className='TCD__footer__below__title'>Collaborators</span>
                    <span><Profile className='TCD__footer__below__profile' user={user} /></span>
                    <span><Profile className='TCD__footer__below__profile' user={user2} /></span>
                    <span className="material-icons TCD__footer__below__icon">
                        person_outline
                </span>
                    <span>+</span>
                </div>
            </div>
        </div>
    </div>);
}

export default TaskCardDetailIntegrated