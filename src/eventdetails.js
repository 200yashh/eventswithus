import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';
const EventDetails = () => {
    const {id} = useParams();
    const{data,ispending} = useFetch('http://localhost:9000/events/'+id);
    const goToHome = useHistory();
    const deleteEvent = () =>{
        fetch('http://localhost:9000/events/'+data.id,{
            method:'DELETE'
        }).then(()=>{
            goToHome.push('/');
        })
    }

    return ( 
        <div className="event-details-page">
            {ispending && <div>pending ... </div>}
            {data &&
                <div className="event-data">
                    <h2>{data.title}</h2>
                    <p>{data.location}</p>
                    <button onClick={deleteEvent}>Delete</button>
                </div>
            }
        </div>
     );
}
 
export default EventDetails;