import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function DisplayPrintCaseFileTable(props){
    const [printCaseFiles, setPrintCaseFiles] = useState(null);

    console.log("printcasefiletableasd props")
    console.log(props.printCaseFiles);

    useEffect(() => {
        
        if (props.printCaseFiles.length !== 0) {
            setPrintCaseFiles(props.printCaseFiles);
            console.log("printcasefiletable props")
            console.log(printCaseFiles);
        }
        
    }, []);


    if (printCaseFiles){
        return (
            <table className="print-case-file-table mx-auto">
                {printCaseFiles.map((printCaseFile, index)=> {
                    return(
                        <tr key={index}>
                            <td><h6>Safe item: {printCaseFile.safeItemNumber}</h6></td>
                            <td><h6>Lifts: {printCaseFile.lifts.length}</h6></td>
                            <td><h6>Latents: {printCaseFile.latents.length}</h6></td>
                            <td><Link key={index} to="/display-print-case-file" state={{ printCaseFile: printCaseFile}} className="w-25">
                                <Button className="btn-color w-100" size="sm">View</Button>
                            </Link></td>
                            {/* <Link className="view-latent-button" to="/display-latent" state={{ latent: latent, incident: incident.caseNumber, incidentType: incident.incidentType }}><FontAwesomeIcon icon={faCirclePlus} /></Link> */}
                        </tr>
                    )
                })}
            </table>
        )
    }else {
        return (
            <h5 className="text-center">No Print Case Files Available.</h5>
        )
    }
}

export default DisplayPrintCaseFileTable