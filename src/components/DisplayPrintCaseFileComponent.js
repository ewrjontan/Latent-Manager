import { useNavigate, useLocation } from "react-router-dom";
import TopNavigation from "./subComponents/TopNavigationComponent";

import LatentTable from "./subComponents/LatentTableFullComponent";
import LiftTable from "./subComponents/LiftTableComponent";



function DisplayPrintCaseFile() {
    const navigate = useNavigate();
    const location = useLocation()

    const { printCaseFile, caseNumber, incidentType } = location.state

    console.log("printCaseFile on printcasefile page");
    console.log(location.state);
    return (
        <div>
            <TopNavigation/>
            <h1 className="my-3">SAFE Item # {printCaseFile.safeItemNumber} {printCaseFile.complete? "(Completed)" : ""}</h1>

            <div>
                <p><strong>Date Started: </strong>{printCaseFile.dateStarted}</p>
                <p><strong>Started By: </strong>{printCaseFile.technician}</p>
            </div>

            <LatentTable printCaseFile={printCaseFile} caseNumber={caseNumber} incidentType={incidentType}/>
            <LiftTable printCaseFile={printCaseFile} caseNumber={caseNumber} incidentType={incidentType}/>

        </div>
    )
}

export default DisplayPrintCaseFile;