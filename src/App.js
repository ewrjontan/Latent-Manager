import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomeComponent";
import AddNewCase from "./components/AddNewCaseComponent";
import RecentCases from "./components/RecentCasesComponent";
import DisplayCase from "./components/DisplayCaseComponent";
import DisplayLatent from "./components/DisplayLatentComponent";



import './App.css';


function App() {
    return (
        <div className="App row">
            <nav className="navigation d-flex flex-column text-start pt-5">
                <Link className="ps-3" to="/">Home</Link>
                <Link className="ps-3" to="/about">About</Link>
                <Link className="ps-3" to="/add-new-case">Add New Case</Link>
                <Link className="ps-3" to="/recent-cases">Recent Cases</Link>
            </nav>

            <div className="nav-placeholder"></div>

            <div className="col text-start pt-5 px-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="add-new-case" element={<AddNewCase />} />
                    <Route path="recent-cases" element={<RecentCases />} />
                    <Route path="display-case" element={<DisplayCase />} />
                    <Route path="display-latent" element={<DisplayLatent />} />


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
