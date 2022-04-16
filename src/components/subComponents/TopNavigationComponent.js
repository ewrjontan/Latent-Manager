import { useState } from "react";
import { faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button, InputGroup, FormControl} from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';


function TopNavigation() {
    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        console.log("change occuring");
        let value = event.target.value
        setSearchInput(value);
    }

    return (
        <div className="d-flex justify-content-between">
            <h3 className="col-3"><FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} className="back-icon"/> Back</h3>

            {/* <Form className="col-3">
                <Form.Group className="" controlId="searchInput">
                    <Form.Control type="text" placeholder="Search" />
                </Form.Group>
            </Form> */}

            <div className="col-3">
                <InputGroup>
                    <FormControl placeholder="Find Case" name="searchInput" aria-label="Search Input" value={searchInput} onChange={handleChange}/>
                    <Link to="/display-search-results" state={{searchInput: searchInput }}><Button variant="" className="btn-search" id="button-addon2"><FontAwesomeIcon icon={faMagnifyingGlass} className="back-icon"/></Button></Link>
                </InputGroup>
            </div>
        </div>
    )
}

export default TopNavigation;

{/* <Link className="view-latent-button" to="/display-latent" state={{ latent: latent, incident: incident.caseNumber, incidentType: incident.incidentType }}><FontAwesomeIcon icon={faCirclePlus} /></Link> */}