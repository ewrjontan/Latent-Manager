import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Counter } from "../features/counter/Counter";


function Home() {
    return (
      <div >
        <main>
          <h1>Welcome to Latent Manager</h1>
          <p>Let's begin.</p>
        </main>

        {/* <Counter/> */}
        
        
        <Link to="/add-new-case">
            <Button size="lg" className="btn-color">Add New Case</Button>
        </Link>
      </div>
    );
  }

  export default Home;