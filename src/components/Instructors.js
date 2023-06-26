import "./Instructors.css";
import { instructors } from "../constants/constants";
import { InstructorInfo } from "./InstructorInfo";

const Instructors = (props) => {
  const homeClickHandler = (e) => {
      window.location = "/";
  }

  const finaliseClickHandler = (e) => {
    alert("Your instructor has been finalised!");
  }

  return (
    <>
      <div id="instructorsGrid">
        {instructors.map((data) => (
          <InstructorInfo key = {data.id} name = {data.name} experience = {data.years} gender = {data.gender}/>
        ))}

        <div id="homeButton" className="frosted">
          <button className="btn btn-primary btn-lg mb-4 pt-1 pb-1 ps-5 pe-5" onClick = {finaliseClickHandler}>Finalise</button>
          <button className="btn btn-dark btn-lg" onClick = {homeClickHandler}>Home</button>
        </div>
      </div>
    </> 
  );
};

export { Instructors };
