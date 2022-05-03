import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from '../shared/baseUrl';
import TopNavigation from "./subComponents/TopNavigationComponent";

import LatentTable from "./subComponents/LatentTableFullComponent";
import LiftTable from "./subComponents/LiftTableComponent";
import AddLift from "./subComponents/AddLiftComponent";
import AddLatent from "./subComponents/AddLatentComponent";


import Loading from "./LoadingComponent";



function DisplayPrintCaseFile() {
    const navigate = useNavigate();
    const location = useLocation()

    // const { printCaseFile, caseNumber, incidentType } = location.state
    const { passedIncidentId, passedPrintCaseFileId, passedCaseNumber } = location.state

    console.log("on display printCaseFile page");

    const [loading, setLoading] = useState(true);
    const [printCaseFile, setPrintCaseFile] = useState(null);

    const [latentModalShow, setLatentModalShow] = useState(false);


    const fetchPrintCaseFile = () => {
        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "/" + passedIncidentId + "/printCaseFiles/" + passedPrintCaseFileId)
        .then(res => res.json())
        .then(result => {
            setPrintCaseFile(result);
        })
        .then( () => {
            setLoading(false);
            
        })
        .catch(err => console.error(`Fetch problem: ${err.message}`) );
    }

    useEffect(() => {
        fetchPrintCaseFile();
    }, []);

    if (loading){
        return <Loading/>
    }else {
        return (
            <div>
                <TopNavigation/>
                <div className="d-flex flex-row justify-content-between">
                    <h1 className="my-3">{passedCaseNumber}</h1>
                    <h1 className="my-3">SAFE Item # {printCaseFile.safeItemNumber} {printCaseFile.complete? "(Completed)" : ""}</h1>
                </div>
                

                <div>
                    <p><strong>Date Started: </strong>{printCaseFile.dateStarted}</p>
                    <p><strong>Started By: </strong>{printCaseFile.technician}</p>
                </div>

                <LiftTable printCaseFile={printCaseFile} passedIncidentId={passedIncidentId} passedPrintCaseFileId={passedPrintCaseFileId} passedCaseNumber={passedCaseNumber} passedSafeItemNumber={printCaseFile.safeItemNumber}/>
                {/* <AddLift passedIncidentid={passedIncidentId} passedPrintCaseFileId={passedPrintCaseFileId} show={liftModalShow} onHide={() => setLiftModalShow(false)} /> */}


                <LatentTable printCaseFile={printCaseFile}/>
                <AddLatent passedIncidentid={passedIncidentId} passedPrintCaseFileId={passedPrintCaseFileId} show={latentModalShow} onHide={() => setLatentModalShow(false)} />

            </div>
        )
    }
}

export default DisplayPrintCaseFile;