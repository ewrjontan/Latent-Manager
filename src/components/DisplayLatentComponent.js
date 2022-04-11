import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCirclePlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Form, Button} from "react-bootstrap";



import ComparisonForm from "./ComparisonFormComponent";
import DisplayComparison from "./DisplayComparisonComponent";

function DisplayComparisons(comparisons) {
    console.log("display comparisons");
    console.log(comparisons.comparisons)

    if (comparisons.comparisons){
        return (
            comparisons.comparisons.map( (comparison, index) => {
                console.log("comparison:")
                console.log(comparison);
                return (
                    // <DisplayComparison key={index} state={{ test: "hello this is test" }}/>
                    <DisplayComparison key={index} comparison={comparison}/>
                )
            })
            
        )
    }else {
        return <h4 className="mt-5 text-center">No comparisons have been performed.</h4>
    }
    
}


function DisplayLatent(){
    const navigate = useNavigate();
    const location = useLocation();
    const { latent, incident, incidentType } = location.state


    const [comparisonCount, setComparisonCount] = useState(0);

    const [comparisonArray, setComparisonArray] = useState([]);


    console.log(latent);

    useEffect(() => {
        if (latent.comparisons) {
            setComparisonCount(latent.comparisons.length);
        }
        
    }, []);

    const addComparison = () => {
        console.log("adding comparison");
        const comparisonContainer = document.getElementById("comparison-container");

    }

    const prevComparison = () => {
        console.log("Viewing Previous comparison");
        const comparisonContainer = document.getElementById("comparison-container");
    }

    const nextComparison = () => {
        console.log("Viewing Next comparison");
        const comparisonContainer = document.getElementById("comparison-container");
    }



    return (
        <div>
            {/* <Link className="back-icon" to="/display-case" state={{ latent: latent, incident: incident.caseNumber }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Link> */}
            <h3><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} className="back-icon"/> Back</h3>
            
            <h1 className="mt-5">{incident} - EL{latent.elNumber} ({(latent.identified ? "Identified" : "Not Identified")})</h1>


            <div className="row">
                <div>
                    <p><strong>Date:</strong> {latent.dateFound}</p>
                </div>
                <div>
                    <p><strong>Developed By:</strong> {latent.technician}</p>
                </div>
                <div>
                    <p><strong>Crime:</strong> {incidentType}</p>
                </div>
            </div>

            {/* <div className="">
                <Form>
                    <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="exampleForm.ControlFirstName">
                        <Form.Label>Case Number</Form.Label>
                        <Form.Control type="text" placeholder="Case Number"  />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="exampleForm.ControlFirstName">
                        <Form.Label>Victim Name</Form.Label>
                        <Form.Control type="text" placeholder="Victim Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="exampleForm.ControlLastName">
                        <Form.Label>Incident Location</Form.Label>
                        <Form.Control type="text" placeholder="Incident Location" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12 col-md-6 mx-auto" controlId="exampleForm.ControlLastName">
                        <Form.Label>Date of Incident</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </Form>
            </div> */}

            <h3>Comparisons ({comparisonCount})</h3>
            <div className="d-flex justify-content-between">
                <h5><FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={() => prevComparison()}/> Previous</h5>

                <h5><FontAwesomeIcon icon={faCirclePlus} className="add-comparison-icon" onClick={() => addComparison()}/> Add Comparison</h5>
                
                <h5>Next <FontAwesomeIcon icon={faArrowRight} className="back-icon" onClick={() => nextComparison()}/></h5>
                
            </div>

            <div className="" id="comparison-container">

               <DisplayComparisons comparisons={latent.comparisons}/>
               
               {/* {latent.comparisons.map( (comparison, index) => {
                    console.log("comparison:")
                    console.log(comparison);
                    return (
                        // <DisplayComparison key={index} state={{ test: "hello this is test" }}/>
                        <DisplayComparison key={index} comparison={comparison}/>
                    )
                })} */}
                


                
                {/* <Form>
                    <div className="row mt-3">
                        <Form.Group className="col-4" controlId="editLatent.lastName">
                            <Form.Label>Subject Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" required/>
                        </Form.Group>
                        <Form.Group className="col-4" controlId="editLatent.firstName">
                            <Form.Label>Subject First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" required/>
                        </Form.Group>
                        <Form.Group className="col-4" controlId="editLatent.dob">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" required/>
                        </Form.Group>
                    </div>
                    
                    <div className="row mt-3">
                        <Form.Group className="col-4" controlId="editLatent.afisNumber">
                            <Form.Label>AFIS Number (if applicable)</Form.Label>
                            <Form.Control type="text" placeholder="AFIS Number" />
                        </Form.Group>
                        <Form.Group className="col-4" controlId="editLatent.fbiNumber">
                            <Form.Label>FBI Number (if applicable)</Form.Label>
                            <Form.Control type="text" placeholder="FBI Number" />
                        </Form.Group>

                        <Form.Group className="col-4" controlId="editLatent.conclusion">
                            <Form.Label>Conclusion</Form.Label>
                            <Form.Select aria-label="Select a Conclusion">
                                <option value="0">Exclusion</option>
                                <option value="1">Identified</option>
                                <option value="2">Inconclusive</option>
                            </Form.Select>
                        </Form.Group>
                        
                    </div>
                    
                    <div className="row mt-3">
                        <Form.Group className="col-4" controlId="editLatent.comparer">
                            <Form.Label>Compared By</Form.Label>
                            <Form.Control type="text" placeholder="Compared By" required/>
                        </Form.Group>
                        <Form.Group className="col-4" controlId="editLatent.verifier">
                            <Form.Label>Verified By</Form.Label>
                            <Form.Control type="text" placeholder="Verified By" required/>
                        </Form.Group>
                        <Form.Group className="col-4" controlId="editLatent.dateOfComparison">
                            <Form.Label>Date of Comparison</Form.Label>
                            <Form.Control type="date" required/>
                        </Form.Group>
                    </div>
                </Form> */}
            </div>

        </div>
    )
}

export default DisplayLatent;