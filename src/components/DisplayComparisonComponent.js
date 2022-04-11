import { Form } from 'react-bootstrap';


function DisplayComparison(props) {

    console.log("display comparison component:");
    const comparison = props.comparison;
    console.log(comparison);

    return (
        <Form>
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="editLatent.lastName">
                    <Form.Label>Subject Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" required readOnly value={comparison.lastName}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.firstName">
                    <Form.Label>Subject First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" required readOnly value={comparison.firstName}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" required readOnly value={comparison.dateOfBirth}/>
                </Form.Group>
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="editLatent.afisNumber">
                    <Form.Label>AFIS Number (if applicable)</Form.Label>
                    <Form.Control type="text" placeholder="AFIS Number"  readOnly value={comparison.afisNumber}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.fbiNumber">
                    <Form.Label>FBI Number (if applicable)</Form.Label>
                    <Form.Control type="text" placeholder="FBI Number"  readOnly value={(comparison.fbiNumber ? comparison.fbiNumber: "NA")}/>
                </Form.Group>

                <Form.Group className="col-4" controlId="editLatent.conclusion">
                    <Form.Label>Conclusion</Form.Label>
                    <Form.Select aria-label="Select a Conclusion" disabled >
                        <option value="0" >{comparison.conclusion}</option>
                    </Form.Select>
                </Form.Group>
                
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="editLatent.comparer">
                    <Form.Label>Compared By</Form.Label>
                    <Form.Control type="text" placeholder="Compared By" required readOnly value={comparison.comparedBy}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.verifier">
                    <Form.Label>Verified By</Form.Label>
                    <Form.Control type="text" placeholder="Verified By" required readOnly value={comparison.verifiedBy}/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.dateOfComparison">
                    <Form.Label>Date of Comparison</Form.Label>
                    <Form.Control type="date" required readOnly value={comparison.dateOfComparison}/>
                </Form.Group>
            </div>
        </Form>
    )
}

export default DisplayComparison;