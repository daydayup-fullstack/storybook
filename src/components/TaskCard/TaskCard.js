import React from 'react';
import './TaskCard.css';

export default class TaskCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }


    handleMouseOver = () => {
        this.setState({ visible: true })
    }

    handleMouseOut = () => {
        this.setState({ visible: false })
    }


    render() {
        const { tag, attachment,name } = this.props.task;
        const { visible } = this.state;
        const TaskCardContainerClass = 'TaskCardContainer' + (visible ? 'Visible' : 'Invisible');
        return (<div className={TaskCardContainerClass} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
            <div className={TaskCardContainerClass + "_TaskCard"}>
                <span className={TaskCardContainerClass + "_TaskCard_more material-icons"}>
                    more_horiz
            </span>
                <div className={TaskCardContainerClass + "_TaskCard_description"}>
                    <img src={attachment} alt="task attachment" />
                </div>
                <div className={TaskCardContainerClass + "_TaskCard-" + tag}>
                </div>
                <div className={TaskCardContainerClass + "_TaskCard_name"}>
                    {name}
                </div>
                <div className={TaskCardContainerClass + "_TaskCard_icons"}>
                    <span className={TaskCardContainerClass + "_TaskCard_icons_identity material-icons"}>
                        perm_identity
                    </span>
                    <span className={TaskCardContainerClass + "_TaskCard_icons_calendar material-icons"}>
                        calendar_today
                    </span>
                </div>
            </div>
        </div>);
    }
}



