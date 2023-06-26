import teacher from "../assets/images/teacher.jpg";
import './InstructorInfo.css';
const InstructorInfo = (props) => {
    return(
        <>
            <div className="frosted instructorCard" style={{ width: "100%" }}>
            <img
              className="card-img-top"
              src={teacher}
              alt="Card image"
              style={{ width: "100%" }}
            />
            <div className="instructorInfo">
              <h4>
                {props.name} {props.gender.toLowerCase() === 'male' ? '👨' : '👧'}
              </h4>
              <p>{props.experience} years experience</p>
              <a href="#" className="btn btn-primary">
                Choose
              </a>
            </div>
          </div>
        </>
    );
}

export {InstructorInfo};