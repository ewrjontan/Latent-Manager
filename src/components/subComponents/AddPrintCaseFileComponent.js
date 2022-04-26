import {Form, Button, Modal, Col, Row} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../../shared/baseUrl';
import Saving from "./SavingOverlayComponent";



function AddPrintCaseFile(props) {
    const navigate = useNavigate();

    const [state, setState] = useState({
        "safeItemNumber": "",
        "technician": "",
        "dateStarted": ""
    });

    const [isSaving, setIsSaving] = useState(false);

    console.log("on printcasefile add page");
    console.log(props.incidentid);

    const handleChange = (event) => {
        console.log("change occuring");

        let name = event.target.name
        let value = event.target.value

        console.log("event name:");
        console.log(name);

        if (name === "technician"){
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

    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         event.preventDefault();
    //         console.log('enter key pressed')
    //         //navigate("/display-basic-search-results", {state: {searchInput: searchInput.toUpperCase()}});
    //     }
    // }

    const handleSubmit = (event) => {
        console.log(props.incidentid);
        console.log('submit button clicked');
        event.preventDefault();

        let form = document.getElementById("add-print-case-file-form");
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
            postToDatabase(state);
            console.log(state);
        }
    }

    const postToDatabase = (data) => {
        console.log(baseUrl);
        setIsSaving(true);

        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "/" + props.incidentid + "/printCaseFiles", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
                console.log("from addpcf modal result");
                console.log(result);
                //setIncidents(result);
                navigate(
                    "/display-print-case-file", 
                    {state: {
                        passedIncidentId: props.incidentid,
                        passedPrintCaseFileId: result._id
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
            <Modal
                {...props}
                aria-labelledby="add-print-case-file-title "
                centered
                backdrop="static"
                keyboard={false}
                className="add-print-case-file-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="add-print-case-file-title">
                    Adding Print Case File
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Enter the following information.</h5>
                    <Form className="col-10 mx-auto mt-3" id="add-print-case-file-form">

                        <Form.Group as={Row} className="mb-3" controlId="addPCF.safeItemNumber">
                            <Form.Label column sm="4">SAFE Item #</Form.Label>
                            <Col sm="8">
                                <Form.Control type="number" min="1" name="safeItemNumber" placeholder="SAFE Item #" onChange={handleChange} value={state.safeItemNumber}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="addPCF.technician">
                            <Form.Label column sm="4">Technician</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="technician" placeholder="Technician" onChange={handleChange} value={state.technician}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="addPCF.dateStarted">
                            <Form.Label column sm="4">Date Started</Form.Label>
                            <Col sm="8">
                                <Form.Control type="date" name="dateStarted" onChange={handleChange} value={state.dateStarted}/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>

                    <Button onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AddPrintCaseFile