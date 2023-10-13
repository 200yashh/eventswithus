import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="not-found-page">
            <h1>404</h1>
            <p><strong>Page Not Found!</strong></p>
            <Link to="/"> Go Back To Homeoage ...</Link>
        </div>
     );
}
 
export default NotFound;