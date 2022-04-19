import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useState } from 'react';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";



function LiftTable(props) {
    const { printCaseFile, caseNumber, incidentType } = props;

    const [liftCount, setLiftCount] = useState(printCaseFile.lifts.length);



    if (liftCount !== 0){
        return (
            <div className="mt-4">
                
                <h3>Lifts ({liftCount})</h3>

                <Table striped bordered hover size="sm" className="mt-3 latent-table">
                    <thead>
                        <tr>
                            <th>Latent #</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Developed By</th>
                            <th>Identifier</th>
                            <th>Verifier</th>
                        </tr>
                    </thead>

                    <tbody>

                        {printCaseFile.latents.map( (latent, index) => {     
                            console.log(latent);    

                            return (
                                <tr key={index}>
                                    <td>{`EL${latent.elNumber}`}
                                        <Link className="view-latent-button" to="/display-latent" state={{ latent: latent, caseNumber: caseNumber, incidentType: incidentType }}><FontAwesomeIcon icon={faCirclePlus} /></Link>
                                    </td>
                                    <td>{(latent.identified ? "Identified": "Not Identified") }</td>
                                    <td>{latent.dateFound}</td>
                                    <td>{latent.developedBy}</td>
                                    <td>{(latent.identified ? latent.identifier: "")}</td>
                                    <td>{(latent.identified ? latent.verifier: "") }</td>
                                </tr>
                            )
                        })}               

                    </tbody>
                </Table>
            </div>
        )
    }else {
        return (
            <h5 className="mt-5 text-center">No lifts available to display. Please add lifts.</h5>
        )
    }
}

export default LiftTable;