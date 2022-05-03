import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from '../shared/baseUrl';
import TopNavigation from "./subComponents/TopNavigationComponent";
import Loading from "./LoadingComponent";
import {Form, Button} from "react-bootstrap";


function DisplayLift() {
    const navigate = useNavigate();
    const location = useLocation()
    const [loading, setLoading] = useState(true);
    const [lift, setLift] = useState(null);

    const[editLift, setEditLift] = useState(false);

    const [state, setState] = useState({
        "dateFound": "",
        "developedBy": "",
        "elNumber": "",
        "firstValuer": "",
        "liftImage": "",
        "liftNumber": "",
        "locationFound": "",
        "needsValuation": "",
        "secondValuer": "",
        "surface":"",
        "thirdValuer": "",
        "value": ""
    });

    const [stateBeforeChanges, setStateBeforeChanges] = useState({
        "dateFound": "",
        "developedBy": "",
        "elNumber": "",
        "firstValuer": "",
        "liftImage": "",
        "liftNumber": "",
        "locationFound": "",
        "needsValuation": "",
        "secondValuer": "",
        "surface":"",
        "thirdValuer": "",
        "value": ""
    });




    console.log("displayLift Page");
    console.log(location.state);


    const { incidentId, printCaseFileId, liftId, caseNumber, safeItemNumber } = location.state;

    const fetchLift = (incidentId, printCaseFileId, liftId) => {
        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "/" + incidentId + "/printCaseFiles/" + printCaseFileId + "/lifts/" + liftId)
        .then(res => res.json())
        .then(result => {
            setLift(result);
            console.log(result);
            setState({
                ...state,
                "dateFound": result.dateFound,
                "developedBy": result.developedBy,
                "elNumber": result.elNumber,
                "firstValuer": result.firstValuer,
                "liftImage": result.liftImage,
                "liftNumber": result.liftNumber,
                "locationFound": result.locationFound,
                "needsValuation": result.needsValuation,
                "secondValuer": result.secondValuer,
                "surface":result.surface,
                "thirdValuer": result.thirdValuer,
                "value": result.value
            });
        })
        .then( () => {
            setLoading(false);
        })
        .catch(err => console.error(`Fetch problem: ${err.message}`) );
    }

    useEffect(() => {
        // if (incident.printCaseFiles) {
        //     setprintCaseFileCount(incident.printCaseFiles.length);
        // }
        
        fetchLift(incidentId, printCaseFileId, liftId)

    }, [location.state]);

    const handleChange = (event) => {
        console.log("change occuring");
        console.log(event.target.name);

        let name = event.target.name
        let value = event.target.value

        setState({
            ...state,
            [name]: value
        });
    }


    const enableDisableInputs = () => {

        let liftContainer = document.getElementById("lift-form-container");
        
        let formInputs = liftContainer.querySelectorAll('input');
        let formSelect = liftContainer.querySelectorAll('select');

        console.log(formInputs);
        console.log(formSelect);

        formInputs.forEach((input) => {
            if (input.hasAttribute('disabled')){
                console.log("has disabled")
                input.disabled = false;
            }else {
                input.disabled = true;
            }
        });

        formSelect.forEach((select) => {
            if (select.hasAttribute('disabled')){
                console.log("has disabled")
                select.disabled = false;
            }else {
                select.disabled = true;

            }
        });
    }

    const editButtonClick = () => {
        console.log("edit button clicked");

        setStateBeforeChanges({
            ...stateBeforeChanges,
            "dateFound": state.dateFound,
            "developedBy": state.developedBy,
            "elNumber": state.elNumber,
            "firstValuer": state.firstValuer,
            "liftImage": state.liftImage,
            "liftNumber": state.liftNumber,
            "locationFound": state.locationFound,
            "needsValuation": state.needsValuation,
            "secondValuer": state.secondValuer,
            "surface":state.surface,
            "thirdValuer": state.thirdValuer,
            "value": state.value
        });

        setEditLift(true);
        enableDisableInputs();
    }

    const addImageButtonClick = () => {
        console.log("add button clicked");
    }

    const viewImageButtonClick = () => {
        console.log("view button clicked");
    }

    const saveButtonClick = (event) => {
        console.log("latent saved");
        console.log(event);
        setEditLift(false);
        enableDisableInputs();
        saveChanges(state);
    }

    const saveChanges = (data) => {
        setLoading(true);
        fetch(baseUrl + "/" + incidentId + "/printCaseFiles/" + printCaseFileId + "/lifts/" + liftId, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            setLift(result);
            setLoading(false);
        })
        .catch(err => console.error(`Fetch problem: ${err.message}`) );
    }

    const cancelButtonClick = (event) => {
        console.log("changes canceled");

        setState({
            ...state,
            "dateFound": stateBeforeChanges.dateFound,
            "developedBy": stateBeforeChanges.developedBy,
            "elNumber": stateBeforeChanges.elNumber,
            "firstValuer": stateBeforeChanges.firstValuer,
            "liftImage": stateBeforeChanges.liftImage,
            "liftNumber": stateBeforeChanges.liftNumber,
            "locationFound": stateBeforeChanges.locationFound,
            "needsValuation": stateBeforeChanges.needsValuation,
            "secondValuer": stateBeforeChanges.secondValuer,
            "surface":stateBeforeChanges.surface,
            "thirdValuer": stateBeforeChanges.thirdValuer,
            "value": stateBeforeChanges.value
        });


        setEditLift(false);
        enableDisableInputs();
    }

    const deleteButtonClick = () => {
        console.log("delete buytton clicked")
    }



    const EditCancelButton = () => {
        if (editLift) {
            return(
                <Button className="btn-color col-2" variant="secondary" onClick={() => cancelButtonClick()}>Cancel</Button>
            )
        } else{
            return(
                <Button className="btn-color col-2" variant="secondary" onClick={() => editButtonClick()}>Edit Lift</Button>
            )
        }
    }

    if (loading) {
        return <Loading/>
    }else {

        return(
            <div>
                <TopNavigation />
                <div className="d-flex flex-row justify-content-between">
                    <h1 className="my-3">{caseNumber}</h1>
                    <h1 className="my-3">SAFE Item # {safeItemNumber}</h1>
                </div>

                {/* uses fetch state, not state of form so only reflects SAVED changes*/}
                <h3>Lift {lift.liftNumber} {lift.elNumber ? `- EL ${lift.elNumber}` : ""}</h3>

                <div className="lift-image-container my-5">
                    insert Image here
                </div>

                <Form id="lift-form-container">
                    <div className="row mt-3">
                    <Form.Group className="col-3" controlId="dateFound">
                            <Form.Label>Date Found</Form.Label>
                            <Form.Control size="sm" type="date" name="dateFound" required disabled value={state.dateFound} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="col-3" controlId="developedBy">
                            <Form.Label>Developed By</Form.Label>
                            <Form.Control size="sm" type="text" name="developedBy" placeholder="Developed By" required disabled value={state.developedBy} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="col-3" controlId="surface">
                            <Form.Label>Surface</Form.Label>
                            <Form.Control size="sm" type="text" name="surface" placeholder="Surface" required disabled value={state.surface} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="col-3" controlId="locationFound">
                            <Form.Label>Location Found</Form.Label>
                            <Form.Control size="sm" type="text" name="locationFound" placeholder="locationFound" required disabled value={state.locationFound} onChange={handleChange}/>
                        </Form.Group>
                    </div>
                    
                    <div className="row mt-3">
                        <Form.Group className="col-3" controlId="liftNumber">
                            <Form.Label>Lift Number</Form.Label>
                            <Form.Control size="sm" type="number" name="liftNumber" placeholder="Lift Number"  disabled value={state.liftNumber} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="col-3" controlId="elNumber">
                            <Form.Label>Latent Number</Form.Label>
                            <Form.Control size="sm" type="number" name="elNumber" placeholder="Latent Number"  disabled value={state.elNumber? state.elNumber : ""} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="col-3" controlId="value">
                            <Form.Label>Value</Form.Label>
                            <Form.Select size="sm" aria-label="has-value" name="value" value={state.value} disabled onChange={handleChange}>
                                <option value="true" >Value</option>
                                <option value="false" >No Value</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="col-3" controlId="needsValuation">
                            <Form.Label>Needs Valuation</Form.Label>
                            <Form.Select size="sm" aria-label="needs-valuation" name="needsValuation" value={state.needsValuation} disabled onChange={handleChange}>
                                <option value="true" >Needs Valuation</option>
                                <option value="false" >Complete</option>
                            </Form.Select>
                        </Form.Group>
                        
                    </div>
                    
                    <div className="row mt-3">
                        <Form.Group className="col-4" controlId="firstValuer">
                            <Form.Label>First Valuer</Form.Label>
                            <Form.Control size="sm" type="text" name="firstValuer" placeholder="First Valuer" required disabled value={state.firstValuer} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="col-4" controlId="secondValuer">
                            <Form.Label>Second Valuer</Form.Label>
                            <Form.Control size="sm" type="text" name="secondValuer" placeholder="Second Valuer" required disabled value={state.secondValuer} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="col-4" controlId="thirdValuer">
                            <Form.Label>Third Valuer (if applicable)</Form.Label>
                            <Form.Control size="sm" type="text" name="thirdValuer" placeholder="Third Valuer (if applicable)" required disabled value={state.thirdValuer} onChange={handleChange}/>
                        </Form.Group>
                    </div>
                    
                    <div className="d-flex justify-content-between my-5">

                        <Button className="btn-color col-2" variant="secondary" disabled={editLift} onClick={() => deleteButtonClick()}>Delete</Button>

                        <Button className="btn-color col-2" variant="secondary" disabled={editLift} onClick={() => addImageButtonClick()}>Add Comparison Image</Button>

                        <Button className="btn-color col-2" variant="secondary" disabled={editLift} onClick={() => viewImageButtonClick()}>View Comparison Image</Button>

                        <EditCancelButton/>

                        <Button className="btn-color col-2" variant="secondary" disabled={!editLift} onClick={(event) => saveButtonClick(event)}>Save</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default DisplayLift;