import "./InstructorOperations.css";
import { useState, useEffect } from "react";
import { AdminPage } from "./AdminPage";
import { DoubleStatistics } from "./DoubleStatistics";
import { coursesKeys } from "../constants/constants";
import { SingleStatistics } from "./SingleStatistics";

const InstructorOperations = (props) => {
  const [instructorId, setInstructorId] = useState("");
  const [instructors, setInstructors] = useState([]);
  const [idData, setIdData] = useState([{}]);
  const [toggle, setToggle] = useState({});

  useEffect(() => {
    fetchInstructorById();
  }, [instructorId]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const response = await fetch("https://localhost:7221/api/Instructors");
      if (response.ok) {
        const data = await response.json();
        setInstructors(data);
      } else {
        console.error("Error fetching instructors:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchInstructorById = async () => {
    try {
      const response = await fetch(
        `https://localhost:7221/api/Instructors/${instructorId}`
      );
      if (response.ok) {
        const data = await response.json();
        setIdData([data]);
      } else {
        console.error("Error fetching instructors:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (event) => {
    setInstructorId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Instructor ID:", instructorId);
  };

  const deleteInstructor = async (id) => {
    try {
      const response = await fetch(
        `https://localhost:7221/api/Instructors/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Instructor deleted successfully");
        // Remove the deleted instructor from the state
        setInstructors(instructors.filter((instructor) => instructor.id !== id));
      } else {
        console.error("Error deleting instructor:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateStatus = async (id) => {
    try {
      const response = await fetch(
        `https://localhost:7221/api/Instructors/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(toggle),
        }
      );
      if (response.ok) {
        console.log("Instructor status updated successfully");
        console.log(toggle);
        setInstructors(
          instructors.map((instructor) =>
            instructor.id === id
              ? toggle
              : instructor
          )
        );
      } else {
        console.error("Error updating instructor status:", response.statusText);
        console.log(toggle);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {updateStatus(toggle.id)}, [toggle]);

  const toggleInstructor = (data) => {
    if(data.status === 'active'){
      setToggle({
        "id": data.id,
        "name": `${data.name}`,
        "age": data.age,
        "gender": `${data.gender}`,
        "years": data.years,
        "cid": data.cid,
        "status": "inactive"
      });}
    else{
    setToggle({
      "id": data.id,
      "name": `${data.name}`,
      "age": data.age,
      "gender": `${data.gender}`,
      "years": data.years,
      "cid": data.cid,
      "status": "active"
    });}
  }

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

        <div>
          <h4 id="statsText" className="frosted">
            Years Of Experience
          </h4>
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
              <th>ID</th>
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
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{coursesKeys[data.cid]}</td>
                <td id = "status" style={{color: 'white', backgroundColor: `${data.status === 'active' ? 'green' : 'red'}`}}>{data.status === 'active' ? 'A' : 'IA'}</td>
                <td>{data.years}</td>
                <td>
                  <button
                    onClick={() => deleteInstructor(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => toggleInstructor(data)}
                    className="btn btn-warning"
                  >
                    Toggle Status
                  </button>
                </td>
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
        </form>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>ID</th>
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
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{coursesKeys[data.cid]}</td>
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
