import "./App.css";
import { Form, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path = '' element = {<Home/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
