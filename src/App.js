import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/:id' element = {<Details />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
