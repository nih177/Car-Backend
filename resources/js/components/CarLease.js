import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function CarLease() {
    return (
        <div id="content">
            <Menu />

            <form method="post" action="carfinance_first.php">
                <input type="hidden" id="submitted-form" name="submitted-form" />
                <div id="carlease-body" className="body-content">
                    <div className="row body-text">
                        <div className="eight columns">
                            <h1>Commercial Car Lease</h1>
                            <p>
                                With a Finance Lease the financier purchases the car required by the customer and then leases it to the customer. The customer pays a rental to the financier to use the car. At the end of the agreed rental period the customer can return the car which will be sold at auction or the financier may offer to sell the car to the customer.</p>
                            <h2>
                                Features and Benefits of a Commercial Car Lease</h2>
                            <ul>
                                <li>
                                    <strong>No capital outlay - </strong>100% finance is available for approved customers. Fees, Government Charges, Insurance, Registration and On-Road costs can also be financed into the loan for approved customers. Customers may wish to provide a deposit or be required to provide a deposit for finance approval.</li>
                                <li>
                                    <strong>Tax deductible - </strong>generally the rental is deductible to the extent the asset is used in your business. Managing Cash Flow - rental payments can be suited to your anticipated cash flow.</li>
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
                                Goods and Services Tax (GST)</h2>
                            <ul>
                                <li>
                                    Under a Finance Lease, the financier is the purchaser and owner of the asset and hence is entitled to claim the Input tax Credit (ITC). The amount financed on the car will be net of the ITC claimed by the financier. GST is payable on the rental payments over the life of the contract and the residual amount.</li>
                                <li>
                                    GST is paid on all fees and charges.</li>
                                <li>
                                    If the customer holds an ABN they may be able to claim any GST as an Input tax Credit (ITC) each month or quarter.</li>
                            </ul>
                            <h2>
                                Who can benefit from Finance Lease and Commercial Finance Loans?</h2>
                            <p>
                                Any firm, partnership, company and professional or business people who want to acquire plant-equipment, motor vehicles, or similar goods used in the production of assessable income. Our Car Finance Consultants can organise a car loan in Adelaide, Car Loans Sydney, Car Loans Melbourne, Car Loans Perth, Car Loans Gold Coast and if you’d like to repayment guideline please use the Car Loan Calculator available on most pages on this website</p>
                            <h2>
                                Need more 'Car Lease' Loan information?</h2>
                            <p>
                                Fill in the online form below to enquire or if you are ready to be pre-approved, click here and get instantly pre-approved Enquire online and one of our consultants will call you straight back and they will walk you through the different options enabling you to tell us how you would like your loan structured<br></br>
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

export default CarLease;