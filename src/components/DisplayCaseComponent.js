import React, { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Table, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function DisplayCase() {
    const navigate = useNavigate();
    const location = useLocation()
    const { incident } = location.state

    console.log(incident.latents);


    return (
        <div>
            <h3><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} className="back-icon"/> Back</h3>

            <h1 className="my-5">{incident.caseNumber}</h1>

            <div>
                <p><strong>Victim:</strong> {incident.victimName}</p>
            </div>

            <div>
                <p><strong>Location:</strong> {incident.incidentLocation}</p>
            </div>

            <div>
                <p><strong>Date:</strong> {incident.dateOfIncident}</p>
            </div>

            <Button size="lg" className="btn-color">Add Latent</Button>


            <Table striped bordered hover size="sm" className="mt-5 latent-table">
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

                    {incident.latents.map( (latent, index) => {
                        return (
                            <tr key={index}>
                                <td>{`EL${latent.elNumber}`}
                                    <Link className="view-latent-button" to="/display-latent" state={{ latent: latent, incident: incident.caseNumber, incidentType: incident.incidentType }}><FontAwesomeIcon icon={faCirclePlus} /></Link>
                                </td>
                                <td>{(latent.identified ? "Identified": "Not Identified") }</td>
                                <td>{latent.dateFound}</td>
                                <td>{latent.technician}</td>
                                <td>{(latent.identified ? latent.identifier: "")}</td>
                                <td>{(latent.identified ? latent.verifier: "") }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DisplayCase;