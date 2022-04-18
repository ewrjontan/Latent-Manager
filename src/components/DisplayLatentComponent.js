import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCirclePlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Form, Button} from "react-bootstrap";


import TopNavigation from "./subComponents/TopNavigationComponent";
import DisplayLatentInfo from "./subComponents/DisplayLatentInfoComponent";
import ComparisonForm from "./ComparisonFormComponent";
import DisplayComparison from "./DisplayComparisonComponent";

import testImage from "../images/latentPrint.jpg"

// function DisplayComparisons(props) {
//     console.log("display comparisons");
//     //console.log(comparisons.comparisons)
//     console.log(props);

//     // if (comparisons.comparisons){
//     //     return (
//     //         comparisons.comparisons.map( (comparison, index) => {
//     //             console.log("comparison:")
//     //             console.log(comparison);
//     //             return (
//     //                 // <DisplayComparison key={index} state={{ test: "hello this is test" }}/>
//     //                 <DisplayComparison key={index} comparison={comparison}/>
//     //             )
//     //         })
            
//     //     )

//     if (props.comparisons){
//         return (
//             <DisplayComparison comparison={props.comparisons[props.index]}/>
//         )
//     }else {
//         return <h4 className="mt-5 text-center">No comparisons have been performed.</h4>
//     }
    
// }



function DisplayLatent(){
    const navigate = useNavigate();
    const location = useLocation();
    const { latent, incident, incidentType } = location.state


    const [comparisonCount, setComparisonCount] = useState(0);
    const [comparisonIndex, setComparisonIndex] = useState(0);
    const [comparisonPage, setcomparisonPage] = useState(1);


    //const [comparisonArray, setComparisonArray] = useState([]);


    console.log(latent);

    useEffect(() => {
        if (latent.comparisons) {
            setComparisonCount(latent.comparisons.length);
            //setComparisonPage(0);
        }
        
    }, []);

    const addComparison = () => {
        console.log("adding comparison");
        const comparisonContainer = document.getElementById("comparison-container");

    }

    const prevComparison = () => {
        console.log("Viewing Previous comparison");
        //const comparisonContainer = document.getElementById("comparison-container");
        if (comparisonPage > 1){
            setComparisonIndex(comparisonIndex - 1);
            setcomparisonPage(comparisonPage - 1);
        }
    }

    const nextComparison = () => {
        console.log("Viewing Next comparison");
        //const comparisonContainer = document.getElementById("comparison-container");
        console.log(comparisonCount);

        if (comparisonCount > comparisonPage ){
            setComparisonIndex(comparisonIndex + 1);
            setcomparisonPage(comparisonPage + 1);
        }
    }

    const ComparisonsHeader = () => {
        if (latent.comparisons) {
            return (
                <div className="d-flex justify-content-between">
                    <h3>Comparisons</h3>
                    <h3>Page {comparisonPage}/{comparisonCount}</h3>
                </div>
                
            )
        }else {
            return <h3>Comparisons</h3>
        }
    }

    const DisplayComparisons = () => {
        if (latent.comparisons){
            return (
                <DisplayComparison comparison={latent.comparisons[comparisonIndex]}/>
            )
        }else {
            return <h4 className="mt-5 text-center">No comparisons have been performed.</h4>
        }
    }




    return (
        <div>
            {/* <Link className="back-icon" to="/display-case" state={{ latent: latent, incident: incident.caseNumber }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Link> */}
            <TopNavigation/>
            
            
            <div className="row d-flex justify-content-between mt-5">
                <div className="col-9">
                    <h1 className="">{incident} - EL{latent.elNumber} ({(latent.identified ? "Identified" : "Not Identified")})</h1>

                    <DisplayLatentInfo latent={latent}/>
                </div>

                <div className="col-3 bg-white text-center">
                    <img src={require("../images/latentPrint.jpg")} alt="Latent Image"/>
                    {/* <img src={latent.latentImage}/> */}
                </div>
            </div>

            

            <div className="comparison-line my-3"></div>

            <ComparisonsHeader/>

            <div className="d-flex justify-content-between my-3">
                <h6><FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={() => prevComparison()}/> Previous</h6>

                <h6><FontAwesomeIcon icon={faCirclePlus} className="add-comparison-icon" onClick={() => addComparison()}/> Add Comparison</h6>
                
                <h6>Next <FontAwesomeIcon icon={faArrowRight} className="back-icon" onClick={() => nextComparison()}/></h6>
                
            </div>

            <div className="" id="comparison-container">
               <DisplayComparisons />
            </div>

        </div>
    )
}

export default DisplayLatent;