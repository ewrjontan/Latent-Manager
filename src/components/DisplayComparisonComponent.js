import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';


function DisplayComparison(props) {
    // const [lastName, setLastName] = useState(null);
    // const [firstName, setFirstName] = useState(null);
    // const [dateOfBirth, setDateOfBirth] = useState(null);
    // const [afisNumber, setAfisNumber] = useState(null);
    // const [fbiNumber, setFbiNumber] = useState(null);
    // const [conclusion, setConclusion] = useState(null);
    // const [comparedBy, setComparedBy] = useState(null);
    // const [verifiedBy, setVerifiedBy] = useState(null);
    // const [dateOfComparison, setDateOfComparison] = useState(null);

    const[editComparison, setEditComparison] = useState(false);

    const [state, setState] = useState({
        "lastName": "",
        "firstName": "",
        "dateOfBirth": "",
        "afisNumber": "",
        "fbiNumber": "",
        "conclusion": "",
        "comparedBy": "",
        "verifiedBy": "",
        "dateOfComparison":""
        
    });

    useEffect(() => {
        
        if (props.comparison) {

            let comparison = props.comparison

            //this works
            setState({
                ...state,
                "lastName": comparison.lastName,
                "firstName": comparison.firstName,
                "dateOfBirth": comparison.dateOfBirth,
                "afisNumber": comparison.afisNumber,
                "fbiNumber": comparison.fbiNumber,
                "conclusion": comparison.conclusion,
                "comparedBy": comparison.comparedBy,
                "verifiedBy": comparison.verifiedBy,
                "dateOfComparison": comparison.dateOfComparison,
            });

        }
        
    }, []);


    const editButtonClick = () => {
        console.log("edit button clicked");
        setEditComparison(true);

        let comparisonsContainer = document.getElementById("comparisons-container");
        
        let formInputs = comparisonsContainer.querySelectorAll('input');
        let formSelect = comparisonsContainer.querySelectorAll('select');
        console.log(formInputs);
        console.log(formSelect);

        formInputs.forEach((input) => {
            if (input.hasAttribute('readOnly')){
                console.log("has read only")
                input.readOnly = false;
            }

            if (input.hasAttribute('disabled')){
                console.log("has disabled")
                input.disabled = false;
            }
        });

        formSelect.forEach((select) => {
            if (select.hasAttribute('disabled')){
                console.log("has disabled")
                select.disabled = false;
            }
        });
    }

    const addButtonClick = () => {
        console.log("add button clicked");
    }

    const viewButtonClick = () => {
        console.log("view button clicked");
    }

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

    const saveButtonClick = (event) => {
        console.log("latent saved");
        console.log(event);
        setEditComparison(false);

    }

    return (
        <Form id="comparisons-container">
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="lastName">
                    <Form.Label>Subject Last Name</Form.Label>
                    <Form.Control size="sm" type="text" name="lastName" placeholder="Last Name" required readOnly value={state.lastName} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="firstName">
                    <Form.Label>Subject First Name</Form.Label>
                    <Form.Control size="sm" type="text" name="firstName" placeholder="First Name" required readOnly value={state.firstName} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control size="sm" type="date" name="dateOfBirth" required readOnly value={state.dateOfBirth} onChange={handleChange}/>
                </Form.Group>
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="afisNumber">
                    <Form.Label>AFIS Number (if applicable)</Form.Label>
                    <Form.Control size="sm" type="text" name="afisNumber" placeholder="AFIS Number"  readOnly value={state.afisNumber} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="fbiNumber">
                    <Form.Label>FBI Number (if applicable)</Form.Label>
                    <Form.Control size="sm" type="text" name="fbiNumber" placeholder="FBI Number"  readOnly value={(state.fbiNumber ? state.fbiNumber: "N/A")} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="col-4" controlId="conclusion">
                    <Form.Label>Conclusion</Form.Label>
                    <Form.Select size="sm" aria-label="Select a Conclusion" name="conclusion" value={state.conclusion} disabled onChange={handleChange}>
                        <option value="Exclusion" >Exclusion</option>
                        <option value="Identified" >Identified</option>
                        <option value="Inconclusive" >Inconclusive</option>
                    </Form.Select>
                </Form.Group>
                
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="comparedBy">
                    <Form.Label>Compared By</Form.Label>
                    <Form.Control size="sm" type="text" name="comparedBy" placeholder="Compared By" required readOnly value={state.comparedBy} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="verifiedBy">
                    <Form.Label>Verified By</Form.Label>
                    <Form.Control size="sm" type="text" name="verifiedBy" placeholder="Verified By" required readOnly value={state.verifiedBy} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="dateOfComparison">
                    <Form.Label>Date of Comparison</Form.Label>
                    <Form.Control size="sm" type="date" name="dateOfComparison" required readOnly value={state.dateOfComparison} onChange={handleChange}/>
                </Form.Group>
            </div>
            
            <div className="d-flex justify-content-between my-5">

                <Button className="btn-color col-2" variant="secondary" disabled={editComparison}>Delete</Button>

                <Button className="btn-color col-2" variant="secondary" disabled={editComparison} onClick={() => editButtonClick()}>Edit Comparison</Button>

                <Button className="btn-color col-2" variant="secondary" disabled={editComparison} onClick={() => addButtonClick()}>Add Comparison Image</Button>

                <Button className="btn-color col-2" variant="secondary" disabled={editComparison} onClick={() => viewButtonClick()}>View Comparison Image</Button>

                <Button className="btn-color col-2" variant="secondary" disabled={!editComparison} onClick={(event) => saveButtonClick(event)}>Save</Button>
            </div>
        </Form>


    )
}

export default DisplayComparison;