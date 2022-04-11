import {Form, Button} from "react-bootstrap";


function AddNewCase() {
    return(
        <div className="text-center">
            <h1>Adding a new case</h1>

            <h3 className="my-5">Let's begin by entering your case information.</h3>

            <Form>
                <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="addNewCase.firstName">
                    <Form.Label>Case Number</Form.Label>
                    <Form.Control type="text" placeholder="Case Number" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="addNewCase.lastName">
                    <Form.Label>Victim Name</Form.Label>
                    <Form.Control type="text" placeholder="Victim Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="addNewCase.location">
                    <Form.Label>Incident Location</Form.Label>
                    <Form.Control type="text" placeholder="Incident Location" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="addNewCase.dateOfIncident">
                    <Form.Label>Date of Incident</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
            </Form>

            <Button size="lg" className="col-12 col-md-6 mx-auto mt-5 btn-color">Submit</Button>
        </div>
        
    )
}

export default AddNewCase