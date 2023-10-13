import {Link} from 'react-router-dom';
const Eventlist = ({events,title}) => {
    // const events= props.events;    
    return ( 
        <div className="event-list">
            <div className="event-title"> <h1>{title}</h1></div>
            {events.map((allevent) =>(
                <div className="all-events" key={allevent.id}>
                    <Link to={'/eventdetails/' + allevent.id}>
                    <h3>{allevent.title}</h3>
                    <p>{allevent.location}</p>
                    </Link>
                </div>
            ) )}
        </div>
     );
}
 
export default Eventlist;