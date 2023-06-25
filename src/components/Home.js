import { useState, useEffect } from "react";
import teacher from "../assets/images/teacher.jpg";
import student from "../assets/images/student.jpg";

import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div id="choice">
        <div className="card h-100" id="choiceCard">
          <img
            class="card-img-top"
            src={student}
            alt="Student"
            style={{ width: "100%", height: "50%" }}
          />
          <div className="card-body" class="cardText">
            <h1 class="cardTitle">Student</h1>
          </div>
        </div>

        <div className="card h-100" id="choiceCard">
          <div className="card-body" class="cardText">
            <h1 class="cardTitle">Instructor</h1>
          </div>
          <img
            class="card-img-top"
            src={teacher}
            alt="Student"
            style={{ width: "100%", height: "50%" }}
          />
        </div>
      </div>
    </>
  );
};

export { Home };
