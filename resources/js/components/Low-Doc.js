import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

function LowDoc() {
    return (
        <div id="content">
            <Menu />
            
            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="lowdocfin-body" class="body-content">
                    <div class="row body-text">
                        <div class="eight columns">
                            <h1>
                                Low Doc Finance</h1>
                            <p>
                                Low Doc car finance is a flexible loan solution for self employed individuals or companies unable to disclose or verify their income details using pay slips or tax returns. In most instances only an income declaration from the borrower is required.</p>
                            <h2>
                                Eligibility</h2>
                            <ul>
                                <li>
                                    Passenger cars or commercial vehicles up to three (3) tonnes</li>
                                <li>
                                    Maximum loan amount of $100,000</li>
                                <li>
                                    New and Used vehicles up to four (4) years old</li>
                                <li>
                                    ABN held and GST Registered for a minimum of 12 months</li>
                                <li>
                                    Verified property owner (Min. 20% cash deposit option available for non-property owners)</li>
                                <li>
                                    Satisfactory CRAA credit report</li>
                                <li>
                                    Standard rates, terms and residual/balloon options apply</li>
                            </ul>
                            <h2>
                                Features and benefits of a Lo Doc Car Loan</h2>
                            <ul>
                                <li>
                                    <strong>Financial Non Disclosure and Fast Settlement</strong></li>
                                <li>
                                    Low upfront or NO monthly management fees</li>
                                <li>
                                    Some Finance products with NO Payout Penalties</li>
                                <li>
                                    <strong>On Road Costs - </strong>You can finance on-road costs, car registration fees and insurance in the loan contract</li>
                                <li>
                                    <strong>Loan Term - </strong>The term of the loan contract can be between 1 - 5 years (12-60 months)</li>
                                <li>
                                    <strong>Deposit - </strong>You can make a deposit if you wish, the benefit of this is that it will reduce your monthly payments and/or the term of the car loan contract or,</li>
                                <li>
                                    <strong>Balloon Payments - </strong>a lump sum payment at the end of the contract that settles the debt can be arranged for approved customers. This enables customers to pay a lower monthly installment during the term of the agreement, and then pay a balloon at the end of the term.</li>
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
                                    <strong>Servicing Australia - </strong>Our extensive panel of lenders can finance a car for you, whether you are buying Privately, at Auction or through a Dealer. Our finance consultants can organise a Car Loan for you whether you need a Car Loan in Melbourne, need a Car Loan in Sydney, a Car Loan in Brisbane or Car Finance on the Gold Coast, a Car Loan for Perth, as well as Car loans in Adelaide, Hobart, Canberra and Darwin.</li>
                            </ul>
                            <h2>
                                Who can benefit from Finance Lease and Commercial Finance Loans?</h2>
                            <p>
                                Any firm, partnership, company and professional or business people who want to acquire plant-equipment, motor vehicles, or similar goods used in the production of assessable income. Our Car Finance Consultants can organise a Car Loan in Adelaide, Car Loans Sydney, Car Loans Melbourne, Car Loans Perth, Car Loans Gold Coast and if you’d like to repayment guideline please use the Car Loan Calculator available on most pages on this website.</p>
                            <h2>
                                Need more 'Lo Doc' Car Loan information?</h2>
                            <p>
                                Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly pre-approved Enquire online and one of our consultants will call you straight back and they will walk you through the different options enabling you to tell us how you would like your loan structured.<br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a href="carfinance_first.php" title="Get Pre Approval Now"><img src="/images/page-button.png" /></a>
                            </p>
                        </div>		<div class="four end columns">
                            <div className="loan-calculatorbg">
                                <h1>CAR LOAN <span className="blue">CALCULATOR</span></h1>
                                <div className="box2-wrapper">
                                    <ul>
                                        <li>
                                            <span className="slider-label">Amount</span>
                                            <span className="slider-value"> $  0</span>
                                            <div id="amount-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                                        </li>
                                        <li>
                                            <span className="slider-label">Residual: 0 %</span>
                                            <span id="residual-slider-amount" className="slider-value">($ 0)</span>
                                            <div id="residual-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                                        </li>
                                        <li>
                                            <span className="slider-label">Interest</span>
                                            <span className="slider-value">0 %</span>
                                            <div id="interest-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                                        </li>
                                        <li>
                                            <span className="slider-label">Term of lease</span>
                                            <span className="slider-value">1 Year(s)</span>
                                            <div id="term-of-lease-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                                        </li>
                                    </ul>
                                    <div className="box2-repayment">Monthly Repayment: $<span id="monthly-repayment">0.00</span></div>
                                    <input type="hidden" id="amount1" name="amttxt"></input>
                                    <input type="hidden" id="resi" name="resitxt"></input>
                                    <input type="hidden" id="intrst" name="intrsttxt"></input>
                                    <input type="hidden" id="tim" name="timtxt"></input>
                                    <input type="hidden" id="wrate" name="wratetxt"></input>
                                    <input type="image" id="submit-loan-calculator" name="preapp" src="/images/index/getaquote-grey.png"></input>
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

export default LowDoc;