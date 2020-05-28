import React from "react";
import NewUploadBlock from "../components/NewUploadBlock/NewUploadBlcok";
import DisplayPhotoBlock from "../components/DisplayPhotoBlock/DisplayPhotoBlock";

export default {
  title: "Uploading & display",
  component: NewUploadBlock,
};

export const newUpload = () => <NewUploadBlock />;

export const displayUpload = () => <DisplayPhotoBlock />;
