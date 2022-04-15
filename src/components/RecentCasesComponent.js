import { baseUrl } from '../shared/baseUrl';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./LoadingComponent";


function RecentCases() {
    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState(null);


    const fetchIncidents = () => {
        console.log(baseUrl);
        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "incidents")
        .then(res => res.json())
        .then(result => {
                setIncidents(result);
                console.log(result);
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