import React, { useState } from "react";
import PopupTooltip from "../components/PopupTooltip/PopupTooltip";

export default {
  title: "PopupTooltip",
  component: PopupTooltip,
};

const Display = () => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShouldShow(!shouldShow);
        }}
      >
        Toggle Popup
      </button>

      <PopupTooltip shouldShow={shouldShow} />
    </div>
  );
};

export const normal = () => <Display />;
