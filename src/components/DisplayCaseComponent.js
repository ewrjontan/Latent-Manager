import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Table, Button, Form, InputGroup, FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { baseUrl } from '../shared/baseUrl';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import PrintCaseFileTable from "./subComponents/PrintCaseFileTableComponent";
import TopNavigation from "./subComponents/TopNavigationComponent";
import LatentTable from "./subComponents/LatentTableQuickComponent";
import AddPrintCaseFile from "./subComponents/AddPrintCaseFileComponent";
import Loading from "./LoadingComponent";

function DisplayCase() {
    const navigate = useNavigate();
    const location = useLocation()

    const [incident, setIncident] = useState(null);
    const [loading, setLoading] = useState(true);
    const [printCaseFileCount, setprintCaseFileCount] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    //Used before setting up fetch
    // const { incident } = location.state
    // const [printCaseFileCount, setprintCaseFileCount] = useState(0);

    // useEffect(() => {
    //     if (incident.printCaseFiles) {
    //         setprintCaseFileCount(incident.printCaseFiles.length);
    //     }
        
    // }, []);

    const { passedIncidentId } = location.state;

    const fetchIncident = (incidentId) => {
        console.log(baseUrl + "/" + incidentId);
        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "/" + incidentId)
        .then(res => res.json())
        .then(result => {
            setIncident(result);
            console.log(result);
            if (result.printCaseFiles.length !== 0) {
                setprintCaseFileCount(result.printCaseFiles.length);
            }
        })
        .then( () => {
            setLoading(false);
        })
        .catch(err => console.error(`Fetch problem: ${err.message}`) );
    }

    useEffect(() => {
        // if (incident.printCaseFiles) {
        //     setprintCaseFileCount(incident.printCaseFiles.length);
        // }
        
        fetchIncident(passedIncidentId)
    }, []);


    if (loading) {
        return <Loading/>
    }else {
        return (
            <div>
                <TopNavigation />

                <div className="row">
                    <div className="col-6">
                        <h1 className="my-3">{incident.caseNumber}</h1>
                        <div className="row">
                            <div className="col-6">
                                <p><strong>Date of Incident:</strong> {incident.dateOfIncident}</p>
                                <p><strong>Location:</strong> {incident.incidentLocation}</p>
                            </div>

                            <div  className="col-6">
                                <p><strong>Incident Type:</strong> {incident.incidentType}</p>
                                <p><strong>Victim:</strong> {incident.victimFirstName} {incident.victimLastName}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <h1 className="my-3 text-center">Print Case Files ({printCaseFileCount})</h1>
                        
                        <PrintCaseFileTable printCaseFiles={incident.printCaseFiles} caseNumber={incident.caseNumber} incidentType={incident.incidentType}/>
                    </div>
                </div>
                
                <Button size="lg" className="btn-color" onClick={() => setModalShow(true)}>Add Print Case File</Button>

                <LatentTable incident={incident} />

                <AddPrintCaseFile incidentid={incident._id} show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        )
    }
}

export default DisplayCase;