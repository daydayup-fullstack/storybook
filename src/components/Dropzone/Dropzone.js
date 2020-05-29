import React from "react";
import "./Dropzone.css";

const Dropzone = () => {
  const [isDragging, setIsDragging] = React.useState(false);

  let dragCounter = 0;
  const dropzone = React.useRef();

  const handleFiles = (files) => {
    // todo - handle file uploading here
    files.forEach((file) => {
      console.log(file.name);
    });
  };

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleDragEnter(e) {
    preventDefault(e);
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }

  function handleDragLeave(e) {
    preventDefault(e);
    dragCounter--;
    if (dragCounter > 0) return;
    setIsDragging(false);
  }

  function handleDragOver(e) {
    preventDefault(e);
  }

  function handleDrop(e) {
    preventDefault(e);
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  }

  React.useEffect(() => {
    dragCounter = 0;
    dropzone.current.addEventListener("dragenter", handleDragEnter, false);
    dropzone.current.addEventListener("dragleave", handleDragLeave, false);
    dropzone.current.addEventListener("dragover", handleDragOver, false);
    dropzone.current.addEventListener("drop", handleDrop, false);

    return () => {
      dropzone.current.removeEventListener("dragenter", handleDragEnter);
      dropzone.current.removeEventListener("dragleave", handleDragLeave);
      dropzone.current.removeEventListener("dragover", handleDragOver);
      dropzone.current.removeEventListener("drop", handleDrop);
    };
  }, [dropzone]);

  return (
    <div className={"Dropzone"} ref={dropzone}>
      {isDragging ? (
        <div className="Dropzone__bound">
          <span className={"material-icons Dropzone__icon"}>attach_file</span>
          <span className={"Dropzone__title"}>Drop to attach files</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropzone;
