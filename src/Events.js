import Eventlist from './eventslist';
import useFetch from './useFetch';

const Events = () => {

    const { data: events, ispending } = useFetch('http://localhost:9000/events');

    return (
        <div className="home-event py-5">
            <div className="container">
                
                <div className="row py-5">
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row py-5">
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row py-5">
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div class="card">
                            <div class="view overlay">
                                <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                                    alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div class="card-body">
                                <h4 class="card-title">Events</h4>
                                <p class="card-text">Some quick example text to build on the Events and make up the bulk of the card's
                                    content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
}

export default Events;