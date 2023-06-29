import { createContext } from "react";
import { useState, useEffect } from "react";

const context = createContext();
const SharedData = (props) =>{
const [courses, setCourses] = useState([]);

useEffect(() => {
  courseSetter();
}, []);


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

const genders = ["Male", "Female"];

const data = {courses: courses, genders: genders};

  return (
  <context.Provider value={data}>
    {props.children}
  </context.Provider>
  );
};

export { SharedData, context };
