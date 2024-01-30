import "./App.css";
import Form from "./components/Form";
import Quiz from "./components/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/begin' element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
