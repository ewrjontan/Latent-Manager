import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {Table, Button, Form, InputGroup, FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import PrintCaseFileTable from "./subComponents/DisplayPrintCaseFileTableComponent";
import TopNavigation from "./subComponents/TopNavigationComponent";

function DisplayCase() {
    const navigate = useNavigate();
    const location = useLocation()
    const { incident } = location.state

    const [printCaseFileCount, setprintCaseFileCount] = useState(0);

    console.log(incident.printCaseFiles);

    useEffect(() => {
        if (incident.printCaseFiles) {
            setprintCaseFileCount(incident.printCaseFiles.length);
            //setComparisonPage(0);
        }
        
    }, []);

    const LatentTable = () => {
        if (incident.printCaseFiles.length !== 0){
            return (
                <div className="mt-4">
                    {incident.printCaseFiles.map( (printCaseFile, index) => {
                        return (
                            <React.Fragment>
                                <h3>Safe Item #{printCaseFile.safeItemNumber}</h3>

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
                                
                            </React.Fragment>
                        )
                    })}
                </div>

            //     <Table striped bordered hover size="sm" className="mt-5 latent-table">
            //     <thead>
            //         <tr>
            //             <th>Latent #</th>
            //             <th>Status</th>
            //             <th>Date</th>
            //             <th>Developed By</th>
            //             <th>Identifier</th>
            //             <th>Verifier</th>
            //         </tr>
            //     </thead>

            //     <tbody>
            //         {incident.printCaseFiles.map( (printCaseFile, index) => {

            //             return (
            //                 printCaseFile.latents.map( (latent, index) => {     
            //                     console.log(latent);    

            //                     return (
            //                         <tr key={index}>
            //                             <td>{`EL${latent.elNumber}`}
            //                                 <Link className="view-latent-button" to="/display-latent" state={{ latent: latent, incident: incident.caseNumber, incidentType: incident.incidentType }}><FontAwesomeIcon icon={faCirclePlus} /></Link>
            //                             </td>
            //                             <td>{(latent.identified ? "Identified": "Not Identified") }</td>
            //                             <td>{latent.dateFound}</td>
            //                             <td>{latent.technician}</td>
            //                             <td>{(latent.identified ? latent.identifier: "")}</td>
            //                             <td>{(latent.identified ? latent.verifier: "") }</td>
            //                         </tr>
            //                     )
            //                 })               
            //             )       
            //         })}

            //     </tbody>
            // </Table>
            )
        }else {
            return (
                <h5 className="mt-5 text-center">No latents available to display, please add a print case file.</h5>
            )
        }
    }


    return (
        <div>
            {/* <div className="d-flex justify-content-between">
                <h3 className="col-3"><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} className="back-icon"/> Back</h3>

                <div className="bg-primary col-3">
                    <InputGroup>
                        <FormControl placeholder="Search" aria-label="Search Input"/>
                        <Button variant="warning" id="button-addon2">s</Button>
                    </InputGroup>
                </div>
            </div> */}

            <TopNavigation />

            <div className="row">
                <div className="col-6">
                    <h1 className="my-3">{incident.caseNumber}</h1>
                    <p><strong>Victim:</strong> {incident.victimFirstName} {incident.victimLastName}</p>
                    <p><strong>Location:</strong> {incident.incidentLocation}</p>
                    <p><strong>Date:</strong> {incident.dateOfIncident}</p>
                </div>
                <div className="col-6">
                    <h1 className="my-3 text-center">Print Case Files ({printCaseFileCount})</h1>
                    
                    <PrintCaseFileTable printCaseFiles={incident.printCaseFiles}/>
                </div>


            </div>
            

            <Button size="lg" className="btn-color">Add Print Case File</Button>


            <LatentTable />
            
        </div>
    )
}

export default DisplayCase;