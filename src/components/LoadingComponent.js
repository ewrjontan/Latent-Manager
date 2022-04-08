
import ReactLoading from 'react-loading';

function Loading() {

    return(
        <div className="col-12 text-center mx-auto mt-5">
            <h1>Loading Cases...</h1>
            <div className="col-2 mx-auto mt-5 ps-5">
                <ReactLoading type='spinningBubbles' color="#FFFFFF" height={150} width={150}/>
            </div>
        </div>
    )
}

export default Loading;