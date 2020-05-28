import React from "react";
import "./DisplayPhotoBlock.css";

const DisplayPhotoBlock = () => {
  //region - imageUrl
  const imageUrl =
    "https://media.wired.com/photos/5bd86f1cb0c71179a8e94cbd/16:9/w_1519,h_854,c_limit/macmini1.jpg";
  //endregion

  const [width, setWidth] = React.useState(200);

  const imageRef = React.useRef();

  React.useEffect(() => {
    imageRef.current.addEventListener("load", () => {
      const calculatedWidth = Math.floor(
        (imageRef.current.clientHeight / imageRef.current.naturalHeight) *
          imageRef.current.naturalWidth
      );

      setWidth(calculatedWidth);

      console.log(imageRef.current);
    });
  }, [imageRef]);

  return (
    <div className="DisplayPhotoBlock" style={{ width: `${width}px` }}>
      <div className="DisplayPhotoBlock__overlay">
        <span className={"material-icons"}>expand_more</span>
      </div>
      <img src={imageUrl} alt="thumbnail" ref={imageRef} />
      {/*  todo - integrating popupInfo & popupMenu*/}
    </div>
  );
};

export default DisplayPhotoBlock;

//naturalHeight
//naturalWidth
//clientHeight
//clientWidth
