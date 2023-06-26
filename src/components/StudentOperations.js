import { AdminPage } from "./AdminPage";
import { StatisticsComponent } from "./StatisticsComponent";
import "./StudentOperations.css";
import { students } from "../constants/constants";
import { useState } from "react";

const StudentOperations = (props) => {
  const [studentId, setStudentId] = useState("");

  const idData = [
    {
      name: "Scarlett Ramirez",
      age: 23,
      gender: "Female",
      course: "Machine Learning",
    }
  ];

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Student ID:", studentId);
  };

  let male = 0;
  let female = 0;
  for (let student of students) {
    if (student.gender.toLowerCase() === "male") male += 1;
    else female += 1;
  }

  return (
    <div id="studentOperations">
      <AdminPage></AdminPage>

      <div id="stats">
        <StatisticsComponent
          startColor={"steelblue"}
          endColor={"pink"}
          stTotal={male + 20}
          enTotal={female + 20}
          startText={"Male"}
          endText={"Female"}
        />
      </div>

      <div className="container-fluid bg-light" id="getStudents">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container-fluid bg-light" id="getStudentById">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="studentId" className="form-label">
              Student ID
            </label>
            <input
              type="text"
              className="form-control"
              id="studentId"
              value={studentId}
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
            </tr>
          </thead>
          <tbody>
            {idData.map((data) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { StudentOperations };
