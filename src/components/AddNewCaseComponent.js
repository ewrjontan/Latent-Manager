import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import TopNavigation from "./subComponents/TopNavigationComponent";
import { baseUrl } from '../shared/baseUrl';

import Saving from "./subComponents/SavingOverlayComponent";


function AddNewCase() {
    const navigate = useNavigate();

    const [state, setState] = useState({
        "caseNumber": "",
        "victimLastName": "",
        "victimFirstName": "",
        "dateOfIncident": "",
        "incidentLocation": "",
        "incidentType": ""
    });

    const [isSaving, setIsSaving] = useState(false);


    const handleChange = (event) => {
        console.log("change occuring");

        let name = event.target.name
        let value = event.target.value

        console.log("event name:");
        console.log(name);

        if (name === "caseNumber" || name === "victimLastName" || name === "incidentLocation"){
            setState({
                ...state,
                [name]: value.toUpperCase()
            });
        }else {
            setState({
                ...state,
                [name]: value
            });
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('enter key pressed')
            //navigate("/display-basic-search-results", {state: {searchInput: searchInput.toUpperCase()}});
        }
    }

    const handleClearButton = () => {
        console.log("clear clicked");
 
        Object.keys(state).map(key => {
            setState((state) => ({ ...state, [key]: "" }));
        })
    }

    const handleSubmit = (event) => {
        console.log('submit button clicked');
        event.preventDefault();

        let form = document.getElementById("add-new-case-form");
        let formInputs = form.querySelectorAll('input');
        console.log(formInputs);
        
        let blankFields = 0;

        formInputs.forEach((input) => {
            if (input.value === ""){
                console.log("field is blank")
                blankFields++;
            }
        });

        if (blankFields === 0) {
            //postToDatabase(state);
            console.log(state);
        }
    }

    const postToDatabase = (data) => {
        console.log(baseUrl);
        setIsSaving(true);

        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
                //setIncidents(result);
                navigate(
                    "/display-case", 
                    {state: {
                        passedIncidentId: result._id
                    }
                });
                
        })
        // .then( () => {
        //     setLoading(false);
            
        // })
        .catch(err => {
            console.error(`Fetch problem: ${err.message}`);
            navigate("/display-error");
        } );
    }


    if (isSaving) {
        return <Saving/>
    }else {
        return(
            <div id="add-new-case-main-container">
                <TopNavigation />
                <h1 className="text-center">Adding a new case</h1>

                <h3 className="my-5 text-center">Please enter your case information.</h3>

                <Form onSubmit={handleSubmit} id="add-new-case-form">
                    <div className="row d-flex justify-content-around text-center mb-3">
                        <Form.Group className="col-5" controlId="caseNumber">
                            <Form.Label>Case Number</Form.Label>
                            <Form.Control type="text" name="caseNumber" placeholder="Case Number (six or seven character format i.e. AS06789)" value={state.caseNumber} onChange={handleChange} onKeyDown={handleKeyDown}/>
                        </Form.Group>

                        <Form.Group className="col-5" controlId="dateOfIncident">
                            <Form.Label>Date of Incident</Form.Label>
                            <Form.Control type="date" name="dateOfIncident"  value={state.dateOfIncident} onChange={handleChange} onKeyDown={handleKeyDown}/>
                        </Form.Group>
                    </div>
                    
                    <div className="row d-flex justify-content-around text-center mb-3">
                        <Form.Group className="col-5" controlId="incidentLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" name="incidentLocation" placeholder="Location (ex: 505 S 15 ST)" value={state.incidentLocation} onChange={handleChange} onKeyDown={handleKeyDown}/>
                        </Form.Group>

                        <Form.Group className="col-5" controlId="incidentType">
                            <Form.Label>Incident Type</Form.Label>
                            <Form.Control type="text" name="incidentType" placeholder="Incident Type (ex: Felony Assault)"  value={state.incidentType} onChange={handleChange} onKeyDown={handleKeyDown}/>
                        </Form.Group>
                    </div>

                    <div className="row d-flex justify-content-around text-center mb-3">
                        <Form.Group className="col-5" controlId="victimLastName">
                            <Form.Label>Victim Last Name</Form.Label>
                            <Form.Control type="text" name="victimLastName" placeholder="Last Name"  value={state.victimLastName} onChange={handleChange} onKeyDown={handleKeyDown}/>
                        </Form.Group>
                        <Form.Group className="col-5" controlId="victimFirstName">
                            <Form.Label>Victim First Name</Form.Label>
                            <Form.Control type="text" name="victimFirstName" placeholder="First Name"  value={state.victimFirstName} onChange={handleChange} onKeyDown={handleKeyDown}/>
                        </Form.Group>
                    </div>

                    <div className="row d-flex justify-content-around text-center mt-5">
                        <Button size="lg" className="col-3 btn-color" onClick={handleClearButton}>Clear All Fields</Button>
                        <Button size="lg" type="submit" className="col-3 btn-color">Submit</Button>
                    </div>
                    
                </Form>
            </div>
            
        )
    }
}

export default AddNewCase