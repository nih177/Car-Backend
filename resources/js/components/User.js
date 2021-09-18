import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Head from './Head';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Career from './Career';
import Testimonial from './Testimonial';
import Site from './Site';
import FAQ from './FQA';
import Credit from './Credit';
import Blog from './Blogs';
import LowDoc from  './Low-Doc';
import Personal from './Personal';
import CarLease from './CarLease';
import Chattel from './Chattel';
import CHP from './CHP';
import NL from './NL';
import EF from './EF';
import Bike from './Bike';
import PersonalCar from './Personal-Car';
import Small from './Small';
import Truck from './Truck';
import Marine from './Marine';
import BadCredit from './BadCredit';
function User() {
    return (
        <div>
            {/* We can't render any components in router page */}
            <Router>
                <Switch>
                    {/* <a href="/home">Go to in9inyug</a> */}
                    
                    <Route exact path="/"  component={Home}></Route>
                    <Route exact path="/head"  component={Head}></Route>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact-us" component={Contact} />
                    <Route exact path="/career" component={Career} />
                    <Route exact path="/testimonials" component={Testimonial} />
                    <Route exact path="/site-map" component={Site} />
                    <Route exact path="/faq" component={FAQ} />
                    <Route exact path="/credit" component={Credit} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/low-doc-finance" component={LowDoc} />
                    <Route exact path="/personal-car-loans" component={Personal} />
                    <Route exact path="/car-lease" component={CarLease} />
                    <Route exact path="/chattel-mortgage" component={Chattel} />
                    <Route exact path="/commercial-hire-purchase" component={CHP} />
                    <Route exact path="/novated-lease" component={NL} />
                    <Route exact path="/equipment-finance" component={EF} />
                    <Route exact path="/bike-loans" component={Bike} />
                    <Route exact path="/personal-car-lease" component={PersonalCar} />
                    <Route exact path="/small-ticket-finance" component={Small} />
                    <Route exact path="/truck-finance" component={Truck} />
                    <Route exact path="/marine-loans-boat-finance" component={Marine} />
                    <Route exact path="/bad-credit-car-loan" component={BadCredit} />
                    {/* <Route path="about" component="About"/> */}
                </Switch>
            </Router>
            
        </div>
    );
}

export default User;

// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}

