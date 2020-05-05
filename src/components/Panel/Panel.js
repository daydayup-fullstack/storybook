import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Panel.css';
import { action } from '@storybook/addon-actions';

const Panel = ({ panelName }) => {

    const [shouldCollapse, setShouldCollapse] = useState(false);

    const handleTogglePanel = () => shouldCollapse ? setShouldCollapse(false) : setShouldCollapse(true)
    const iconName = shouldCollapse ? "arrow_right" : "arrow_drop_down"

    return (
        <div className="panel">
            <div className="panel__top">
                <div className="material-icons panel__icon" onClick={handleTogglePanel}>
                    {iconName}
                </div>
                <h2 className="panel__name">
                    {panelName}
                </h2>
            </div>
            <div className="panel__divider"></div>
            <div className={`panel__bottom ${shouldCollapse ? "collapse" : "expand"}`}>
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
                <ProjectCard
                    project={{ name: 'mockProject', colorIndex: 3 }}
                    onHandleClick={action('this is a mock project')} />
            </div>
        </div>
    )
}

export default Panel;