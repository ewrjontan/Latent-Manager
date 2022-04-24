
import ReactLoading from 'react-loading';

function Error(props) {

    return(
        <div className="error-container mx-auto d-flex flex-column align-items-center">
            {/* <div className="saving-overlay-container"> */}
            <h1 className="text-center">Uh oh...</h1>
            <h3>Something went wrong, please try again.</h3>
            {/* <div className="col-12 mx-auto mt-5">
                <ReactLoading type='spinningBubbles' color="#FFFFFF" height={150} width={150} className="mx-auto"/>
            </div> */}
        </div>
    )
}

export default Error;