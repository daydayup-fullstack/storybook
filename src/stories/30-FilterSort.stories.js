import React, { useEffect, useState } from "react";
import  FilterSort from "../components/FilterBarMenu/FilterSort/FilterSort";
import "../components/FilterBarMenu/FilterSort/FilterSort.css";
import PopupMenu from "../components/PopupMenu/PopupMenu";
import FilterFilter from "../components/FilterBarMenu/FilterFilter";
import FilterTasks from "../components/FilterBarMenu/FilterTasks";
import '../components/FilterBarMenu/FilterSort/FilterSort.css';
// import FilterMenu from '../components/FilterBarMenu/FilterMenu';


export default {
    title: "Filter",
    component: FilterSort,
};

const styles = {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    padding: "0.5rem"
    
};
 

const Display = ({ children }) => {
    const [shouldShow, setShouldShow] = React.useState(false);
    const [anchor, setAnchor] = React.useState({ x: 0, y: 0 });
  
    const handleClick = (e) => {
      setShouldShow(true);
      setAnchor({
        x: e.target.offsetLeft,
        y: e.target.offsetTop,
        width: e.target.clientWidth,
      });
      
    };
  
  
    const dismiss = () => {
      setShouldShow(false);
    };
  
    return (
      <div style={styles}>
        <span className='description'>Last task completed yesterday</span>
        <button className='Filter_button first' onClick={handleClick}>
          <span className="material-icons task">check_circle_outline</span>All Tasks
        </button>  
        <button className='Filter_button' onClick={handleClick}>
          <span class="material-icons filter">filter_list</span>Filter
        </button> 
        <button className='Filter_button' onClick={handleClick}>
          <span class="material-icons swap">swap_vert</span>Sort
        </button>
        <span className='line'>
          |
        </span>
        <button className='Filter_button' >
          <span class="material-icons rules">launch</span>Rules
        </button>
        <button className='Filter_button'>
          <span class="material-icons field">code</span>Fields
        </button>
        <span className={"material-icons more"}>
        more_horiz
        </span>
        {shouldShow && (
        <PopupMenu dismiss={dismiss} anchor={anchor}>
          {children}
        </PopupMenu>
      )}
      </div>
    );
  };
  


export const taskList = () => (
    <Display>
      <FilterTasks/>
    </Display>
);

export const filterList = () => (
  <Display>
    <FilterFilter/>
  </Display>
);

export const sortList = () => (
  <Display>
    <FilterSort/>
  </Display>
);

