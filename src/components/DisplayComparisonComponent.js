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


    const [state, setState] = useState({
        "lastName": null,
        "firstName": null,
        "dateOfBirth": null,
        "afisNumber": null,
        "fbiNumber": null,
        "conclusion": null,
        "comparedBy": null,
        "verifiedBy": null,
        "dateOfComparison":null
        
    })

    useEffect(() => {
        if (props.comparison) {

            let comparison = props.comparison

            // setLastName(comparison.lastName);
            // setFirstName(comparison.firstName);
            // setDateOfBirth(comparison.dateOfBirth);
            // setAfisNumber(comparison.afisNumber);
            // setFbiNumber(comparison.fbiNumber);
            // setConclusion(comparison.conclusion);
            // setComparedBy(comparison.comparedBy);
            // setVerifiedBy(comparison.verifiedBy);
            // setDateOfComparison(comparison.dateOfComparison);

            console.log("props.comparison");
            console.log(comparison);

            //this works
            setState({
                
                "lastName": comparison.lastName
            });

            // for (let key in comparison) {
            //     if (comparison.hasOwnProperty(key)) {
            //         console.log("key: " + key)
            //         console.log("comparison-key: " + comparison[key]);

            //         setState({
            //             ...state,
            //             [key]: comparison[key]
            //         });
            //     }
            // }

            console.log("state");
            console.log(state);
            //setState({ firstName: evt.target.value });
        }
        
    }, []);

    console.log("display comparison component:");
    const comparison = props.comparison;
    console.log(comparison);

    const editButtonClick = () => {
        console.log("edit button clicked");
        
        let formInputs = document.querySelectorAll('input');
        console.log(formInputs);

        formInputs.forEach((input) => {
            if (input.hasAttribute('readOnly')){
                console.log("has read only")
                input.readOnly = false;
            }

            if (input.hasAttribute('disabled')){
                console.log("has read only")
                input.disabled = false;
            }
            //box.setAttribute('id', `box-${index}`);
          });
    }

    const handleChange = (event) => {
        //this.setState({value: event.target.value});
        console.log("change occuring");
        console.log(event.target.id);
        //setLastName(event.target.value);

        let inputId = event.target.id
        let value = event.target.value

        // if (formIdsForSettingState.hasOwnProperty(inputId)){
        //     console.log("found id");
        //     formIdsForSettingState.inputId(value);
        // }
      }

    return (
        <Form>
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="lastName">
                    <Form.Label>Subject Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" required readOnly value={state.lastName} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="firstName">
                    <Form.Label>Subject First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" required readOnly value={state.firstName}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" required readOnly value={state.dateOfBirth}/>
                </Form.Group>
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="afisNumber">
                    <Form.Label>AFIS Number (if applicable)</Form.Label>
                    <Form.Control type="text" placeholder="AFIS Number"  readOnly value={state.afisNumber}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="fbiNumber">
                    <Form.Label>FBI Number (if applicable)</Form.Label>
                    <Form.Control type="text" placeholder="FBI Number"  readOnly value={(state.fbiNumber ? state.fbiNumber: "NA")}/>
                </Form.Group>

                <Form.Group className="col-4" controlId="conclusion">
                    <Form.Label>Conclusion</Form.Label>
                    <Form.Select aria-label="Select a Conclusion" disabled >
                        <option value="0" >{state.conclusion}</option>
                    </Form.Select>
                </Form.Group>
                
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="comparedBy">
                    <Form.Label>Compared By</Form.Label>
                    <Form.Control type="text" placeholder="Compared By" required readOnly value={state.comparedBy}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="verifiedBy">
                    <Form.Label>Verified By</Form.Label>
                    <Form.Control type="text" placeholder="Verified By" required readOnly value={state.verifiedBy}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="dateOfComparison">
                    <Form.Label>Date of Comparison</Form.Label>
                    <Form.Control type="date" required readOnly value={state.dateOfComparison}/>
                </Form.Group>
            </div>
            
            <div className="d-flex justify-content-between mt-5">

                <Button className="btn-color col-2">Delete</Button>

                <Button className="btn-color col-2" onClick={() => editButtonClick()} >Edit</Button>


                <Button className="btn-color col-2" type="submit">Save</Button>
            </div>
        </Form>


    )
}

export default DisplayComparison;