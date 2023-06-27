import React, { useEffect } from "react";
import "./SingleStatistics.css";

const SingleStatistics = (props) => {
  const width = `${props.data}`;
  return (
    <div id = "graph" class="frosted">
      <div id="outer">
        <div
          id="start"
          style={{
            backgroundColor: `${props.color}`,
            width: `${width}vw`,
          }}
        ></div>
      </div>
      <div id="graphText">
        <h5>{props.startText}</h5>
        <h5>{props.endText}</h5>
      </div>
    </div>
  );
};

export { SingleStatistics };
