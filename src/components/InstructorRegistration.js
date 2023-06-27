import { useState, useEffect } from "react";
import teacher from "../assets/images/teacher.jpg";
import "./InstructorRegistration.css";
import { courses, genders } from "../constants/constants";

const InstructorRegistration = (props) => {
  const [instructor, setInstructor] = useState({});

  const changeHandler = (event) => {
    setInstructor((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const clickHandler = (event) => {
    console.log(instructor);
    alert("You have been registered successfully!");
    window.location = "/";
  };

  const homeHandler = (event) => {
    window.location = "/";
  };

  return (
    <div className="container frosted" id="instructorRegistration">
      <h3 style={{ marginBottom: "1rem" }}>Instructor Information</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            onChange={changeHandler}
          >
            <option disabled selected>Choose</option>
            {genders.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Years of Experience
          </label>
          <input
            type="number"
            className="form-control"
            id="experience"
            name="years"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Course
          </label>
          <select
            className="form-select"
            id="course"
            name="course"
            onChange={changeHandler}
          >
            <option disabled selected>Choose</option>
            {courses.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
        </div>
        <div id="instructorButtons">
          <button
            style={{ marginTop: "0.5rem" }}
            type="button"
            className="btn btn-primary"
            onClick={clickHandler}
          >
            Submit
          </button>
          <button
            style={{ marginTop: "0.5rem" }}
            type="button"
            className="btn btn-warning ms-3"
            onClick={homeHandler}
          >
            Home
          </button>
        </div>
      </form>
    </div>
  );
};

export { InstructorRegistration };
