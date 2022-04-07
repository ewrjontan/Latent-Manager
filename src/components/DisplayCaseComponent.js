import { useLocation } from 'react-router-dom'




function DisplayCase() {
    const location = useLocation()
    const { incident } = location.state

    console.log(incident.latents);


    return (
        <div>
            <h1 className="mb-5">{incident.caseNumber}</h1>

            <div className="row">
                <h5 className="col-1">Victim</h5>
                <p className="col-11">{incident.victimName}</p>
            </div>

            <div className="row">
                <h5 className="col-1">Location</h5>
                <p className="col-11">{incident.incidentLocation}</p>
            </div>

            <div className="row">
                <h5 className="col-1">Date</h5>
                <p className="col-11">{incident.dateOfIncident}</p>
            </div>

            <div className="mt-5">
                {incident.latents.map( (latent, index) => {
                    return (
                        <div key={index} className="row">
                            <h5 className="col-1">{`EL${index +1}`}</h5>
                            <p className="col-11">{(latent.identified ? "Identified": "Not Identified") } </p>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}

export default DisplayCase;