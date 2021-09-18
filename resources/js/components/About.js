import React from "react";
import Head from "./Head";
import Footer from "./Footer";
function About() {
    return (
        <div>
            <Head />
            <div id="career-body" className="body-content">
                <div className="body-text">
                    <div id="home-body">
                        <div className="body-text">
                            <h2>About Us</h2>
                            Carloansales have been working within the Automotive sector in Melbourne Australia,
                            for more than 20 years. Backed with a wealth of knowledge and experience in both the
                            automotive and retail sectors our aim is to provide you a trouble free and enjoyable
                            car buying experience, saving you both time and money.
                            <h2>Car Finance Specialists</h2>
                            Carloansales are one of Australia's leading independent car finance brokers
                            and with good reason, we offer the best choice of products, a fantastic service and have
                            the knowledge and experience to be able to find the best car finance solution to suit your
                            needs. Finding the right car finance solution isn't easy, but we can help by not only
                            saving you time in finding the right deal, but also thousands of dollars compared to
                            dealer finance, so if you have found your car already from a dealer or even another
                            broker; but not happy with the finance package they are offering, now you have a choice!
                            <h2>Convenience</h2>
                            Our staff will compare all of the car finance options to find the best solution for you,
                            so you don't have worry.
                            <h2>Choice</h2>
                            We have access to the best choice of lenders, some of which are not available to the
                            general public or through other brokers.
                            <h2>No Waiting</h2>
                            Whilst in some circumstances we can process and settle 'Same Day' - Mostly we can complete
                            the whole payout process in as little as 24 hours from start to finish and better still, we
                            can pay your supplying dealer by Real Time funds transfer to speed the process even more.
                            <h2>Service</h2>
                            We have no call centres to fight through, just your own personal finance consultant to assist
                            you with every aspect of arranging your finance in a professional manor. Our Finance Consultants
                            can organise a Car Loan in Adelaide, Car Loans Sydney, Car Loans Melbourne, Car loans Perth, Car
                            Loans Gold Coast and if you'd like to find a repayment guideline please use the Car Loan Calculator
                            available on most pages on this website.<br></br>
                            <h2>Confidence</h2>
                            We offer an independent and unbiased service, providing you with the assurance needed that your car finance
                            is the best fit for your individual needs.
                            <h2>Where do I start?</h2>
                            <a href="carfinance_first.php" title="Get Pre Approval Now"><img src="/images/page-button.png"></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About;


if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}