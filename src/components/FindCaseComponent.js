import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TopNavigation from "./subComponents/TopNavigationComponent";

function FindCase() {
    const navigate = useNavigate();


    const [state, setState] = useState({
        "caseNumber": "",
        "victimLastName": "",
        "victimFirstName": "",
        "dateOfIncident": "",
        "incidentLocation": "",
        "incidentType": ""
    });


    const handleChange = (event) => {
        console.log("change occuring");
        console.log(event.target.name);
        console.log(event.target.value);

        let name = event.target.name
        let value = event.target.value

        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        console.log('submit button clicked');
        event.preventDefault();

        let form = document.getElementById("advanced-search-form");
        let formInputs = form.querySelectorAll('input');
        console.log(formInputs);
        
        let blankFields = 0;

        formInputs.forEach((input) => {
            if (input.value === ""){
                console.log("field is blank")
                blankFields++;
            }
        });

        if (blankFields < 6) {
            navigate(
                "/display-advanced-search-results", 
                {state: {
                    searchInput: {
                        caseNumber: state.caseNumber.toUpperCase(),
                        victimLastName: state.victimLastName.toUpperCase(),
                        victimFirstName: state.victimFirstName,
                        dateOfIncident: state.dateOfIncident,
                        incidentLocation: state.incidentLocation.toUpperCase(),
                        incidentType: state.incidentType.toLowerCase()
                    }
                    
                }
            });
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('enter key pressed')
            //navigate("/display-basic-search-results", {state: {searchInput: searchInput.toUpperCase()}});
            handleSubmit(event);
        }
    }

    const handleClearButton = () => {
        console.log("clear clicked");
 
        Object.keys(state).map(key => {
            setState((state) => ({ ...state, [key]: "" }));
        })
    }

    return(
        <div>
            <TopNavigation/>
            <h1>Find a case</h1>
            <h2 className="my-5 text-center" >Enter at least one parameter.</h2>

            <Form onSubmit={handleSubmit} id="advanced-search-form">
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

export default FindCase;