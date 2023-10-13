import { useState } from "react";
import {useHistory} from 'react-router-dom';
import "./Create.css";


const Create = () => {
    const [eventTitle,setEventTitle] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const goToHome = useHistory();
    const HandleSubmit = (e)=>{
        e.preventDefault();
        const addEvent = {title : eventTitle,location : eventLocation};
        fetch('http://localhost:9000/events',{            
            method:'Post',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify(addEvent)
        }).then(() =>{
            // console.log("New Event Added !!!");
            goToHome.push('/events');
        })
    }

    return ( 
        <div className="create-page col-md-12">
        <div className="create-first text-center">
            <h2>HOW IT WORK</h2>
            <h5><small>Home - How It Work</small></h5>
        </div>

        <div className="row py-5">
            <div className="col-2"></div>
            <div className="col-8">
                <h3 className="text-center">HOW IT WORKS</h3>
                <p className="">Simply leave us an enquiry on our contact us page and one of our team members will get in touch with you and will take care of your requirements. Alternatively, you can call us on 1300 024 365 and we can help you from there.</p>
                <p><b><u>The steps that we follow are as under:</u></b></p>
            </div>
        </div>

        <div className="row py-3">
            <div className="col-2"></div>
            <div className="col-8">
                <h4 className="text-left">1) Register an Account</h4>
               <ul>
                <li>We create a vendor/organizer account on our site from which the vendor/organizer can host and manage the events along with the tickets that they would like to sell.</li>
                <li>We will also share an agreement which has all the details about us and our services, which will be opted in the next step</li>
               </ul>
            </div>
        </div>

        <div className="row py-3">
            <div className="col-2"></div>
            <div className="col-8">
                <h4 className="text-left">1) Register an Account</h4>
               <ul>
                <li>We create a vendor/organizer account on our site from which the vendor/organizer can host and manage the events along with the tickets that they would like to sell.</li>
                <li>We will also share an agreement which has all the details about us and our services, which will be opted in the next step</li>
               </ul>
            </div>
        </div>

        <div className="row py-3">
            <div className="col-2"></div>
            <div className="col-8">
                <h4 className="text-left">1) Register an Account</h4>
               <ul>
                <li>We create a vendor/organizer account on our site from which the vendor/organizer can host and manage the events along with the tickets that they would like to sell.</li>
                <li>We will also share an agreement which has all the details about us and our services, which will be opted in the next step</li>
               </ul>
            </div>
        </div>

        <div className="row py-3">
            <div className="col-2"></div>
            <div className="col-8">
                <h4 className="text-left">1) Register an Account</h4>
               <ul>
                <li>We create a vendor/organizer account on our site from which the vendor/organizer can host and manage the events along with the tickets that they would like to sell.</li>
                <li>We will also share an agreement which has all the details about us and our services, which will be opted in the next step</li>
               </ul>
            </div>
        </div>

        <div className="row py-3">
            <div className="col-2"></div>
            <div className="col-8">
                <h4 className="text-left">1) Register an Account</h4>
               <ul>
                <li>We create a vendor/organizer account on our site from which the vendor/organizer can host and manage the events along with the tickets that they would like to sell.</li>
                <li>We will also share an agreement which has all the details about us and our services, which will be opted in the next step</li>
               </ul>
            </div>
        </div>


        {/* <div className="create-event">
            <h2>Add Event</h2>
            <br /><br />
            <div className="save-form">

            <form onSubmit={HandleSubmit}>
                <label htmlFor="title">Event Title</label><br />
                <input type="text" name="title" id="title" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required/><br />
                <label htmlFor="location">Event Location</label><br />
                <input type="text" name="location" id="location" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} required /><br />
                <button className="btn btn-success">Save</button>
            </form>
            {/* <h2>{eventTitle}</h2>
            <h2>{eventLocation}</h2> 
            
            </div>
        </div> */}
        </div>
     );
}
 
export default Create;