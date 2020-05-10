import React from 'react';
import './BacklogTaskCard.css';

export default class BacklogTaskCard extends React.Component {
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
        const { description, } = this.props.task;
        const { visible } = this.state;
        const BacklogTaskCardContainerClass = 'BacklogTaskCardContainer' + (visible ? 'Visible' : 'Invisible');
        return (<div className={BacklogTaskCardContainerClass} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
            <div className={BacklogTaskCardContainerClass + "_BacklogTaskCard"}>
                <span className={BacklogTaskCardContainerClass + "_BacklogTaskCard_more material-icons"}>
                    more_horiz
            </span>
                <div className={BacklogTaskCardContainerClass + "_BacklogTaskCard_description"}>{description}</div>
                <div className={BacklogTaskCardContainerClass + "_BacklogTaskCard_icons"}>
                    <span className={BacklogTaskCardContainerClass + "_BacklogTaskCard_icons_identity material-icons"}>
                        perm_identity
                    </span>
                    <span className={BacklogTaskCardContainerClass + "_BacklogTaskCard_icons_calendar material-icons"}>
                        calendar_today
                    </span>
                    <span className={BacklogTaskCardContainerClass + "_BacklogTaskCard_icons_split material-icons"}>
                        call_split
                </span>
                    <span className={BacklogTaskCardContainerClass + "_BacklogTaskCard_icons_thumb material-icons"}>
                        thumb_up
                </span>
                </div>
            </div>
        </div>);
    }
}



