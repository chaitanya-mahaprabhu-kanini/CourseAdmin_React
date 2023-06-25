import "./App.css";
import { Form, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path = '' element = {<NotFound/>} />
        {/* <Route path = '*' element = {} /> */}
      </Routes>
    </>
  );
}

export default App;
