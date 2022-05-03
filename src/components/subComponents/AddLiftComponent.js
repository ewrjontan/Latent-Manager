import {Form, Button, Modal, Col, Row} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../../shared/baseUrl';
import Saving from "./SavingOverlayComponent";



function AddLift(props) {
    const navigate = useNavigate();

    console.log("add lifts page");

    const { passedincidentid, passedprintcasefileid, passedcasenumber, passedsafeitemnumber } = props

    const [state, setState] = useState({
        "liftNumber": "",
        "developedBy": "",
        "dateFound": "",
        "locationFound": "",
        "surface": ""
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (event) => {
        console.log("change occuring");

        let name = event.target.name
        let value = event.target.value

        console.log("event name:");
        console.log(name);

        if (name === "developedBy"){
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

    const handleSubmit = (event) => {
        console.log(props.incidentid);
        console.log('submit button clicked');
        event.preventDefault();

        let form = document.getElementById("add-lift-form");
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
        fetch(baseUrl + "/" + passedincidentid + "/printCaseFiles/" + passedprintcasefileid + "/lifts", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
                console.log("from addLift modal result");
                console.log(result);
                //setIncidents(result);
                navigate(
                    "/display-lift", 
                    {state: {
                        incidentId: passedincidentid,
                        printCaseFileId: passedprintcasefileid,
                        liftId: result._id,
                        caseNumber: passedcasenumber,
                        safeItemNumber: passedsafeitemnumber
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
                aria-labelledby="add-lift-title "
                centered
                backdrop="static"
                keyboard={false}
                className="add-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="add-lift-modal-title">
                    Adding Lift
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Enter the following information.</h5>
                    <Form className="col-10 mx-auto mt-3 add-modal-form" id="add-lift-form">

                        <Form.Group as={Row} className="mb-3" controlId="addLift.liftNumber">
                            <Form.Label column sm="4">Lift #</Form.Label>
                            <Col sm="8">
                                <Form.Control type="number" min="1" name="liftNumber" placeholder="Lift #" onChange={handleChange} value={state.liftNumber}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="addLift.developedBy">
                            <Form.Label column sm="4">Developed By</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="developedBy" placeholder="Developed By" onChange={handleChange} value={state.developedBy}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="addLift.dateFound">
                            <Form.Label column sm="4">Date Found</Form.Label>
                            <Col sm="8">
                                <Form.Control type="date" name="dateFound" onChange={handleChange} value={state.dateFound}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="addLift.locationFound">
                            <Form.Label column sm="4">Location Found</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="locationFound" placeholder="Location Found" onChange={handleChange} value={state.locationFound}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="addLift.surface">
                            <Form.Label column sm="4">Surface</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="surface" placeholder="Surface" onChange={handleChange} value={state.surface}/>
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

export default AddLift