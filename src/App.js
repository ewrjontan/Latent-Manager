import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomeComponent";
import AddNewCase from "./components/AddNewCaseComponent";
import RecentCases from "./components/RecentCasesComponent";
import DisplayCase from "./components/DisplayCaseComponent";
import DisplayLatent from "./components/DisplayLatentComponent";
import DisplayPrintCaseFile from "./components/DisplayPrintCaseFileComponent";
import DisplayBasicSearchResults from "./components/DisplayBasicSearchResultsComponent";
import DisplayAdvancedSearchResults from "./components/DisplayAdvancedSearchResultsComponent";

import FindCase from "./components/FindCaseComponent";


import {Form, Button, InputGroup, FormControl} from "react-bootstrap";




import './App.css';


function App() {

    return (
        <div className="App row">
            <nav className="navigation d-flex flex-column text-start pt-5">
                <Link className="ps-3" to="/">Home</Link>
                <Link className="ps-3" to="/about">About</Link>
                <Link className="ps-3" to="/add-new-case">Add New Case</Link>
                <Link className="ps-3" to="/recent-cases">Recent Cases</Link>

                <Link className="ps-3" to="/find-case">Find Case</Link>

                {/* <Form className="mt-5 col-11 ps-3">
                    <Form.Group className="" controlId="searchInput">
                        <Form.Control type="text" placeholder="Find Case" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Search</Button>
                </Form> */}

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
                    <Route path="display-print-case-file" element={<DisplayPrintCaseFile />} />
                    <Route path="display-basic-search-results" element={<DisplayBasicSearchResults />} />
                    <Route path="display-advanced-search-results" element={<DisplayAdvancedSearchResults />} />
                    <Route path="find-case" element={<FindCase />} />

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
