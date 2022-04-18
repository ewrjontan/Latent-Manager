import { Fragment, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";


function DisplayLatentInfo(props) {

    const [state, setState] = useState({
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
        "palm": "",
        "palmArea": "",
        "developmentTechnique": "",
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
                setState((state) => ({ ...state, [key]: passedLatent[key] }));
            })

        }
        
    }, []);


    const FingerPalmDropDowns = () => {
        if (props.latent.fingerOrPalm === "finger"){
            return (
                <Fragment>
                    <Form.Group className="col-2">
                        <Form.Label className="">Finger #</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" aria-label="Finger Number">
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
                        <Form.Select size="sm" className="finger-select-dropdown" aria-label="Select Pattern">
                            <option value="1">Arch</option>
                            <option value="2">R. Loop</option>
                            <option value="3">L. Loop</option>
                            <option value="4">Whorl</option>
                            <option value="5">Double Loop Whorl</option>
                            <option value="6">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-2">
                        <Form.Label className="">Pattern Ref.</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" aria-label="Finger Pattern Reference">
                            <option value="1">Arch</option>
                            <option value="2">R. Loop</option>
                            <option value="3">L. Loop</option>
                            <option value="4">Whorl</option>
                            <option value="5">Double Loop Whorl</option>
                            <option value="6">Tented Arch</option>
                            <option value="7">Other</option>
                        </Form.Select>
                    </Form.Group>
                </Fragment>
            )
        }else {
            return (
                <Fragment>
                    <Form.Group className="col-3">
                        <Form.Label className="">Palm (L or R)</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" aria-label="Left or Right Palm">
                            <option value="1">R. Palm</option>
                            <option value="2">L. Palm</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="col-3">
                        <Form.Label className="">Palm Area</Form.Label>
                        <Form.Select size="sm" className="finger-select-dropdown" aria-label="Select Palm Area">
                            <option value="1">Thenar</option>
                            <option value="2">Hypothenar</option>
                            <option value="3">Interdigital</option>
                            <option value="4">Writers Palm</option>
                            <option value="5">Unknown</option>
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

            <Form className="text-center">
                <div className="row">
                    <div className="col-9 mt-3">
                        <div className="row mb-3 ">
                            <Form.Group className="col-6" controlId="detailLevel">
                                <Form.Label className="">Detail Level</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        label="1"
                                        name="detailLevelOne"
                                        type="checkbox"
                                        checked
                                        disabled
                                        id="detailLevelOne"
                                    />
                                    <Form.Check
                                        inline
                                        label="2"
                                        name="detailLevelTwo"
                                        type="checkbox"
                                        id="detailLevelTwo"
                                    />
                                    <Form.Check
                                        inline
                                        name="detailLevelThree"
                                        label="3"
                                        type="checkbox"
                                        id="detailLevelThree"
                                    />
                                    <Form.Check
                                        inline
                                        name="core"
                                        label="Core"
                                        type="checkbox"
                                        id="core"
                                    />
                                    <Form.Check
                                        inline
                                        name="delta"
                                        label="Delta"
                                        type="checkbox"
                                        id="delta"
                                    />
                                </div>
                            </Form.Group>

                            <FingerPalmDropDowns />
                        </div>

                        <div className="row mb-3">
                            <Form.Group className="col-3">
                                <Form.Label>Processing Method</Form.Label>
                                <Form.Select size="sm" className="" aria-label="Development Technique">
                                    <option value="1">Black Powder</option>
                                    <option value="2">Ninhydrin</option>
                                    <option value="3">Cyanoacrylate</option>
                                    <option value="4">Blue Star</option>
                                    <option value="5">Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="col-3" controlId="benchNotesBy">
                                <Form.Label>Bench Notes By</Form.Label>
                                <Form.Control size="sm" type="text" name="benchNotesBy" placeholder="Bench Notes By" required readOnly />
                            </Form.Group>

                            <Form.Group className="col-3" controlId="clarificationAddedToForayBy">
                                <Form.Label>Clarification Added By</Form.Label>
                                <Form.Control size="sm" type="text" name="clarificationAddedToForayBy" placeholder="Clarification Added By" required readOnly />
                            </Form.Group>

                            <Form.Group className="col-3" controlId="clarificationAddedToForayDate">
                                <Form.Label>Date Added</Form.Label>
                                <Form.Control size="sm" type="date" name="clarificationAddedToForayDate" required readOnly/>
                            </Form.Group>
                        </div>

                        <div className="row mb-3">
                            <Form.Group className="col-7" controlId="distortionTypes">
                                <Form.Label className="">Distortion Types</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        label="Overlay"
                                        name="overlay"
                                        type="checkbox"
                                        checked
                                        id="distortionOverlay"
                                    />
                                    <Form.Check
                                        inline
                                        label="Smear"
                                        name="smear"
                                        type="checkbox"
                                        id="distortionSmear"
                                    />
                                    <Form.Check
                                        inline
                                        name="reversal"
                                        label="Reversal"
                                        type="checkbox"
                                        id="distortionReversal"
                                    />
                                    <Form.Check
                                        inline
                                        name="pressure"
                                        label="Pressure"
                                        type="checkbox"
                                        id="distortionPressure"
                                    />
                                    <Form.Check
                                        inline
                                        name="creases"
                                        label="Creases"
                                        type="checkbox"
                                        id="distortionCreases"
                                    />
                                    <Form.Check
                                        inline
                                        name="scars"
                                        label="Scars"
                                        type="checkbox"
                                        id="distortionScars"
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="col-5" controlId="distortionNotes">
                                <Form.Label>Distortion Notes</Form.Label>
                                <Form.Control size="sm" type="text" name="distortionNotes" placeholder="Distortion Notes" required readOnly value={state.distortionNotes} />
                            </Form.Group>
                        </div>

                        <div className="d-flex justify-content-around">
                            {/* <Button className="btn-color col-2" onClick={() => editButtonClick()}>Edit</Button> */}


                            <Button className="btn-color col-2">Download Latent</Button>
                            <Button className="btn-color col-2">Edit Info</Button>
                            <Button className="btn-color col-2" type="submit">Save</Button>
                            {/* <Button className="btn-color col-2" type="submit" onClick={() => saveButtonClick()}>Save</Button> */}
                        </div>
                    </div>

                    <div className="col-3 bg-white text-center">
                        <img src={require("../../images/latentPrint.jpg")} alt="Latent Image"/>
                        {/* <img src={latent.latentImage}/> */}
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-6">
                        <h3>AFIS Information</h3>
                            <div className="row mb-3 mb-3">
                                <Form.Group className="col-6" controlId="dateAfisSearch">
                                    <Form.Label>Date Searched</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateAfisSearch" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisSearchBy">
                                    <Form.Label>Searched By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisSearchBy" placeholder="Searched by" required readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfAfisComparison">
                                    <Form.Label>Date Compared</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfAfisComparison" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisComparedBy">
                                    <Form.Label>Compared By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisComparedBy" placeholder="Compared by" required readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfAfisVerification">
                                    <Form.Label>Date Verified</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfAfisVerification" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisVerifiedBy">
                                    <Form.Label>Verified By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisVerifiedBy" placeholder="Verified by" required readOnly />
                                </Form.Group>
                            </div>

                            <Form.Group className="mb-3 row py-3" controlId="retainedInAfis">
                                <Form.Label className="col-6">Retained in AFIS</Form.Label>

                                <div className="col-6">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        name="retainedInAfis"
                                        type="checkbox"
                                        id="retainedInAfisTrue"
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        name="retainedInAfis"
                                        type="checkbox"
                                        id="retainedInAfisFalse"
                                    />
                                </div>
                            </Form.Group>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateRemovedFromAfis">
                                    <Form.Label>Date Removed from AFIS</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateRemovedFromAfis" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="removedFromAfisBy">
                                    <Form.Label>Removed By</Form.Label>
                                    <Form.Control size="sm" type="text" name="removedFromAfisBy" placeholder="Removed by" required readOnly />
                                </Form.Group>
                            </div>        
                    </div>

                    <div className="col-6">
                        <h3>NGI Information</h3>
                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateAfisSearch">
                                    <Form.Label>Date Searched</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateAfisSearch" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisSearchBy">
                                    <Form.Label>Searched By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisSearchBy" placeholder="Searched by" required readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfAfisComparison">
                                    <Form.Label>Date Compared</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfAfisComparison" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisComparedBy">
                                    <Form.Label>Compared By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisComparedBy" placeholder="Compared by" required readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateOfAfisVerification">
                                    <Form.Label>Date Verified</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateOfAfisVerification" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="afisVerifiedBy">
                                    <Form.Label>Verified By</Form.Label>
                                    <Form.Control size="sm" type="text" name="afisVerifiedBy" placeholder="Verified by" required readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateRemovedFromAfis">
                                    <Form.Label>Date XV Receipt Saved</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateRemovedFromAfis" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="removedFromAfisBy">
                                    <Form.Label>Saved By</Form.Label>
                                    <Form.Control size="sm" type="text" name="removedFromAfisBy" placeholder="Removed by" required readOnly />
                                </Form.Group>
                            </div>

                            <div className="row mb-3">
                                <Form.Group className="col-6" controlId="dateRemovedFromAfis">
                                    <Form.Label>Date Removed IRQ</Form.Label>
                                    <Form.Control size="sm" type="date" name="dateRemovedFromAfis" required readOnly/>
                                </Form.Group>
                                <Form.Group className="col-6" controlId="removedFromAfisBy">
                                    <Form.Label>Removed By</Form.Label>
                                    <Form.Control size="sm" type="text" name="removedFromAfisBy" placeholder="Removed by" required readOnly />
                                </Form.Group>
                            </div>
                    </div>
                </div>

                

            </Form>
        </Fragment>
    )
}

export default DisplayLatentInfo;