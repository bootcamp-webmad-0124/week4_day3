import { Link } from "react-router-dom";

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/about.gif";

function AboutPage() {
    return (
        <div>
            <h1>About</h1>
            <hr />

            <Link to="/">Volver al inicio</Link>

            <hr />
            <img src={imgURL} alt="the office gif" className="page-img" />
        </div>
    );
}

export default AboutPage;
