import React, { useEffect } from "react";
import './StatisticsComponent.css';

const StatisticsComponent = (props) => {
    const startWidth = 0;
    const endWidth = 0;
  return (
    <>
      <div id = "outer" class = "frosted">
        <div id = "start" style = {{backgroundColor:`${props.startColor}`, width: `${startWidth}vw`}}>
            <h4>{props.startText}</h4>
        </div>
        <div id = "end" style = {{backgroundColor:`${props.endColor}`, width: `${endWidth}vw`}}>
             <h4>{props.endText}</h4>
        </div>
      </div>
    </>
  );
};

export { StatisticsComponent };
