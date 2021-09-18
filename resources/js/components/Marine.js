import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Marine() {
    return (
        <div id="content">
            <Menu />

            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="marineloan-body" className="body-content">
                    <div className="row body-text">
                        <div className="eight columns">
                            <h1>Marine Loans</h1>
                            <p>
                                Securing a good cheap boat loans package requires a thorough understanding of how things work in marine financing and this is not always common knowledge. This is where the need for a reputable boat loans specialist arises. Carloansales is an experienced Boat Loans Brokers with a highly specialized team of boat finance staff, capable of arranging the most lucrative and tailor made boat loan package that is just right for your marine financing needs. With us onboard, you need't worry about how you are going to pay for your new boat/s. All you have to do is think about which boat you want to purchase and leave the rest to us!</p>
                            <h2>
                                Why Carloansales Boat Finance?</h2>
                            <p>
                                Carloansales has been in the business of providing its clients with a whole range of boat finance packages, specifically hand picked from a choice of some of the best boat loan lenders. - First hand experience in this industry equips us with valuable information about how things work best in this business. This knowledge helps us to provide our customers with a service that is second to none, on time each time. - We take away the uncertainties and remove the complexities that inadvertently accompany marine finance. Our trained and well experienced boat loan staff will take over the complete task of arranging for your simple and hassle-free boat purchase. What's more, we can help with the other aspects of encumbrances and title checks as well, making sure that your boat sales purchase experience is easy, convenient and quick.</p>
                            <h2>
                                Features and benefits of a Marine Loan</h2>
                            <p>
                                You can finance added costs, and insurance in the loan contract</p>
                            <ul>
                                <li>
                                    <strong>Loan Term - </strong>The term of the loan contract can be between 2 - 7 years (24-84 months)</li>
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
                            </ul>
                            <h2>
                                Need more Marine Loan information?</h2>
                            <p>
                                Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly <a href="carfinance_first.php">pre-approved</a> Enquire online and one of our consultants will call you straight back and they will walk you through the different options enabling you to tell us how you would like your loan structured.<br></br>
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

export default Marine;