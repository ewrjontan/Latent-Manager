import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from '../shared/baseUrl';
import TopNavigation from "./subComponents/TopNavigationComponent";

import LatentTable from "./subComponents/LatentTableFullComponent";
import LiftTable from "./subComponents/LiftTableComponent";
import Loading from "./LoadingComponent";



function DisplayPrintCaseFile() {
    const navigate = useNavigate();
    const location = useLocation()

    // const { printCaseFile, caseNumber, incidentType } = location.state
    const { passedIncidentId, passedPrintCaseFileId } = location.state

    console.log("on display printCaseFile page");
    console.log(location.state);

    const [loading, setLoading] = useState(true);
    const [printCaseFile, setPrintCaseFile] = useState(null);


    const fetchPrintCaseFile = () => {
        console.log(baseUrl);
        // fetch("http://localhost:3001/incidents")
        fetch(baseUrl + "/" + passedIncidentId + "/printCaseFiles/" + passedPrintCaseFileId)
        .then(res => res.json())
        .then(result => {
            setPrintCaseFile(result);
                console.log(result);
        })
        .then( () => {
            setLoading(false);
            
        })
        .catch(err => console.error(`Fetch problem: ${err.message}`) );
    }

    useEffect(() => {
        console.log(passedPrintCaseFileId)
        fetchPrintCaseFile();
    }, []);

    if (loading){
        return <Loading/>
    }else {
        return (
            <div>
                <TopNavigation/>
                <h1 className="my-3">SAFE Item # {printCaseFile.safeItemNumber} {printCaseFile.complete? "(Completed)" : ""}</h1>

                <div>
                    <p><strong>Date Started: </strong>{printCaseFile.dateStarted}</p>
                    <p><strong>Started By: </strong>{printCaseFile.technician}</p>
                </div>

                {/* <LatentTable printCaseFile={printCaseFile} caseNumber={caseNumber} incidentType={incidentType}/>
                <LiftTable printCaseFile={printCaseFile} caseNumber={caseNumber} incidentType={incidentType}/> */}

            </div>
        )
    }
}

export default DisplayPrintCaseFile;