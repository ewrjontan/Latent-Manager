
import ReactLoading from 'react-loading';

function Loading() {

    return(
        <div className="loading-container mx-auto d-flex flex-column align-items-center">
            <h1>Loading Cases...</h1>
            <div className="col-12 mx-auto mt-5">
                <ReactLoading type='spinningBubbles' color="#FFFFFF" height={150} width={150} className="mx-auto"/>
            </div>
        </div>
    )
}

export default Loading;