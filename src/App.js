import "./App.css";
import { Form, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import { StudentRegistration } from "./components/StudentRegistration";
import { InstructorRegistration } from "./components/InstructorRegistration";

function App() {
  return (
    <>
      <Routes>
        <Route path = '' element = {<Home/>} />
        <Route path = '/StudentRegistration' element = {<StudentRegistration/>} />
        <Route path = '/InstructorRegistration' element = {<InstructorRegistration/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
