import React from 'react'
export default class Task extends React.Component {
    constructor({ props }) {
        super(props);
        this.state = {
            id: '',
            name: '',
            isCompleted: false,
            dueDate: Date,
            createdDate: Date,
            createdBy: '',
            assignedTo: [],
            columnIndex: 0,
        }
    }

    componentDidMount() {
        // const { id, name, isCompleted, dueDate, createdDate, createdBy, assignedTo, columnIndex } = this.state;
        this.setState({
            id: this.props.task.id,
            name: this.props.task.name,
            isCompleted: this.props.task.isCompleted,
            dueDate: this.props.task.dueDate,
            createdDate: this.props.task.createdDate,
            createdBy: this.props.task.createdBy,
            assignedTo: this.props.task.assignedTo,
            columnIndex: this.props.task.columnIndex,
        })
    }

    render() {
        const { id, name, isCompleted, dueDate, createdDate, createdBy, assignedTo, columnIndex } = this.state;
        return (<div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>isCompleted: {isCompleted === true ? 'true' : 'false'}</div>
            <div>dueDate: {dueDate.toString()}</div>
            <div>createdDate: {createdDate.toString()}</div>
            <div>createdBy: {createdBy}</div>
            <div>assignedTo: {assignedTo}</div>
            <div>columnIndex: {columnIndex}</div>
        </div>)
    }
}