import { useState, useEffect } from "react";
import teacher from "../assets/images/teacher.jpg";
import student from "../assets/images/student.jpg";

import "./Choice.css";

const Choice = (props) => {
  return (
    <>
      <div id="choice">
        <a href = "/StudentRegistration">
        <div className="card h-50" id="choiceCard">
          <div className="card-body" class="cardText">
            <h1 class="cardTitle">Student</h1>
          </div>
        </div>
        </a>

        <a href = "/InstructorRegistration">
        <div className="card h-50" id="choiceCard">
          <div className="card-body" class="cardText">
            <h1 class="cardTitle">Instructor</h1>
          </div>
        </div>
        </a>
      </div>
    </>
  );
};

export { Choice };
