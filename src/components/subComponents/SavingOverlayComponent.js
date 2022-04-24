
import ReactLoading from 'react-loading';

function Saving(props) {

    return(
        <div className="saving-overlay-container mx-auto d-flex flex-column align-items-center">
            {/* <div className="saving-overlay-container"> */}
            <h1 className="text-center">Saving...</h1>
            <div className="col-12 mx-auto mt-5">
                <ReactLoading type='spinningBubbles' color="#FFFFFF" height={150} width={150} className="mx-auto"/>
            </div>
        </div>
    )
}

export default Saving;