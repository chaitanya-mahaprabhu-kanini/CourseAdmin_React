import "./App.css";
import { Form, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Choice } from "./components/Choice";
import { StudentRegistration } from "./components/StudentRegistration";
import { InstructorRegistration } from "./components/InstructorRegistration";
import { Instructors } from "./components/Instructors";
import { Welcome } from "./components/Welcome";
import { AdminLoginPage } from "./components/AdminLoginPage";
import { AdminPage } from "./components/AdminPage";
import { StudentOperations } from "./components/StudentOperations";
import { InstructorOperations } from "./components/InstructorOperations";

function App() {
  return (
    <>
      <Routes>
        <Route path = '' element = {<Welcome/>} />
        <Route path = '/Choice' element = {<Choice/>} />
        <Route path = '/StudentRegistration' element = {<StudentRegistration/>} />
        <Route path = '/InstructorRegistration' element = {<InstructorRegistration/>} />
        <Route path = '/Instructors' element = {<Instructors/>} />
        <Route path = '/AdminLogin' element = {<AdminLoginPage/>} />
        <Route path = '/AdminPage' element = {<AdminPage/>} />
        <Route path = '/StudentOperations' element = {<StudentOperations/>} />
        <Route path = '/InstructorOperations' element = {<InstructorOperations/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
