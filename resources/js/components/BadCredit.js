import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function BadCredit() {
    return (
        <div id="content">
            <Menu />

            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="badcreditloan-body" className="body-content">
                    <div className="row body-text">
                        <div className="eight columns">
                            <h1>Had a 'Rough Patch'?</h1>
                            <h2>
                                Bad Credit Car Loans ; Second Chance Car Finance</h2>
                            <p>
                                Car loans and car finance are also available for people that don't have a perfect credit rating. We understand that in life things go well, and also can become difficult resulting in a 'Rough Patch'. Life can often throw us all a 'Curve Ball' - An unpaid power bill, or you may have previously been declared bankrupt. Perhaps you have been entered in to a Part 9 Agreement and are now discharged. Discharged, day 1 - Carloansales can still help you. We have finance lenders who can make getting you a new car very possible.</p>
                            <h2>
                                Bad Credit Car Loan Options</h2>
                            <h3>
                                Bad Credit Car Loans</h3>
                            <p>
                                Bad Credit car loans are becoming increasingly more available to Australians. There are many reasons for bad credit, including mismanagement and unforeseen circumstances. Perhaps you have an unpaid mobile phone bill or missed a few payments on your credit card? Or perhaps been entered in to a Part 9 arrangement or declared bankrupt? Once discharged, Carloansales can help you!</p>
                            <h3>
                                Sub-prime car loans</h3>
                            <p>
                                Sub-prime car loans are given to people with a poor credit history and who are unable to get car finance through normal lending avenues. Sub-prime financers are institutions that offer loans to buyers that have a bad credit history and do not fit the criteria for banks and other prime financiers.</p>
                            <h2>
                                Need more Bad Credit Car Loans information?</h2>
                            <p>
                                Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly pre-approved online! Still unsure of which option is best for you? Our Car Finance Consultants can organise a Car Loan in Adelaide, Car Loans Sydney, Car Loans Melbourne, Car Loans Perth, Car Loans Gold Coast and if you’d like to repayment guideline please use the Car Loan Calculator available on most pages on this website. Enquire online and one of our consultants will call you straight back.<br></br>
                                <br></br>
                                <br></br>
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

export default BadCredit;