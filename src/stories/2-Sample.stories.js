import React from "react";
import Sample from "../components/Sample/Sample";

export default {
    title: "Sample",
    component: Sample,
};

const titleData = "Hello world!";

export const Example = () => {
    return <Sample buttonText={titleData}/>
}
