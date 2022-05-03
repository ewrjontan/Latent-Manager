import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useState } from 'react';
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function LatentTable(props) {
    const { printCaseFile, caseNumber, incidentType } = props;

    const [latentCount, setLatentCount] = useState(printCaseFile.latents.length);


    const handleAddLatenttClick = () => {
        console.log("add lift btn clicked");
    }

    if (printCaseFile.hasLatents){
        return (
            <div className="mt-5">

                <div className="d-flex flex-row justify-content-between">
                    <h3>Latents ({latentCount})</h3>

                    <div>
                        <Button size="lg" className="btn-color" onClick={() => handleAddLatenttClick}>Add Latent</Button>
                    </div>
                </div>

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
            <h5 className="mt-5 text-center">No latents available to display or are awaiting valuation.</h5>
        )
    }
}

export default LatentTable;