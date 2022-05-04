import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useState } from 'react';
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddLift from "./AddLiftComponent";



function LiftTable(props) {
    const { printCaseFile, passedIncidentId, passedPrintCaseFileId, passedCaseNumber, passedSafeItemNumber } = props;

    const [liftCount, setLiftCount] = useState(printCaseFile.lifts.length);
    const [liftModalShow, setLiftModalShow] = useState(false);



    console.log("on lifttable component xxx");
    console.log(props)
 
    // const handleAddLiftClick = () => {
    //     console.log("add lift btn clicked");
    // }

    if (liftCount !== 0){
        return (
            <div className="mt-5">
                
                <div className="d-flex flex-row justify-content-between">
                    <h3>Lifts ({liftCount})</h3>

                    <div>
                        <Button size="lg" className="btn-color" onClick={() => setLiftModalShow(true)}>Add Lift</Button>
                    </div>
                </div>

                <AddLift passedincidentid={passedIncidentId} passedprintcasefileid={passedPrintCaseFileId} passedcasenumber={passedCaseNumber} passedsafeitemnumber={passedSafeItemNumber} show={liftModalShow} onHide={() => setLiftModalShow(false)} />

                <Table striped bordered hover size="sm" className="mt-3 latent-table">
                    <thead>
                        <tr>
                            <th>Lift #</th>
                            <th>Latent #</th>
                            <th>Date</th>
                            <th>Developed By</th>
                            <th>Status</th>
                            <th>Value</th>
                        </tr>
                    </thead>

                    <tbody>

                        {printCaseFile.lifts.map( (lift, index) => {     
                            return (
                                <tr key={index}>
                                    <td>{lift.liftNumber}
                                        <Link className="view-latent-button" to="/display-lift" state={{ incidentId: passedIncidentId, printCaseFileId: passedPrintCaseFileId, liftId: lift._id, caseNumber: passedCaseNumber, safeItemNumber: passedSafeItemNumber}}><FontAwesomeIcon icon={faCirclePlus} /></Link>
                                        {/* <Link className="view-latent-button" to="/display-latent"><FontAwesomeIcon icon={faCirclePlus} /></Link> */}
                                    </td>
                                    <td>{(lift.elNumber ? `EL${lift.elNumber}`: "N/A") }</td>
                                    <td>{lift.dateFound}</td>
                                    <td>{lift.developedBy}</td>
                                    <td>{(lift.needsValuation ? "Awaiting valuation": "Complete")}</td>
                                    <td>{(lift.value ? "Value": "No Value")}</td>
                                    
                                </tr>
                            )
                        })}               

                    </tbody>
                </Table>
            </div>
        )
    }else {
        return (
            <div>
                <h5 className="mt-5 text-center">No lifts available to display. Please add lifts.</h5>
                <div className="mt-5 text-center">
                    <Button size="lg" className="btn-color col-3" onClick={() => setLiftModalShow(true)}>Add Lift</Button>
                </div>
                <AddLift passedincidentid={passedIncidentId} passedprintcasefileid={passedPrintCaseFileId} passedcasenumber={passedCaseNumber} passedsafeitemnumber={passedSafeItemNumber} show={liftModalShow} onHide={() => setLiftModalShow(false)} />
            </div>
            
        )
    }
}

export default LiftTable;