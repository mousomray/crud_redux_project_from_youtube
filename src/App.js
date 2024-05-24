import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Update/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
