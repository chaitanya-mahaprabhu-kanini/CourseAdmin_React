import './Instructors.css';
import { instructors } from '../constants/constants';
import teacher from '../assets/images/teacher.jpg'

const Instructors = (props) => {
    return(
        <>
            <div id = "instructorsGrid"> 
            {instructors.map(data => <div class="card" style={{width:'100%'}}>
    <img class="card-img-top" src={teacher} alt="Card image" style={{width:'100%'}}/>
    <div class="card-body">
      <h4 class="card-title">{data.id} {data.name} {data.gender}</h4>
      <p class="card-text">{data.years} years experience</p>
      <a href="#" class="btn btn-primary">Choose</a>
    </div>
  </div>)}
            </div>
        </>
    );
}

export {Instructors};