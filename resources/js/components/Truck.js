import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Truck() {
    return (
        <div id="content">
            <Menu />

            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="lowdocfin-body" className="body-content">
                    <div className="row body-text">
                        <div className="eight columns">
                            <h1>Truck Finance - Sale and Leaseback</h1>
                            <h3>
                                What is a Sale and Leaseback?</h3>
                            <p>
                                In a changing business environment a leasing arrangement can free up the valuable capital locked up in your fleet, allowing you to invest in your core businesss. This how sale and leaseback can help your business.</p>
                            <h2>
                                How does a 'Sale and Leaseback' work?</h2>
                            <p>
                                1. We can arrange payment in cash for your fleet. Market vehicle valuations will be based on recognized industry guidelines or the written down value.</p>
                            <p>
                                2. The vehicles will then be leased back to you under an operating lease agreement, passing over the ownership and residual value risk of the fleet to the lender.</p>
                            <h2>
                                Sale and leaseback benefits to business</h2>
                            <ul>
                                <li>
                                    Access your working capital</li>
                                <li>
                                    You can switch your whole fleet</li>
                                <li>
                                    Remove vehicles from your balance sheet</li>
                                <li>
                                    One easy monthly payment</li>
                                <li>
                                    Managed fleet vehicle maintenance</li>
                                <li>
                                    Eliminates your residual value risk</li>
                                <li>
                                    Simple application</li>
                                <li>
                                    Access discounts through our purchasing power</li>
                                <li>
                                    Reduce administration</li>
                                <li>
                                    <strong>Servicing Australia</strong> - Our extensive panel of lenders can finance a car for you, whether you are buying Privately, at Auction or through a Dealer. Our finance consultants can organise a Car Loan for you whether you need a Car Loan in Melbourne, need a Car Loan in Sydney, a Car Loan in Brisbane or Car Finance on the Gold Coast, a Car Loan for Perth, as well as Car loans in Adelaide, Hobart, Canberra and Darwin.</li>
                            </ul>
                            <h2>
                                Who can benefit from Sale and Lease Back Finance Loans?</h2>
                            <p>
                                Any firm, partnership, company and professional or business people who want to acquire plant-equipment, motor vehicles, or similar goods used in the production of assessable income. For example if it is a Car Loan you require - Our Car Finance Consultants can organise a Car Loan in Adelaide, Car Loans Sydney, Car Loans Melbourne, Car Loans Perth, Car Loans Gold Coast and if you’d like to repayment guideline please use the Car Loan Calculator available on most pages on this website.</p>
                            <h2>
                                Need more 'Sale and Lease Back' information?</h2>
                            <p>
                                Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly <a href="carfinance_first.php">pre-approved</a> Enquire online and one of our consultants will call you straight back and they will walk you through the different options enabling you to tell us how you would like your loan structured<br></br>
                                <br></br>
                                <a href="carfinance_first.php" title="Get Pre Approval Now"><img src="/images/page-button.png" /></a></p>
                        </div>		<div className="four end columns">
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

export default Truck;