import { useState, useEffect } from "react";
import teacher from "../assets/images/teacher.jpg";
import student from "../assets/images/student.jpg";

import "./Choice.css";

const Choice = (props) => {
  return (
    <>
      <div id="choice">
        <a href = "/StudentRegistration">
        <div id="choiceCard" className = "frosted">
          <div className="cardText">
            <h1>Student</h1>
          </div>
        </div>
        </a>

        <a href = "/InstructorRegistration">
        <div id="choiceCard" className = "frosted">
          <div className="cardText">
            <h1>Instructor</h1>
          </div>
        </div>
        </a>
      </div>
    </>
  );
};

export { Choice };
