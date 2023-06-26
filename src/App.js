import "./App.css";
import { Form, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Choice } from "./components/Choice";
import { StudentRegistration } from "./components/StudentRegistration";
import { InstructorRegistration } from "./components/InstructorRegistration";
import { Instructors } from "./components/Instructors";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path = '' element = {<Welcome/>} />
        <Route path = '/Choice' element = {<Choice/>} />
        <Route path = '/StudentRegistration' element = {<StudentRegistration/>} />
        <Route path = '/InstructorRegistration' element = {<InstructorRegistration/>} />
        <Route path = '/Instructors' element = {<Instructors/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
