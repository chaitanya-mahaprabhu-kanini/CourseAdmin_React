import { useState, useEffect } from "react";
import teacher from "../assets/images/teacher.jpg";
import "./StudentRegistration.css";
import { courses, genders } from "../constants/constants";

const StudentRegistration = (props) => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    gender: "",
    cid: "",
  });

  const changeHandler = (event) => {
      setStudent((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
  };

  const clickHandler = (event) => {
    if (
      parseInt(student["age"], 10) < 17 ||
      parseInt(student["age"], 10) > 100
    ) {
      alert(
        "Legal adults allowed and above 100 of age too old for the website!"
      );
    } else if (Object.values(student).includes("") != true) {
      console.log(student);
      post();
      alert("You have been registered successfully!");
      window.location = "/";
    } else {
      alert("We don't like empty forms!");
    }
  };

  const post = () => {
    fetch("https://localhost:7221/api/Students", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(student),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const homeHandler = (event) => {
    window.location = "/";
  };

  return (
    <div className="container frosted" id="studentRegistration">
      <h3 style={{ marginBottom: "1rem" }}>Student Information</h3>
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
            min="18"
            max="100"
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
            required
          >
            <option disabled selected>
              Choose
            </option>
            {genders.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="cid" className="form-label">
            Course
          </label>
          <select
            className="form-select"
            id="cid"
            name="cid"
            onChange={changeHandler}
          >
            <option disabled selected>
              Choose
            </option>
            {courses.map((data, index) => (
              <option value={index + 1}>{data}</option>
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

export { StudentRegistration };
