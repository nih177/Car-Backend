import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function NL() {
    return (
        <div id="content">
            <Menu />

            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="novatedlease-body" className="body-content">
                    <div className="row body-text">
                        <div className="eight columns">
                            <h1>What's a Novated Lease?</h1>
                            <p>
                                A Novated Lease is a three-way arrangement, between a financier, employer and the employee. The employee chooses the vehicle and the finance company 'novates' this agreement to the employer. The employer assumes responsibility for the monthly lease payments, and is deducted out of the employees gross salary (before tax). This car can be driven for both business and personal use; it offers great benefits to both the employee and the employer.</p>
                            <h2>
                                Major Benefits for the employer Novating a vehicle</h2>
                            <ul>
                                <li>
                                    <strong>Car Package - </strong>The main benefit being that employers are able to offer employees the extra incentive of a car in their remuneration/salary package</li>
                            </ul>
                            <h2>
                                Other benefits for the employer that a Novated Lease includes</h2>
                            <ul>
                                <li>
                                    <strong>Accounting - </strong>Removes the necessity of recording the car as an asset or liability in the business</li>
                                <li>
                                    <strong>Tax - </strong>Offers an income tax deduction for all payments made under the agreement, including lease rental payments</li>
                                <li>
                                    <strong>Management - </strong>Removes the need to manage a company car or fleet of vehicles</li>
                                <li>
                                    <strong>Flexibility - </strong>Removes the responsibility of making lease payments away from the employer as soon as the employee leaves their job</li>
                                <li>
                                    <strong>GST - </strong>Can offer employers, if registered for GST, the ability to claim an input tax credit on the GST paid on the lease, (there are exceptions to this - contact us for more details</li>
                            </ul>
                            <h2>
                                Benefits for the employee Novating a Lease</h2>
                            <ul>
                                <li>
                                    <strong>Choice - </strong>The main benefit for employees is that they can choose the car they want and gain tax savings through salary sacrifice arrangements, as the lease payments are taken out of their pre-tax income</li>
                                <li>
                                    <strong>Flexibility - </strong>Employees can use the vehicle for both work and private purposes</li>
                                <li>
                                    <strong>End of Term - </strong>Employees can decide to own the vehicle outright at the end of the lease term</li>
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
                                Need more Novated Lease information?</h2>
                            <p>
                                Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly pre-approved Enquire online and one of our consultants will call you straight back and they will walk you through the different options enabling you to tell us how you would like your loan structured<br></br>
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

export default NL;