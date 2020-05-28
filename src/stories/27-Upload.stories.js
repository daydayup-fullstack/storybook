import React from "react";
import NewUploadBlock from "../components/NewUploadBlock/NewUploadBlcok";
import DisplayPhotoBlock from "../components/DisplayPhotoBlock/DisplayPhotoBlock";
import UploadingPhotoBlock from "../components/UploadingPhotoBlock/UploadingPhotoBlock";

export default {
  title: "Uploading & display",
  component: NewUploadBlock,
};

export const newUpload = () => <NewUploadBlock />;

export const displayUpload = () => <DisplayPhotoBlock />;

export const uploadingPhotoBlock = () => <UploadingPhotoBlock />;
