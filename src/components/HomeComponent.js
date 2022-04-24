import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Counter } from "../features/counter/Counter";


// for server setup

import { useState } from "react";
import Axios from "axios";

//for server setup

function Home() {

    // for server setup
    const [caseNumber, setCaseNumber] = useState(0);
    const [dateOfIncident, setdateOfIncident] = useState("");
    const [incidentLocation, setincidentLocation] = useState("");
    const [incidentType, setincidentType] = useState("");
    const [victimFirstName, setVictimFirstName] = useState("");
    const [victimLastName, setVictimLastName] = useState("");

    

   


    const addToList = () => {
      console.log("button clicked");
      Axios.post("http://localhost:3001/insert", {
        caseNumber: caseNumber,
        dateOfIncident: dateOfIncident,
        incidentLocation: incidentLocation,
        incidentType: incidentType,
        victimFirstName: victimFirstName,
        victimLastName: victimLastName,
      });
    };

    // for server setup



    return (
      <div >
        <main>
          <h1>Welcome to Latent Manager</h1>
          <p>Let's begin.</p>
        </main>

        {/* <Counter/> */}
        
        
        <Link to="/add-new-case">
            <Button size="lg" className="btn-color">Add New Case</Button>
        </Link>


        {/* for server setup */}
        <div className="d-flex flex-column w-25 justify-content-center ">
          <h3>Test for server</h3>

          <label>Case Number:</label>
          <input type="number" onChange={(event) => {setCaseNumber(event.target.value)}}/>

          <label>Incident Date:</label>
          <input type="date" onChange={(event) => {setdateOfIncident(event.target.value)}}/>

          <label>Incident Location:</label>
          <input type="text" onChange={(event) => {setincidentLocation(event.target.value)}}/>

          <label>Incident Type:</label>
          <input type="text" onChange={(event) => {setincidentType(event.target.value)}}/>

          <label>Victim First Name:</label>
          <input type="text" onChange={(event) => {setVictimFirstName(event.target.value)}}/>

          <label>Victim Last Name:</label>
          <input type="text" onChange={(event) => {setVictimLastName(event.target.value)}}/>





          <button className="mt-5" onClick={addToList}>Add to list</button>
        </div>
        
      </div>
    );
  }

  export default Home;