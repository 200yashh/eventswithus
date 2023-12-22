import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="nabar-container">
      <nav className="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="#">EVENTS WITH US</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link className="nav-item nav-link"activeClassName="active" exact to="/">Home</Link>
            <Link className="nav-item nav-link" to="/events">Events</Link>
            <Link className="nav-item nav-link" to="/add-events">Add Events</Link>
            <Link className="nav-item nav-link" to="/about">About us</Link>
            <Link className="nav-item nav-link " to="/contactus">Contact us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;