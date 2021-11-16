import React, { useState } from 'react';
// import "./fountations.css";
import "./style.css";
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
import LowDoc from './Low-Doc';
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
import Cities from './Cities';
import NewDesign from './new';
import Form from '../pages/form';
import Form2 from '../pages/form2';
import MainPage from '../pages/main-page';
import Form3 from '../pages/form3';
import FinalPage from '../pages/final-page';



function User() {
    // Always remember to keep const inside User() function
    // --------Main page--------
    const [amount, setAmount] = useState('');
    const [residual, setResidual] = useState('');
    const [repayment, setRepayment] = useState('')
    // --------Page-2--------
    const [loanAmount, setLoanAmount] = useState();
    const [term, setTerm] = useState();
    // --------Page-2--------
    const [vehicleMake, setVehicleMake] = useState('Vehicle Make 1');
    const [vehicleModel, setVehicleModel] = useState('Vehicle Model 1');
    const [buildYear, setBuildYear] = useState('');
    const [isVehicle, setIsVehicle] = useState('');
    const [supplier, setSupplier] = useState('');
    // --------Page-3--------
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [occupation, setOccupation] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [postcode, setPostcode] = useState('');
    const [income, setIncome] = useState('');
    const [perDuration, setPerDuration] = useState('week');
    // --------Final Page--------
    const [repay, setRepay] = useState('');

    return (
        <div>
            {/* We can't render any components in router page */}
            <Router>
                <Switch>
                    {/* <a href="/home">Go to in9inyug</a> */}

                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/head" component={Head}></Route>
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
                    <Route exact path="/carloan-city-view" component={Cities} />
                    <Route exact path="/new" component={NewDesign} />
                    <Route exact path="/main-page" >
                        <MainPage
                            amount={amount}
                            residual={residual}
                            repayment={repayment}
                            setAmount = {setAmount}
                            setResidual = {setResidual}
                            setRepayment = {setRepayment}
                        />
                    </Route>
                    <Route exact path="/form" >
                        <Form
                            loanAmount={loanAmount}
                            term={term}
                            setTerm={setTerm}
                            setLoanAmount={setLoanAmount}
                        />
                    </Route>
                    <Route exact path="/form2" >
                        <Form2
                            vehicleMake={vehicleMake}
                            setVehicleMake={setVehicleMake}
                            vehicleModel={vehicleModel}
                            setVehicleModel={setVehicleModel}
                            buildYear={buildYear}
                            setBuildYear={setBuildYear}
                            isVehicle={isVehicle}
                            setIsVehicle={setIsVehicle}
                            supplier={supplier}
                            setSupplier={setSupplier}
                            loanAmount={loanAmount}
                        />
                    </Route>
                    <Route exact path="/form3" >
                        <Form3
                            // Form 3
                            fullName={fullName}
                            mobile={mobile}
                            occupation={occupation}
                            telephone={telephone}
                            email={email}
                            postcode={postcode}
                            income={income}
                            perDuration={perDuration}
                            setFullName={setFullName}
                            setMobile={setMobile}
                            setOccupation={setOccupation}
                            setTelephone={setTelephone}
                            setEmail={setEmail}
                            setPostcode={setPostcode}
                            setIncome={setIncome}
                            setPerDuration={setPerDuration}
                        />
                    </Route>
                    <Route exact path="/final-page" >
                        <FinalPage
                            // Form 1
                            loanAmount={loanAmount}
                            term={term}
                            setTerm={setTerm}
                            setLoanAmount={setLoanAmount}
                            // Form 2
                            vehicleMake={vehicleMake}
                            setVehicleMake={setVehicleMake}
                            vehicleModel={vehicleModel}
                            setVehicleModel={setVehicleModel}
                            buildYear={buildYear}
                            setBuildYear={setBuildYear}
                            isVehicle={isVehicle}
                            setIsVehicle={setIsVehicle}
                            supplier={supplier}
                            setSupplier={setSupplier}
                            // Form 3
                            fullName={fullName}
                            mobile={mobile}
                            occupation={occupation}
                            telephone={telephone}
                            email={email}
                            postcode={postcode}
                            income={income}
                            perDuration={perDuration}
                            setFullName={setFullName}
                            setMobile={setMobile}
                            setOccupation={setOccupation}
                            setTelephone={setTelephone}
                            setEmail={setEmail}
                            setPostcode={setPostcode}
                            setIncome={setIncome}
                            setPerDuration={setPerDuration}
                            // Final Page
                            setTerm={setTerm}
                            setLoanAmount={setLoanAmount}
                            repay={repay}
                            setRepay={setRepay}
                            // Main Page
                            amount={amount}
                            residual={residual}
                            repayment={repayment}
                            setAmount = {setAmount}
                            setResidual = {setResidual}
                            setRepayment = {setRepayment}
                        />
                    </Route>
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

