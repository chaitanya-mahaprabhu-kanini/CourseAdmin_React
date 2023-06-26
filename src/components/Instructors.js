import "./Instructors.css";
import { instructors } from "../constants/constants";
import teacher from "../assets/images/teacher.jpg";

const Instructors = (props) => {
  return (
    <>
      <div id="instructorsGrid">
        {instructors.map((data) => (
          <div className="card frosted" style={{ width: "100%" }}>
            <img
              className="card-img-top"
              src={teacher}
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h4 className="card-title">
                {data.id} {data.name} {data.gender}
              </h4>
              <p className="card-text">{data.years} years experience</p>
              <a href="#" className="btn btn-primary">
                Choose
              </a>
            </div>
          </div>
        ))}

        <div id="homeButton" className="frosted">
          <button className="btn btn-primary btn-lg mb-4 pt-1 pb-1 ps-5 pe-5">Finalise</button>
          <button className="btn btn-dark btn-lg">Home</button>
        </div>
      </div>
    </>
  );
};

export { Instructors };
