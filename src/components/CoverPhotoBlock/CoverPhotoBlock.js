import React from "react";
import "./CoverPhotoBlock.css";
import { useCalculated } from "../DisplayPhotoBlock/DisplayPhotoBlock";

const CoverPhotoBlock = () => {
  const imageUrl =
    "https://www.logitechg.com/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-hero.png";

  // const imageUrl =
  //   "https://media.wired.com/photos/5bd86f1cb0c71179a8e94cbd/16:9/w_1519,h_854,c_limit/macmini1.jpg";
  const imageRef = React.useRef();
  const [height] = useCalculated("height", imageRef);

  return (
    <div className={"CoverPhotoBlock"} style={{ height: `${height}px` }}>
      <img src={imageUrl} alt="coverImage" ref={imageRef} />
    </div>
  );
};

export default CoverPhotoBlock;
