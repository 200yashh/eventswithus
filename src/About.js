import './About.css';
import logo from './vegeta.jpg'

const About = () => {
    return (

        <div className="about-page col-md-12">
            <div className="about-first text-center">
                <h2>ABOUT US – EVENTS WITH US</h2>
                <h5><small>Home About Us – Events With Us</small></h5>
            </div>
            <div className="container py-5">
                <div className="row py-3">

                    <div className="col-6">
                        <h2>Welcome to Events With Us, your one stop shop for your ticketing system,</h2>
                        <h5>Empowering your events so you can grow...</h5>
                        <p>Events with Us was founded by a group of fans that enjoy live acts and events and believe that nothing beats being there. However, we are also technologists. We’d always questioned why the shows were so good… but the ticketing experience was so bad. So we decided to take action. We founded EWU to apply powerful cutting-edge technology to event tickets, resulting in the greatest possible experience for both vendors and audiences before, during, and after the event.</p>
                    </div>

                    <div className="col-6">
                        <img className='img-fluid' src={logo} alt="..." />
                    </div>

                </div>
                <div className="row py-3" >

                    <div className="col-6">
                        <img className='img-fluid' src={logo} alt="..." />
                    </div>

                    <div className="col-6">
                        <p>That includes providing a pleasant and easy user experience that takes the effort out of buying a ticket, assists purchasers in finding and experiencing more of the events they love, and creates a space where both the people who put on the acts and the people who come to see them can receive what they need.</p>
                        <p>EWU believes in providing the venue with the tools it needs to act on real-time data, ensure seamless organizational efficiency, and provide a simple customer journey.</p>
                        <p>EWU believes in exceeding your goals by providing tools, access to content, and solutions, as well as working with you rather than against you.</p>
                        <p>Providing the ticket purchasing experience for multiple – teams, arenas, theatres, clubs, and colleges across Australia – in order to maximize the value of all their events and create joy for fans.</p>
                    </div>
                </div>

                <div className="row py-3 our-team">
                    <h2 className='py-2'>Our Team</h2>
                    <h5 className='py-2'><small>Events With Us is a cutting-edge event management and growth platform that assists creators and entrepreneurs in reaching their full potential.</small></h5>
                    <p>At Events With Us (Core Techno Pty Ltd), we are a dynamic and energetic team of IT professionals who place very high regard on using problem-solving skills, ingenuity, and years of experience to help our clients achieve their results. We’ve been reinventing the meaning of digital marketing, branding or rather, advertising in a digital era since 2013. We started our journey in India with a small setup and now have expanded in multiple countries including India, Australia, and Canada. With over 9 years of cumulative experience at the heart of the organization, we enable our clients to grow and meet their business objectives.</p>
                </div>
            </div>
        </div>
    );
}

export default About;