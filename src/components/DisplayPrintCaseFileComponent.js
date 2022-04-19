import { useNavigate, useLocation } from "react-router-dom";
import TopNavigation from "./subComponents/TopNavigationComponent";


function DisplayPrintCaseFile() {
    const navigate = useNavigate();
    const location = useLocation()

    const { printCaseFile, incident, incidentType } = location.state

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

        </div>
    )
}

export default DisplayPrintCaseFile;