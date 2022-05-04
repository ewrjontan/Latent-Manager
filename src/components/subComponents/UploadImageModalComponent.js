import {Form, Button, Modal, Col, Row} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../../shared/baseUrl';
import Saving from "./SavingOverlayComponent";



function ConfirmModal(props) {
    const navigate = useNavigate();

    const [state, setState] = useState({
        "safeItemNumber": "",
        "technician": "",
        "dateStarted": ""
    });

    const [isSaving, setIsSaving] = useState(false);

    const [uploadedImage, setUploadedImage] = useState(null);

    
    const onFileChange = (event) => {
        console.log("file changed");
        setUploadedImage(event.target.files[0])
    }

    const handleSubmit = () => {
        console.log('submit button clicked');
        console.log(uploadedImage);

        let formData = new FormData();

        formData.append(
            "myFile",
            uploadedImage,
            uploadedImage.name
          );

        console.log("my form data");
        console.log(formData);

        //setIsSaving(true);

        // fetch("http://localhost:3001/incidents")
        // fetch(baseUrl + "/" + data.passedincidentid + "/printCaseFiles/" + data.passedprintcasefileid + "/lifts/" + data.passedliftid, {
        //     method: 'DELETE',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     }
        // })
        // .then( () => {
        //     console.log("deleting lift");
        //     //setIncidents(result);
        //     navigate(
        //         "/display-print-case-file", 
        //         {state: {
        //             passedIncidentId: data.passedincidentid,
        //             passedPrintCaseFileId: data.passedprintcasefileid
        //         }
        //     });
                
        // })
        // // .then( () => {
        // //     setLoading(false);
            
        // // })
        // .catch(err => {
        //     console.error(`Fetch problem: ${err.message}`);
        //     navigate("/display-error");
        // } );
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
                className="add-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="add-print-case-file-title">
                    Select an image to upload.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="mb-3">Only .tiff or .jpeg images will be accepted.</h6>
                    <input type="file" onChange={onFileChange} accept="image/jpeg, image/jpg, image/tiff" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cancel</Button>

                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ConfirmModal