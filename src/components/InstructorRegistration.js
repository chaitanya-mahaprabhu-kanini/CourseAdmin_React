import { useState, useEffect } from "react";
import teacher from "../assets/images/teacher.jpg";
import "./InstructorRegistration.css";
import { genders } from "../constants/constants";

const InstructorRegistration = (props) => {
  const [instructor, setInstructor] = useState({
    name: "",
    age: "",
    gender: "",
    years: "",
    status: "inactive",
    cid: "",
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {courseSetter()},[]);
  const courseSetter = async () => {
    try {
      const response = await fetch("https://localhost:7221/api/Courses");
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error("Error fetching instructors:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (event) => {
    setInstructor((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const clickHandler = (event) => {
    if (
      parseInt(instructor["age"], 10) < 17 ||
      parseInt(instructor["age"], 10) > 100
    ) {
      alert(
        "Legal adults allowed and above 100 of age too old for the website!"
      );
    } else if (Object.values(instructor).includes("") != true) {
      console.log(instructor);
      post();
      alert("You have been registered successfully!");
      window.location = "/";
    } else {
      alert("We don't like empty forms!");
    }
  };

  const homeHandler = (event) => {
    window.location = "/";
  };

  const post = () => {
    fetch("https://localhost:7221/api/Instructors", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(instructor),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
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
            min="18"
            max="100"
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
            <option disabled selected>
              Choose
            </option>
            {genders.map((data) => (
              <option value={data.toString()}>{data}</option>
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
              <option value={data.cid}>{data.courseName}</option>
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
