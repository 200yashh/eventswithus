const Contact = () => {
    return ( 
        <div className="about-page col-md-12">
            <div className="about-first text-center">
                <h2>CONTACT</h2>
                <h5><small>Home {' > '} Contact Us</small></h5>
            </div>
            <div className="container py-5">
                <div className="row py-3">

                    <div className="col-6">
                        <h3>Contact Info</h3>
                        <p>It’s all about the humans behind a brand and those experiencing it, we’re right there. In the middle.</p>                        
                        <ul className="list-group">
                            <li className="list-group-item">1300 024 365</li>
                            <li className="list-group-item">ewu@coretechno.com.au</li>
                            <li className="list-group-item">coretechno.com.au</li>
                            <li className="list-group-item">Parafield, South Australia 5106</li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <div className="form">
                        <h3>Get In Touch</h3>
                        
                        <form action="#">
                        
                        <div className="form-group py-2">
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>

                        <div className="form-group py-2">
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Email" />
                        </div>

                        <div className="form-group py-2">
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Contact" />
                        </div>
                        <div className="form-group py-2">
                            <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Massage"></textarea><br />
                        </div>
                            <button className="btn btn-primary">Send Massage</button><br />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;