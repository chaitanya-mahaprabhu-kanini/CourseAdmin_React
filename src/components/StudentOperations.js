import { AdminPage } from "./AdminPage";
import { DoubleStatistics } from "./DoubleStatistics";
import "./StudentOperations.css";
import { useEffect, useState } from "react";
import {coursesKeys} from '../constants/constants';

const StudentOperations = (props) => {
  const [studentId, setStudentId] = useState("");
  const [students, setStudents] = useState([]);
  const [idData, setIdData] = useState([{}]);

  useEffect(() => {
    fetchStudentsById();
  }, [studentId]);
  
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("https://localhost:7221/api/Students");
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        console.error("Error fetching students:", response.statusText);
      }
    } catch (e) {console.log(e);}
  };

  const fetchStudentsById = async () => {
    try {
      const response = await fetch(`https://localhost:7221/api/Students/${studentId}
      `);
      if (response.ok) {
        const data = await response.json();
        setIdData([data]);
      } else {
        console.error("Error fetching students:", response.statusText);
      }
    } catch (e) {console.log(e);}
  };

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
        <div>
          <h4 id="statsText" className="frosted">
            Gender Ratio
          </h4>
          <DoubleStatistics
            startColor={"steelblue"}
            endColor={"pink"}
            stTotal={male + 20}
            enTotal={female + 20}
            startText={"Male"}
            endText={"Female"}
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
            </tr>
          </thead>
          <tbody>
            {students.map((data) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{coursesKeys[data.cid]}</td>
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
                <td>{coursesKeys[data.cid]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { StudentOperations };
