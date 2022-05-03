import {Form, Button, Modal, Col, Row} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from '../../shared/baseUrl';
import Saving from "./SavingOverlayComponent";



function ConfirmModal(props) {
    const navigate = useNavigate();

    console.log(`my action: ${props.action}`);

    const [state, setState] = useState({
        "safeItemNumber": "",
        "technician": "",
        "dateStarted": ""
    });

    const [isSaving, setIsSaving] = useState(false);



    const handleSubmit = (event) => {
        console.log('submit button clicked');
        console.log(props);
        deleteAction(props);
    }

    const deleteAction = (data) => {
        console.log(baseUrl);
        setIsSaving(true);
        console.log(data);

        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "/" + data.passedincidentid + "/printCaseFiles/" + data.passedprintcasefileid + "/lifts/" + data.passedliftid, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
        })
        .then( () => {
            console.log("deleting lift");
            //setIncidents(result);
            navigate(
                "/display-print-case-file", 
                {state: {
                    passedIncidentId: data.passedincidentid,
                    passedPrintCaseFileId: data.passedprintcasefileid
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
                aria-labelledby="add-print-case-file-title "
                centered
                backdrop="static"
                keyboard={false}
                className="add-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="add-print-case-file-title">
                    Are you sure?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>This data will be permanently lost and cannot be recovered.</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cancel</Button>

                    <Button onClick={handleSubmit}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ConfirmModal