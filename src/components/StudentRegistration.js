import { useState, useEffect } from "react";
import teacher from "../assets/images/teacher.jpg";
import "./StudentRegistration.css";
import { courses, genders } from "../constants/constants";

const StudentRegistration = (props) => {
  const clickHandler = (event) => {
    window.location = '/Instructors';
  }

  return (
      <div className="container" id="studentRegistration">
        <h3 style = {{marginBottom: '1rem'}}>Student Information</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input type="number" className="form-control" id="age" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select className="form-select" id="gender">
              {genders.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Course
            </label>
            <select className="form-select" id="course">
              {courses.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>
          <button style = {{marginTop: '0.5rem'}} type="button" className="btn btn-primary" onClick={clickHandler}>
            Next
          </button>
        </form>
    </div>
  );
};

export { StudentRegistration };
