import {Form, Button} from "react-bootstrap";
import TopNavigation from "./subComponents/TopNavigationComponent";

function AddNewCase() {
    return(
        <div>
            <TopNavigation />
            <h1 className="text-center">Adding a new case</h1>

            <h3 className="my-5 text-center">Please enter your case information.</h3>

            <Form className="mx-auto text-center">
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
                <Button size="lg" className="col-12 col-md-6 mx-auto mt-5 btn-color">Submit</Button>
            </Form>

            
        </div>
        
    )
}

export default AddNewCase