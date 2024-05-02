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
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
