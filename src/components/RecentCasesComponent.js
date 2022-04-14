import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./LoadingComponent";

// const caseDb = [
//     {
//         caseNumber: "AR53290",
//         victimName: "Jon Doe",
//         incidentLocation: "2828 Ninety-seven ST",
//         dateOfIncident: "06/25/1922",
//         latents: [
//             {
//                 liftNumber: 1,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: true,
//                 identifier: "MILLER C886",
//                 type: "finger",
//                 verified: true,
//                 verifier: "CARDENAS C093"      
//             },
//             {
//                 liftNumber: 4,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: true,
//                 identifier: "MILLER C886",
//                 type: "finger",
//                 verified: true,
//                 verifier: "CARDENAS C093"
//             },
//             {
//                 liftNumber: 3,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: false,
//                 identifier: null,
//                 type: "palm",
//                 verified: false,
//                 verifier: null
//             }
//         ]
//     },
//     {
//         caseNumber: "AR45550",
//         victimName: "Jon Doe",
//         incidentLocation: "2828 Ninety-seven ST",
//         dateOfIncident: "06/25/1922",
//         latents: [
//             {
//                 liftNumber: 1,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: true,
//                 identifier: "MILLER C886",
//                 type: "finger",
//                 verified: true,
//                 verifier: "CARDENAS C093"
//             },
//             {
               
//                 liftNumber: 4,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: true,
//                 identifier: "MILLER C886",
//                 type: "palm",
//                 verified: true,
//                 verifier: "CARDENAS C093"
//             },
//             {
//                 liftNumber: 3,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: false,
//                 identifier: null,
//                 type: "palm",
//                 verified: false,
//                 verifier: null
//             }
//         ]
//     },
//     {
//         caseNumber: "AS34320",
//         victimName: "Jon Doe",
//         incidentLocation: "2828 Ninety-seven ST",
//         dateOfIncident: "06/25/1922",
//         latents: [
//             {
               
//                 liftNumber: 1,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: true,
//                 identifier: "MILLER C886",
//                 type: "finger",
//                 verified: true,
//                 verifier: "CARDENAS C093"
         
//             },
//             {
               
//                 liftNumber: 4,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: true,
//                 identifier: "MILLER C886",
//                 type: "finger",
//                 verified: true,
//                 verifier: "CARDENAS C093"
              
//             },
//             {
               
//                 liftNumber: 3,
//                 locationFound: "2828 97 ST",
//                 surface: "exterior door of chevy silverado",
//                 dateFound: "06/26/1922",
//                 technician: "Klemme D105",
//                 identified: false,
//                 identifier: null,
//                 type: "palm",
//                 verified: false,
//                 verifier: null
               
//             }
//         ]
//     },
// ]



function RecentCases() {
    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState(null);


    const fetchIncidents = () => {
        fetch("http://localhost:3001/incidents")
        .then(res => res.json())
        .then(result => {
                setIncidents(result);
        })
        .then( () => {
            setLoading(false);
        })
        .catch(err => console.error(`Fetch problem: ${err.message}`) );
    }

    useEffect(() => {
        fetchIncidents();
    }, []);


    if (loading){
        return <Loading/>
    }else {
        return (
            <div>
                <h1>Select a Case</h1>
                
                <div className="row d-flex flex-column mt-5">
                    {incidents.map( (incident, index) => {
                        return (
                            <div className="col-12 col-md-8 mb-3" key={index}>
                                <Link to="/display-case" state={{ incident: incident }}>
                                    <Button className="btn-color">{incident.caseNumber}</Button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default RecentCases;