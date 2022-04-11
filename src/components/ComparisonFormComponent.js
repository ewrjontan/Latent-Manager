import { Form } from 'react-bootstrap';

function ComparisonForm() {
    return (
        <Form>
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="editLatent.lastName">
                    <Form.Label>Subject Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" required/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.firstName">
                    <Form.Label>Subject First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" required/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" required/>
                </Form.Group>
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="editLatent.afisNumber">
                    <Form.Label>AFIS Number (if applicable)</Form.Label>
                    <Form.Control type="text" placeholder="AFIS Number" />
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.fbiNumber">
                    <Form.Label>FBI Number (if applicable)</Form.Label>
                    <Form.Control type="text" placeholder="FBI Number" />
                </Form.Group>

                <Form.Group className="col-4" controlId="editLatent.conclusion">
                    <Form.Label>Conclusion</Form.Label>
                    <Form.Select aria-label="Select a Conclusion">
                        <option value="0">Exclusion</option>
                        <option value="1">Identified</option>
                        <option value="2">Inconclusive</option>
                    </Form.Select>
                </Form.Group>
                
            </div>
            
            <div className="row mt-3">
                <Form.Group className="col-4" controlId="editLatent.comparer">
                    <Form.Label>Compared By</Form.Label>
                    <Form.Control type="text" placeholder="Compared By" required/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.verifier">
                    <Form.Label>Verified By</Form.Label>
                    <Form.Control type="text" placeholder="Verified By" required/>
                </Form.Group>
                <Form.Group className="col-4" controlId="editLatent.dateOfComparison">
                    <Form.Label>Date of Comparison</Form.Label>
                    <Form.Control type="date" required/>
                </Form.Group>
            </div>
        </Form>
    )
}

export default ComparisonForm;