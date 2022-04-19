import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Table, Button, Form, InputGroup, FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import PrintCaseFileTable from "./subComponents/PrintCaseFileTableComponent";
import TopNavigation from "./subComponents/TopNavigationComponent";
import LatentTable from "./subComponents/LatentTableComponent";

function DisplayCase() {
    const navigate = useNavigate();
    const location = useLocation()
    const { incident } = location.state

    const [printCaseFileCount, setprintCaseFileCount] = useState(0);

    console.log("displayCase passed incident");
    console.log(incident);

    useEffect(() => {
        if (incident.printCaseFiles) {
            setprintCaseFileCount(incident.printCaseFiles.length);
        }
        
    }, []);

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
                    
                    <PrintCaseFileTable printCaseFiles={incident.printCaseFiles}/>
                </div>
            </div>
            
            <Button size="lg" className="btn-color">Add Print Case File</Button>

            <LatentTable incident={incident} />
        </div>
    )
}

export default DisplayCase;