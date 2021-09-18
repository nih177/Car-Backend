import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Small() {
    return (
        <div id="content">
            <Menu />

            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="stfl-body" className="body-content">
                    <div className="row body-text">
                        <div className="eight columns">
                            <h2>Small Ticket Finance and Loans</h2>
                            <h3>
                                What is small ticket finance?</h3>

                            Carloansales specialise is small ticket equipment finance. We can offer fast easy access to loans as little as $1000 which comes in handy when wanting to purchase any new or used equipment. Terms and conditions vary from lender to lender. Read more about Small Ticket Finance and Loans.
                            <h2>
                                Small Ticket Finance for Vendors</h2>
                            <h3>
                                Why use Carloansales?</h3>
                            <ul>
                                <li>
                                    <strong>Lo - Doc funding</strong> for equipment from $1k - $100 K</li>
                                <li>
                                    <strong>Credit Impaired</strong> clients considered</li>
                                <li>
                                    <strong>New business ventures</strong> considered</li>
                                <li>
                                    <strong>Non Property</strong> Owners Considered</li>
                                <li>
                                    <strong>No Financials</strong> required on selected products</li>
                                <li>
                                    <strong>Easy</strong> documentation &amp; <strong>Over 20 panel lenders</strong></li>
                            </ul>
                            <h2>
                                Who can benefit from 'Small Ticket' Loans?</h2>

                            Any firm, partnership, company and professional or business people who want to acquire plant-equipment, motor vehicles, or similar goods used in the production of assessable income. For example if it is a Car Loan you require - Our Car Finance Consultants can organise a Car Loan in Adelaide, Car Loans Sydney, Car Loans Melbourne, Car Loans Perth, Car Loans Gold Coast and if you’d like to repayment guideline please use the Car Loan Calculator available on most pages on this website.
                            <h2>
                                Need more 'Small Ticket' information?</h2>

                            Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly <a href="carfinance_first.php">pre-approved</a> Enquire online and one of our consultants will call you straight back and they will walk you through the different options enabling you to tell us how you would like your loan structured. Read more about Small Ticket Finance for Vendors. <a href="carfinance_first.php" title="Get Pre Approval Now"><img src="/images/page-button.png" /></a>
                        </div>
                        <div className="four end columns">

                            <div className="loan-calculatorbg">

                                <h1>CAR LOAN <span className="blue">CALCULATOR</span></h1>

                                <div className="box2-wrapper">

                                    <ul>

                                        <li>

                                            <span className="slider-label">Amount</span>

                                            <span className="slider-value">$ 0</span>

                                            <div id="amount-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{ left: "0%;" }}></a></div>

                                        </li>

                                        <li>

                                            <span className="slider-label">Residual: 0 %</span>

                                            <span id="residual-slider-amount" className="slider-value">($ 0)</span>

                                            <div id="residual-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{ left: "0%;" }}></a></div>

                                        </li>

                                        <li>

                                            <span className="slider-label">Interest</span>

                                            <span className="slider-value">0 %</span>

                                            <div id="interest-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{ left: "0%;" }}></a></div>

                                        </li>

                                        <li>

                                            <span className="slider-label">Term of lease</span>

                                            <span className="slider-value">1 Year(s)</span>

                                            <div id="term-of-lease-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{ left: "0%;" }}></a></div>

                                        </li>

                                    </ul>

                                    <div className="box2-repayment">Monthly Repayment: $<span id="monthly-repayment">0.00</span></div>

                                    <input type="hidden" id="amount1" name="amttxt" />

                                    <input type="hidden" id="resi" name="resitxt" />

                                    <input type="hidden" id="intrst" name="intrsttxt" />

                                    <input type="hidden" id="tim" name="timtxt" />

                                    <input type="hidden" id="wrate" name="wratetxt" />

                                    <input type="image" id="submit-loan-calculator" name="preapp" src="images/index/getaquote-grey.png" />

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </form>

            <Footer />
        </div>
    );
}

export default Small;