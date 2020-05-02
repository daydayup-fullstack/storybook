import React from "react";
import Sample from "../components/Sample/Sample";

export default {
    title: "Choose a title for your component working bench",
    component: Sample,
    background: []
};

const data = "Hello world!";

export const Scenario01 = () => {
    return <Sample buttonText={data}/>
}

export const Scenario02 = () => {
    return <Sample buttonText={"my button"}/>
}
