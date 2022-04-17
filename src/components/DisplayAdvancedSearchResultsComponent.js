import { baseUrl } from '../shared/baseUrl';
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./LoadingComponent";

import TopNavigation from "./subComponents/TopNavigationComponent";



function DisplayAdvancedSearchResults() {
    const location = useLocation();
    //const { caseNumber, victimLastName, victimFirstName, dateOfBirth, incidentLocation, incidentType  } = location.state;
    const { searchInput } = location.state;

    let urlQuery = `incidents?`;

    const [loading, setLoading] = useState(true);
    const [incidents, setIncidents] = useState(null);

    console.log("displaying search results page");
    console.log(searchInput);




    const fetchIncidents = (searchInput) => {
        console.log(baseUrl);
        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "incidents?caseNumber=" + searchInput)
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
        if (!loading){
            setLoading(true);
        }

        //fetchIncidents(searchInput);
        console.log(location.state);
    }, [searchInput]);


    if (loading){
        return <Loading/>
    }else if (incidents.length !== 0){
        return (
            <div>
                <TopNavigation />

                <div className="mx-auto text-center mt-5">
                    <h1 className="pt-5 text-center">{incidents.length} {incidents.length > 1 ? "results were" : "result was"} found for <em>{searchInput}</em></h1>
                </div>

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
    }else {
        return (
            <div>
                <TopNavigation />

                <div className="mx-auto text-center mt-5">
                    <h1 className="pt-5 text-center">{searchInput != "" ? `No results were found for ${searchInput}.` : `Search field was blank.`} </h1>
                    <h2>Please enter a valid case number.</h2>
                </div>
                
            </div>
        
        )
    }
}

export default DisplayAdvancedSearchResults;