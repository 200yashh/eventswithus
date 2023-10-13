import {Link} from 'react-router-dom'
const Navbar = () => {
    const ClickMe =()=>{
        alert("You clicked me");
    }
    return (
        <nav className="navbar">
        <h1>Yash</h1>    
        <div className="links">
            <Link to="/"  className={"/"?"active":""}>Home</Link>
            <Link to="/create" className={"/"?"active":""}>Add Event</Link>
            <Link to="/about" className={"/"?"active":""}>About</Link>
            <Link to="/contact" className={"/"?"active":""}>Contact</Link>            
        </div>
        </nav>
     );
}
 
export default Navbar;