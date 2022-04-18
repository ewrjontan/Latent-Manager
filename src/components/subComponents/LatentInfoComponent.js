import { Fragment, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";


function DisplayLatentInfo(props) {
    const[editLatentInfo, setEditLatentInfo] = useState(false);

    const [latent, setLatent] = useState({
        "dateFound": "",
        "developedBy": "",
        "detailLevelOne": "",
        "detailLevelTwo": "",
        "detailLevelThree": "",
        "core": "",
        "delta": "",
        "fingerNumber": "",
        "pattern": "",
        "reference": "",
        "palmLeftOrRight": "",
        "palmArea": "",
        "processingMethod": "",
        "benchNotesBy": "",
        "notes": "",
        "consultation": "",
        "clarificationAddedToForayDate": "",
        "clarificationAddedToForayBy": "",
        "overlay": "",
        "smear": "",
        "reversal": "",
        "pressure": "",
        "creases": "",
        "scars": "",
        "distortionNotes": "",
        "dateAfisSearch": "",
        "afisSearchBy": "",
        "dateOfAfisComparison": "",
        "afisComparedBy": "",
        "dateOfAfisVerification": "",
        "afisVerifiedBy": "",
        "retainedInAfis": "",
        "dateRemovedFromAfis": "",
        "removedFromAfisBy": "",
        "dateNgiSearch": "",
        "ngiSearchBy": "",
        "dateOfNgiComparison": "",
        "ngiComparedBy": "",
        "dateOfNgiVerification": "",
        "ngiVerifiedBy": "",
        "ngiReceiptSavedDate": "",
        "ngiReceiptSavedBy": "",
        "dateRemovedNgiIrq": "",
        "removedNgiIrqBy": ""
    });

    useEffect(() => {
        
        if (props.latent) {

            let passedLatent = props.latent;

            console.log("latent display info: ")
            console.log(passedLatent);

            Object.keys(passedLatent).map(key => {
                setLatent((latent) => ({ ...latent, [key]: passedLatent[key] }));
            })

        }
        
    }, []);

    const handleChange = (event) => {
        console.log("change occuring");
        console.log(event.target.name);

        let name = event.target.name
        let value = event.target.value

        setLatent({
            ...latent,
            [name]: value
        });
    }

    const handleCheckBoxChange = (event) => {
        console.log("change occuring");

        let name = event.target.name

        console.log(name);

        setLatent({
            ...latent,
            [name]: !latent[name]
        });
    }

    const uploadButtonClick = () => {
        console.log("Upload images button click");
    }

    const downloadButtonClick = () => {
        console.log("download images button click");
        console.log(editLatentInfo);
    }

    const editButtonClick = () => {
        console.log("edit button clicked");
        
        //used to disable the disable attribute for the re-render of the fingerPalm component
        setEditLatentInfo(true);

        let latentInfoContainer = document.getElementById("latent-info-container");
        
        let formInputs = latentInfoContainer.querySelectorAll('input');
        let formSelect = latentInfoContainer.querySelectorAll('select');
        console.log(formInputs);
        console.log(formSelect);

        formInputs.forEach((input) => {
            if (input.hasAttribute('readOnly')){
                console.log("has read only")
                input.readOnly = false;
            }

            if (input.hasAttribute('disabled')){
                console.log("has disabled")
                input.disabled = false;
            }
        });

        formSelect.forEach((select) => {
            if (select.hasAttribute('disabled')){
                console.log("has disabled")
                select.disabled = false;
            }
        });
    }


    const saveButtonClick = () => {
        console.log("save Info button click");
        setEditLatentInfo(false);

    }


    const FingerPalmDropDowns = () => {
        if (latent.fingerOrPalm === "finger"){
            return (
                <Fragment>
                    <Form.Group className="col-2">
                        <Form.Label className="">Finger #</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" name="fingerNumber" aria-label="Finger Number" value={latent.fingerNumber} disabled={!editLatentInfo} onChange={handleChange}>
                            <option value="1">#1 R. Thumb</option>
                            <option value="2">#2 R. Index</option>
                            <option value="3">#3 R. Middle</option>
                            <option value="4">#4 R. Ring</option>
                            <option value="5">#5 R. Little</option>
                            <option value="6">#6 L. Thumb</option>
                            <option value="7">#7 L. Index</option>
                            <option value="8">#8 L. Middle</option>
                            <option value="9">#9 L. Ring</option>
                            <option value="10">#10 L. Little</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-2">
                        <Form.Label className="">Finger Pattern</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" value={latent.pattern} disabled={!editLatentInfo} onChange={handleChange} name="pattern" aria-label="Select Pattern">
                            <option value="arch">Arch</option>
                            <option value="right loop">R. Loop</option>
                            <option value="left loop">L. Loop</option>
                            <option value="whorl">Whorl</option>
                            <option value="double loop whorl">Double Loop Whorl</option>
                            <option value="tented arch">Tented Arch</option>
                            <option value="other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-2">
                        <Form.Label className="">Pattern Ref.</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" name="reference" aria-label="Finger Pattern Reference" value={(latent.reference ? latent.reference: "na")} disabled={!editLatentInfo} onChange={handleChange}>
                            <option value="na">N/A</option>
                            <option value="arch">Arch</option>
                            <option value="right loop">R. Loop</option>
                            <option value="left loop">L. Loop</option>
                            <option value="whorl">Whorl</option>
                            <option value="double loop whorl">Double Loop Whorl</option>
                            <option value="tented arch">Tented Arch</option>
                            <option value="other">Other</option>
                        </Form.Select>
                    </Form.Group>
                </Fragment>
            )
        }else {
            return (
                <Fragment>
                    <Form.Group className="col-3">
                        <Form.Label className="">Palm (L or R)</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" aria-label="Left or Right Palm" value={latent.palmLeftOrRight} disabled={!editLatentInfo} onChange={handleChange}>
                            <option value="right">R. Palm</option>
                            <option value="left">L. Palm</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-3">
                        <Form.Label className="">Palm Area</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" aria-label="Select Palm Area" value={latent.palmArea} disabled={!editLatentInfo} onChange={handleChange}>
                            <option value="thenar">Thenar</option>
                            <option value="hypothenar">Hypothenar</option>
                            <option value="interdigital">Interdigital</option>
                            <option value="writers palm">Writers Palm</option>
                            <option value="unknown">Unknown</option>
                        </Form.Select>
                    </Form.Group>
                </Fragment>
            )
        }
    }

    return (
        <Fragment>

            {/* <p><strong>Date:</strong> {latent.dateFound}</p>
               
            <p><strong>Developed By:</strong> {latent.technician}</p> */}
          
            {/* <p><strong>Crime:</strong> {incidentType}</p> */}

            <Form className="text-center" id="latent-info-container">
                <div className="row">
                    <div className="col-9 pe-4">
                        <div className="row mb-3 ">
                            <Form.Group className="col-6" controlId="detailLevel">
                                <Form.Label className="">Detail Level</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        label="1"
                                        name="detailLevelOne"
                                        type="checkbox"
                                        checked={latent.detailLevelOne}
                                        disabled
                                        id="detailLevelOne"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.detailLevelTwo}
                                        label="2"
                                        name="detailLevelTwo"
                                        type="checkbox"
                                        id="detailLevelTwo"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.detailLevelThree}
                                        name="detailLevelThree"
                                        label="3"
                                        type="checkbox"
                                        id="detailLevelThree"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.core}
                                        name="core"
                                        label="Core"
                                        type="checkbox"
                                        id="core"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.delta}
                                        name="delta"
                                        label="Delta"
                                        type="checkbox"
                                        id="delta"
                                        onChange={handleCheckBoxChange}
                                    />
                                </div>
                            </Form.Group>

                            <FingerPalmDropDowns />
                        </div>

                        <div className="row mb-3">
                            <Form.Group className="col-3">
                                <Form.Label>Processing Method</Form.Label>
                                <Form.Select size="sm" className="" aria-label="Development Technique" value={latent.processingMethod} name="processingMethod" disabled onChange={handleChange}>
                                    <option value="black powder">Black Powder</option>
                                    <option value="ninhydrin">Ninhydrin</option>
                                    <option value="cyanoacrylate">Cyanoacrylate</option>
                                    <option value="blue star">Blue Star</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="col-3" controlId="benchNotesBy">
                                <Form.Label>Bench Notes By</Form.Label>
                                <Form.Control size="sm" type="text" name="benchNotesBy" placeholder="Bench Notes By"  readOnly value={latent.benchNotesBy} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="col-3" controlId="clarificationAddedToForayBy">
                                <Form.Label>Clarification Added By</Form.Label>
                                <Form.Control size="sm" type="text" name="clarificationAddedToForayBy" placeholder="Clarification Added By" value={(latent.clarificationAddedToForayBy)?latent.clarificationAddedToForayBy : "N/A"} onChange={handleChange} readOnly />
                            </Form.Group>

                            <Form.Group className="col-3" controlId="clarificationAddedToForayDate">
                                <Form.Label>Date Added</Form.Label>
                                <Form.Control size="sm" type="date" name="clarificationAddedToForayDate" value={(latent.clarificationAddedToForayDate)?latent.clarificationAddedToForayDate : ""} onChange={handleChange} readOnly/>
                            </Form.Group>
                        </div>

                        <div className="row mb-3">
                            <Form.Group className="col-7" controlId="distortionTypes">
                                <Form.Label className="">Distortion Types</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.overlay}
                                        label="Overlay"
                                        name="overlay"
                                        type="checkbox"
                                        id="distortionOverlay"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.smear}
                                        label="Smear"
                                        name="smear"
                                        type="checkbox"
                                        id="distortionSmear"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.reversal}
                                        name="reversal"
                                        label="Reversal"
                                        type="checkbox"
                                        id="distortionReversal"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.pressure}
                                        name="pressure"
                                        label="Pressure"
                                        type="checkbox"
                                        id="distortionPressure"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.creases}
                                        name="creases"
                                        label="Creases"
                                        type="checkbox"
                                        id="distortionCreases"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.scars}
                                        name="scars"
                                        label="Scars"
                                        type="checkbox"
                                        id="distortionScars"
                                        onChange={handleCheckBoxChange}
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="col-5" controlId="distortionNotes">
                                <Form.Label>Distortion Notes</Form.Label>
                                <Form.Control size="sm" type="text" name="distortionNotes" placeholder="Distortion Notes" readOnly value={(latent.distortionNotes)?latent.distortionNotes : "N/A"} onChange={handleChange} />
                            </Form.Group>
                        </div>

                        <div className="d-flex justify-content-between mt-5">
                            {/* <Button className="btn-color col-2" onClick={() => editButtonClick()}>Edit</Button> */}

                            <Button className="btn-color col-2" variant="secondary" disabled={editLatentInfo} onClick={() => uploadButtonClick()}>Upload Images</Button>
                            <Button className="btn-color col-2" variant="secondary" disabled={editLatentInfo} onClick={() => downloadButtonClick()}>Download Images</Button>
                            <Button className="btn-color col-2" variant="secondary" disabled={editLatentInfo} onClick={() => editButtonClick()}>Edit Info</Button>
                            <Button className="btn-color col-2" variant="secondary" disabled={!editLatentInfo}  onClick={() => saveButtonClick()}>Save</Button>
                            {/* <Button className="btn-color col-2" type="submit" onClick={() => saveButtonClick()}>Save</Button> */}
                        </div>
                    </div>

                    <div className="col-3 bg-white text-center d-flex align-items-middle justify-content-center">
                        <img src={require("../../images/latentPrint.jpg")} alt="Latent"/>
                        {/* <img src={latent.latentImage}/> */}
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-6">
                        <h3>AFIS Information</h3>
                            <div className="row mb-3 mb-3">
                                <Form.Group className="col-6" controlId="dateAfisSearch">
                                    <Form.Label>Date Searched</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateAfisSearch" value={(latent.dateAfisSearch)?latent.dateAfisSearch : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisSearchBy">
                                    <Form.Label>Searched By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisSearchBy" placeholder="Searched by" value={(latent.afisSearchBy)?latent.afisSearchBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfAfisComparison">
                                    <Form.Label>Date Compared</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfAfisComparison" value={(latent.dateOfAfisComparison)?latent.dateOfAfisComparison : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisComparedBy">
                                    <Form.Label>Compared By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisComparedBy" placeholder="Compared by" value={(latent.afisComparedBy)?latent.afisComparedBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfAfisVerification">
                                    <Form.Label>Date Verified</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfAfisVerification" value={(latent.dateOfAfisVerification)?latent.dateOfAfisVerification : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisVerifiedBy">
                                    <Form.Label>Verified By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisVerifiedBy" placeholder="Verified by" value={(latent.afisVerifiedBy)?latent.afisVerifiedBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3 row py-3" controlId="retainedInAfis">
                                <Form.Label className="col-6">Retained in AFIS</Form.Label>

                                <div className="col-6">
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={latent.retainedInAfis}
                                        label="Yes"
                                        name="retainedInAfis"
                                        type="checkbox"
                                        id="retainedInAfisTrue"
                                        onChange={handleCheckBoxChange}
                                    />
                                    <Form.Check
                                        inline
                                        disabled
                                        checked={!latent.retainedInAfis}
                                        label="No"
                                        name="retainedInAfis"
                                        type="checkbox"
                                        id="retainedInAfisFalse"
                                        onChange={handleCheckBoxChange}
                                    />
                                </div>
                            </Form.Group>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateRemovedFromAfis">
                                    <Form.Label>Date Removed from AFIS</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateRemovedFromAfis" value={(latent.dateRemovedFromAfis)?latent.dateRemovedFromAfis : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="removedFromAfisBy">
                                    <Form.Label>Removed By</Form.Label>
                                    <Form.Control size="sm" type="text" name="removedFromAfisBy" placeholder="Removed by" value={(latent.removedFromAfisBy)?latent.removedFromAfisBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>        
                    </div>

                    <div className="col-6">
                        <h3>NGI Information</h3>
                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateNgiSearch">
                                    <Form.Label>Date Searched</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateNgiSearch" value={(latent.dateNgiSearch)?latent.dateNgiSearch : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="ngiSearchBy">
                                    <Form.Label>Searched By</Form.Label>
                                    <Form.Control size="sm" type="text" name="ngiSearchBy" placeholder="Searched by" value={(latent.ngiSearchBy)?latent.ngiSearchBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfNgiComparison">
                                    <Form.Label>Date Compared</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfNgiComparison" value={(latent.dateOfNgiComparison)?latent.dateOfNgiComparison : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="ngiComparedBy">
                                    <Form.Label>Compared By</Form.Label>
                                    <Form.Control size="sm" type="text" name="ngiComparedBy" placeholder="Compared by" value={(latent.ngiComparedBy)?latent.ngiComparedBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfNgiVerification">
                                    <Form.Label>Date Verified</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfNgiVerification" value={(latent.dateOfNgiVerification)?latent.dateOfNgiVerification : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="ngiVerifiedBy">
                                    <Form.Label>Verified By</Form.Label>
                                    <Form.Control size="sm" type="text" name="ngiVerifiedBy" placeholder="Verified by" value={(latent.ngiVerifiedBy)?latent.ngiVerifiedBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="ngiReceiptSavedDate">
                                    <Form.Label>Date XV Receipt Saved</Form.Label>
                                    <Form.Control size="sm" type="date" name="ngiReceiptSavedDate" value={(latent.ngiReceiptSavedDate)?latent.ngiReceiptSavedDate : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="ngiReceiptSavedBy">
                                    <Form.Label>Saved By</Form.Label>
                                    <Form.Control size="sm" type="text" name="ngiReceiptSavedBy" placeholder="Removed by" value={(latent.ngiReceiptSavedDate)?latent.ngiReceiptSavedDate : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateRemovedFromAfis">
                                    <Form.Label>Date Removed IRQ</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateRemovedFromAfis" value={(latent.dateRemovedNgiIrq)?latent.dateRemovedNgiIrq : ""} onChange={handleChange} readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="removedFromAfisBy">
                                    <Form.Label>Removed By</Form.Label>
                                    <Form.Control size="sm" type="text" name="removedFromAfisBy" placeholder="Removed by" value={(latent.removedNgiIrqBy)?latent.removedNgiIrqBy : ""} onChange={handleChange} readOnly />
                                </Form.Group>
                            </div>
                    </div>
                </div>

                

            </Form>
        </Fragment>
    )
}

export default DisplayLatentInfo;