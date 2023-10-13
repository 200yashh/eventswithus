// import logo from './logo.svg';
import logo from './vegeta.jpg';
import './Home.css';
import { useState } from 'react';


const Home = () => {

    const [filter, setFilter] = useState('*'); // Initial filter set to show all Events

    const filterEvents = (e) => {
        const newFilter = e.target.dataset.filter;
        setFilter(newFilter);
    };

    return (
        <div className="container-fliud">

            <section className="event-contant">
                <div className="container py-5">
                    <div className="row py-5">

                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ucoming-events">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h2 className="text-center pt-5">Upcoming Events</h2>
                            <h4 className="text-center pb-5"> <small>You can choose to display featured</small></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <div className="filters text-center">
                                <a className={`btn filter-option ${filter === '*' ? 'active' : ''}`} data-filter="*" onClick={filterEvents}>
                                    All
                                </a>
                                <a className={`btn filter-option ${filter === 'business' ? 'active' : ''}`} data-filter="business" onClick={filterEvents}>
                                    Business
                                </a>
                                <a className={`btn filter-option ${filter === 'festival' ? 'active' : ''}`} data-filter="festival" onClick={filterEvents}>
                                    Festival
                                </a>
                                <a className={`btn filter-option ${filter === 'other' ? 'active' : ''}`} data-filter="other" onClick={filterEvents}>
                                    Other
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="list text-center">

                                <EventData name="business 1" classes="business" filter={filter} />
                                <EventData name="other 1" classes="other" filter={filter} />
                                <EventData name="business 2" classes="business" filter={filter} />
                                <EventData name="festival 1" classes="festival" filter={filter} />
                                <EventData name="other 2" classes="other" filter={filter} />
                                <EventData name="business 3" classes="business" filter={filter} />
                                <EventData name="Salamander" classes="festival business" filter={filter} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sponsor-supporters">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h2 className="text-center pt-5">Sponsor / Supporters</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 py-5">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={logo} height={200} alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={logo} height={200} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={logo} height={200} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="most-visited-places">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                    <h2 className="text-center pt-5">Most Visited Places</h2>
                    <h4 className="text-center pb-5"> <small>You can choose to display featured</small></h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 py-5">
                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="row">
                                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                   <img src={logo} className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card">
                                <div className="view overlay">
                                    <a href="#!">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={logo} height={200} alt="Second slide" />
                                    </div>
                                </div>
                                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}
function EventData({ name, classes, filter }) {
    const EventClasses = `Event ${classes} ${filter !== '*' && !classes.includes(filter) ? 'hidden' : ''}`;

    return <div className={EventClasses}>{name}</div>;
}


export default Home;