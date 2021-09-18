import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function CHP() {
    return (
        <div id="content">
            <Menu />
            
            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="chp-body" className="body-content">
                    <div className="row body-text">
                        <div className="eight columns">
                            <h1>Commercial Hire Purchase (CHP)</h1>
                            <p>
                                Commercial Hire Purchase (CHP) can be a good way to finance your car. It is a contract that takes place between the buyer and the financer. The financer allows the buyer to have the right to use the car and in return the financer is paid regular monthly payments. Close to the end of term a 'balloon' payment is an option and can be made usually at a rate less or on par with the value of the car when it was bought. Until the final payment is made the financer retains the title deed to the car and then when all payments are clear the title is transferred to the buyer. The term does not need to end for you to make the payment in full. CHP is best suited for companies and small businesses or individuals using the car for their business as it does allow finance to be secured against the car purchase at a lower interest rate. Benefits of a commercial hire purchase include a flexible contract that can be anything between 2 to 5 years and a final instalment to be paid at the end of the contract rather than as a down payment when the car is bought. The interest rates remain fixed and any costs that will be incurred are known from the time the contract is signed. This car finance type is good for businesses as a tax deduction is available when the vehicle is used for business purposes, and customers registered for a GST can claim the tax in the vehicle price. All in all the CHP is best used for business solutions.</p>
                            <h2>
                                Features and benefits of a (CHP) Car Loan</h2>
                            <ul>
                                <li>
                                    Low upfront or NO monthly management fees</li>
                                <li>
                                    Finance products with NO Payout Penalties</li>
                                <li>
                                    <strong>On Road Costs - </strong>You can finance on-road costs, car registration fees and insurance in the loan contract</li>
                                <li>
                                    <strong>Loan Term - </strong>The term of the loan contract can be between 1 - 7 years (12-84 months)</li>
                                <li>
                                    <strong>Deposit - </strong>You can make a deposit if you wish, the benefit of this is that it will reduce your monthly payments and/or the term of the car loan contract or,</li>
                                <li>
                                    <strong>Balloon Payments - </strong>a lump sum payment at the end of the contract that settles the debt can be arranged for approved customers. This enables customers to pay a lower monthly instalment during the term of the agreement, and then pay a balloon at the end of the term.</li>
                                <li>
                                    <strong>Direct Debit - </strong>Loan repayments will be automatically debited from your nominated business account.</li>
                                <li>
                                    <strong>Protection - </strong>Protect your loan from unforseen circumstances, ask us how.</li>
                                <li>
                                    <strong>Gap Insurance and Motor Warranties - </strong>These important products can be added to your loan repayments.</li>
                                <li>
                                    <strong>Education - </strong>Carloan$ales will teach you about Car Finance</li>
                                <li>
                                    <strong>Support - </strong>Expert staff on hand whenever you require</li>
                                <li>
                                    <strong>Roadside - </strong>Free 12 month, 24 Hour Roadside Assist with your settled loan.</li>
                                <li>
                                    <strong>Servicing Australia - </strong>Our extensive panel of lenders can finance a car for you, whether you are buying Privately, at Auction or through a Dealer. Our finance consultants can organise a Car Loan for you whether you need a Car Loan in Melbourne, need a Car Loan in Sydney, a Car Loan in Brisbane or Car Finance on the Gold Coast, a Car Loan for Perth, as well as Car loans in Adelaide, Hobart, Canberra and Darwin.</li>
                            </ul>
                            <h2>
                                Who can benefit from Finance Lease and Commercial Finance Loans?</h2>
                            <p>
                                Any firm, partnership, company and professional or business people who want to acquire plant-equipment, motor vehicles, or similar goods used in the production of assessable income. Our Car Finance Consultants can organise a Car Loan in Adelaide, Car Loans Sydney, Car Loans Melbourne, Car Loans Perth, Car Loans Gold Coast and if you’d like to repayment guideline please use the Car Loan Calculator available on most pages on this website.</p>
                            <h2>
                                Need more 'CHP' Car Loan information?</h2>
                            <p>
                                Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly pre-approved Enquire online and one of our consultants will call you straight back and they will walk you through the different options enabling you to tell us how you would like your loan structured.<br></br>
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

export default CHP;