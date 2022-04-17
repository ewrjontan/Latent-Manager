import { useState } from "react";
import { Form } from "react-bootstrap";
import TopNavigation from "./subComponents/TopNavigationComponent";

function FindCase() {
    const [state, setState] = useState({
        "caseNumber": "",
        "victimLastName": "",
        "victimFirstName": "",
        "dateOfBirth": "",
        "location": ""
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

    return(
        <div>
            <TopNavigation/>
            <h2>Find case component</h2>

            <Form.Group className="col-4" controlId="lastName">
                <Form.Label>Case Number</Form.Label>
                <Form.Control type="text" name="caseNumber" placeholder="Case Number" required value={state.caseNumber} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="col-4" controlId="victimLastName">
                <Form.Label>Victim Last Name</Form.Label>
                <Form.Control type="text" name="victimLastName" placeholder="Last Name" required value={state.victimLastName} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="col-4" controlId="victimFirstName">
                <Form.Label>Victim First Name</Form.Label>
                <Form.Control type="text" name="victimFirstName" placeholder="First Name" required value={state.victimFirstName} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="col-4" controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name="dateOfBirth" required value={state.dateOfBirth} onChange={handleChange}/>
            </Form.Group>
        </div>
        
    )
}

export default FindCase;