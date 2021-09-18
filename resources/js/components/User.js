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

