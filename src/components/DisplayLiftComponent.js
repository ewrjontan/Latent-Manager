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

    const[editComparison, setEditComparison] = useState(false);

    const [state, setState] = useState({
        "dateFound": "",
        "developedBy": "",
        "elNumber": null,
        "firstValuer": "",
        "liftImage": "",
        "liftNumber": "",
        "locationFound": "",
        "needsValuation": true,
        "secondValuer": "",
        "surface":"",
        "thirdValuer": "",
        "value": false
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

                <h3>Lift {lift.liftNumber} {lift.elNumber ? `- EL ${lift.elNumber}` : ""}</h3>
                <h3>{state.elNumber ? `EL ${state.elNumber}` : ""}</h3>

                <div className="lift-image-container my-5">
                    insert Image here
                </div>

                <Form id="comparisons-container">
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
                            <Form.Control size="sm" type="number" name="elNumber" placeholder="Latent Number"  disabled value={state.elNumber} onChange={handleChange}/>
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
                    
                    {/* <div className="d-flex justify-content-between my-5">

                        <Button className="btn-color col-2" variant="secondary" disabled={editComparison} onClick={() => deleteButtonClick()}>Delete</Button>

                        <Button className="btn-color col-2" variant="secondary" disabled={editComparison} onClick={() => addImageButtonClick()}>Add Comparison Image</Button>

                        <Button className="btn-color col-2" variant="secondary" disabled={editComparison} onClick={() => viewImageButtonClick()}>View Comparison Image</Button>

                        <Button className="btn-color col-2" variant="secondary" disabled={editComparison} onClick={() => editButtonClick()}>Edit Comparison</Button>

                        <Button className="btn-color col-2" variant="secondary" disabled={!editComparison} onClick={(event) => saveButtonClick(event)}>Save</Button>
                    </div> */}
                </Form>
            </div>
        )
    }
}

export default DisplayLift;