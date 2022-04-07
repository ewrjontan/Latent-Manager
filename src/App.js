import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomeComponent";
import AddNewCase from "./components/AddNewCaseComponent";
import RecentCases from "./components/RecentCasesComponent";
import DisplayCase from "./components/DisplayCaseComponent";



import './App.css';


function App() {
    return (
        <div className="App row">
            <nav className="navigation col-2 d-flex flex-column text-start ps-5 bg-warning ">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/add-new-case">Add New Case</Link>
                <Link to="/recent-cases">Recent Cases</Link>
            </nav>

            <div className="col-10 text-start mt-5 px-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="add-new-case" element={<AddNewCase />} />
                    <Route path="recent-cases" element={<RecentCases />} />
                    <Route path="display-case" element={<DisplayCase />} />

                </Routes>
            </div>
      
        </div>
  );
}


function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

export default App;
