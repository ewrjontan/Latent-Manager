import { useLocation } from 'react-router-dom';
import {Table} from "react-bootstrap";


function DisplayCase() {
    const location = useLocation()
    const { incident } = location.state

    console.log(incident.latents);


    return (
        <div>
            <h1 className="mb-5">{incident.caseNumber}</h1>

            <div>
                <p><strong>Victim:</strong> {incident.victimName}</p>
            </div>

            <div>
                <p><strong>Location:</strong> {incident.incidentLocation}</p>
            </div>

            <div>
                <p><strong>Date:</strong> {incident.dateOfIncident}</p>
            </div>


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
                                <td>{`EL${index +1}`}</td>
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