import "./InstructorOperations.css";
import { instructors } from "../constants/constants";
import { useState } from "react";
import { AdminPage } from "./AdminPage";
import { DoubleStatistics } from "./DoubleStatistics";
import { SingleStatistics } from "./SingleStatistics";

const InstructorOperations = (props) => {
  const [instructorId, setInstructorId] = useState("");

  const idData = [
    {
        id: "20",
        name: "Amelia",
        age: 25,
        gender: "Female",
        years: 3,
        course: "Data Science",
        status: "inactive",
      }
  ];

  const handleInputChange = (event) => {
    setInstructorId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Instructor ID:", instructorId);
  };

  let male = 0;
  let female = 0;
  for (let instructor of instructors) {
    if (instructor.gender.toLowerCase() === "male") male += 1;
    else female += 1;
  }

  let experience = 0;
  let count = 0;
  for (let instructor of instructors) {
    experience += instructor.years;
    count += 1;
  }

  return (
    <div id="studentOperations">
      <AdminPage></AdminPage>

      <div id="stats">
        <div>
          <h4 id = "statsText" className = "frosted">Gender Ratio</h4>
          <DoubleStatistics
            startColor={"steelblue"}
            endColor={"pink"}
            stTotal={male + 20}
            enTotal={female + 20}
            startText={"Male"}
            endText={"Female"}
          />
        </div>

        <div>
          <h4 id = "statsText" className = "frosted">Years Of Experience</h4>
          <SingleStatistics
            color={"orange"}
            data={experience / count + 10}
            startText={"0"}
            endText={"100"}
          />
        </div>
      </div>

      <div className="container-fluid bg-light" id="getStudents">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Status</th>
              <th>Years Of Experience</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((data) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.course}</td>
                <td>{data.status}</td>
                <td>{data.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container-fluid bg-light" id="getStudentById">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="instructorID" className="form-label">
              Instructor ID
            </label>
            <input
              type="text"
              className="form-control"
              id="instructorID"
              value={instructorId}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Status</th>
              <th>Years Of Experience</th>
            </tr>
          </thead>
          <tbody>
            {idData.map((data) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.course}</td>
                <td>{data.status}</td>
                <td>{data.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { InstructorOperations };
