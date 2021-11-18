import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NewDesign from '../components/new';
import AllVehicles from '../components/all-vehicles';
import TestimonialSvg from '../components/testimonial-svg';

export default function MainPage(props) {
    const history = useHistory();
    function submitForm(e) {
        e.preventDefault();
        var validated = 1;
        var a = document.getElementById('amount').innerHTML;
        var r = document.getElementById('residual').innerHTML;
        var m = document.getElementById('monthly-repayment').innerHTML;
        console.log(a)
        console.log(r)
        console.log(m)
        props.setAmount(a)
        props.setResidual(r)
        props.setRepayment(m)
        console.log(props.amount)
        console.log(props.residual)
        console.log(props.repayment)
        history.push("/form");
    }
    function pcl() {
        window.location.href = '/personal-car-lease';
    }
    return (
        <ReactBootstrap.Row className="">
            <ReactBootstrap.Row className="h100">
                <ReactBootstrap.Row className="sub-heading-text">
                    <ReactBootstrap.Col md={3} className="-ml10">
                        <NewDesign />
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={2} className="mxw11">
                        <span className="mt4 center"><a className="mt15 align-middle" href="/about" >About</a></span>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={2} className="mxw11">
                        <span className="mt4 center"><a className="mt15 align-middle" href="/about" >Products</a></span>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={2} className="mxw11">
                        <span className="mt4 center"><a className="mt15 align-middle" href="/form" >Get Pre-Approval</a></span>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={2} className="mxw11">
                        <span className="mt4 center"><a className="mt15 align-middle" href="/faq" >FAQs</a></span>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={2} className="mxw11">
                        <span className="mt4 center"><a className="mt15 align-middle" href="/contact-us" >Contact</a></span>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col md={6} className="pl85">
                        <svg className="mt234" xmlns="http://www.w3.org/2000/svg" width="500" height="69" viewBox="0 0 500 69">
                            <text id="Finance_as_low_as_2.99_TAP_conditions_apply" data-name="Finance as low as 2.99%
                        *TAP conditions apply" transform="translate(0 37)" fill="#3c3c3c" font-size="46" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">Finance as low as 2.99%</tspan><tspan font-size="16"><tspan x="0" y="27">*TAP conditions apply</tspan></tspan></text>
                        </svg>
                        <br />
                        <button className="bg-blue big-button-text btn mt15"><a className="text-decoration-none color-white" href='/form'>Get approval now!</a></button>
                    </ReactBootstrap.Col>
                    <ReactBootstrap.Col md={6} className="mt70">
                        <img src='/images/women-car.png' alt="women with car" />
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="mt150">
                <svg xmlns="http://www.w3.org/2000/svg" width="364" height="65" viewBox="0 0 364 65">
                    <text id="_1_min_pre_approval_loans" data-name="1 min pre approval loans" transform="translate(6 26)" fill="#4d4acf" font-size="32" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">1 min</tspan><tspan y="0" fill="#7a79a5"> </tspan><tspan y="0" fill="#3c3c3c">pre approval loans</tspan></text>
                    <text id="fast_approvals_fixed_repayments_low_car_loan_rates_" data-name="fast approvals, fixed repayments, low car loan rates!" transform="translate(0 61)" fill="#666" font-size="16" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">fast approvals, fixed repayments, low car loan rates!</tspan></text>
                </svg>
                <div className="home-box2" id="car-loan-cal">
                    <div className="loan-calculatorbg mx-auto">
                        <span className="big-button-text d-inline ml62 color-black car-loan-calculator-title">CAR LOANCALCULATOR</span>
                        <div className="box2-wrapper">
                            <ul>
                                <li>
                                    <span className="slider-label">Amount</span>
                                    <span id='amount' className="slider-value"> $  0</span>
                                    {/* <input type="range" onChange={e=>{console.log(e.target)}}></input> */}
                                    <div id="amount-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                        <a className="ui-slider-handle ui-state-default ui-corner-all" href="#"><img src="/images/car.svg" /></a>
                                    </div>
                                </li>
                                <li>
                                    Residual:<span id="residual" className="slider-label"> 0 %</span>
                                    <span id="residual-slider-amount" className="slider-value">($ 0)</span>
                                    <div id="residual-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                        <a className="ui-slider-handle ui-state-default ui-corner-all" href="#"><img src="/images/car.svg" /></a>
                                    </div>
                                </li>
                                <li>
                                    <span className="slider-label">Interest</span>
                                    <span className="slider-value">0 %</span>
                                    <div id="interest-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                        <a className="ui-slider-handle ui-state-default ui-corner-all" href="#"><img src="/images/car.svg" /></a>
                                    </div>
                                </li>
                                <li>
                                    <span className="slider-label">Term of lease</span>
                                    <span className="slider-value">1 Year(s)</span>
                                    <div id="term-of-lease-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                        <a className="ui-slider-handle ui-state-default ui-corner-all" href="#"><img src="/images/car.svg" /></a>
                                    </div>
                                </li>
                            </ul>
                            <div className="box2-repayment">Monthly Repayment: $<span id="monthly-repayment">0.00</span></div>
                            <input type="hidden" id="amount1" name="amttxt"></input>
                            <input type="hidden" id="resi" name="resitxt"></input>
                            <input type="hidden" id="intrst" name="intrsttxt"></input>
                            <input type="hidden" id="tim" name="timtxt"></input>
                            <input type="hidden" id="wrate" name="wratetxt"></input>
                            <button onClick={submitForm} className="mx-auto bg-blue big-button-text btn d-flex">Get a quote</button>
                            {/* <input type="image" id="submit-loan-calculator" name="preapp" src="/images/index/getaquote-grey.png"></input> */}
                        </div>

                    </div>
                </div>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="mt100">
                <AllVehicles />
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="mt100 ts">
                <TestimonialSvg />
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="mt100">
                <svg xmlns="http://www.w3.org/2000/svg" width="566" height="26" viewBox="0 0 566 26">
                    <text id="Our_staff_are_there_to_help_you_every_step_of_the_way." data-name="Our staff are there to help you every step of the way." transform="translate(283 19)" font-size="24" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="-282.228" y="0">Our staff are there to help you every step of the way.</tspan></text>
                </svg>
                <br />
                <button className="mx-auto bg-blue big-button-text btn w19 text-center mt15">Speak to an expert</button>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="mt100 pl0 pr0">
                {/* <img className="pl0 pr0" src="/images/footersvg.png" alt="Footer" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="1366" height="484" viewBox="0 0 1366 484">
                    <g id="Group_1" data-name="Group 1" transform="translate(0 -2503)">
                        <rect id="Rectangle_54" data-name="Rectangle 54" width="1366" height="484" transform="translate(0 2503)" fill="#565656" />
                        <g id="Component_2_1" data-name="Component 2 – 1" transform="translate(139 2603)">
                            <text id="Car_Loan_Sales" data-name="Car Loan Sales" transform="translate(0 13)" fill="#fff" font-size="16" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">Car Loan Sales</tspan></text>
                            <text id="ABN:_99_033_791_789" data-name="ABN: 99 033 791 789" transform="translate(0 45)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">ABN: 99 033 791 789</tspan></text>
                            <text id="AFS_License:_336343" data-name="AFS License: 336343" transform="translate(0 76)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">AFS License: 336343</tspan></text>
                            <text id="Australian_Credit_License:_393424" data-name="Australian Credit License: 393424" transform="translate(0 107)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Australian Credit License: 393424</tspan></text>
                            <text id="COSL_MN:_M0005987" data-name="COSL MN: M0005987" transform="translate(0 138)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">COSL MN: M0005987</tspan></text>
                            <text id="FBAA_MN:_M-324989" data-name="FBAA MN: M-324989" transform="translate(0 169)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">FBAA MN: M-324989</tspan></text>
                            <text id="Credit_Guide" data-name="Credit Guide" transform="translate(0 200)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Credit Guide</tspan></text>
                        </g>
                        <text id="Products" transform="translate(469 2616)" fill="#fff" font-size="16" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">Products</tspan></text>
                        <a className="" href="/personal-car-lease"><text className="cursor" id="Personal_Car_Loan" data-name="Personal Car Loan" transform="translate(469 2650)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Personal Car Loan</tspan></text></a>
                        <a className="" href="/car-lease"><text className="cursor" id="Car_Lease" data-name="Car Lease" transform="translate(469 2681)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Car Lease</tspan></text></a>
                        <a className="" href="/low-doc-finance"><text className="cursor" id="Low_Doc_Finance" data-name="Low Doc Finance" transform="translate(469 2712)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Low Doc Finance</tspan></text></a>
                        <a className="" href="/chattel-mortgage"><text className="cursor" id="Chattel_Mortgage" data-name="Chattel Mortgage" transform="translate(469 2743)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Chattel Mortgage</tspan></text></a>
                        <a className="" href="/commercial-hire-purchase"><text className="cursor" id="Commercial_Hire_Purchase" data-name="Commercial Hire Purchase" transform="translate(469 2774)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Commercial Hire Purchase</tspan></text></a>
                        <a className="" href="/novated-lease"><text className="cursor" id="Novated_Lease" data-name="Novated Lease" transform="translate(469 2805)" fill="#b6b6b6" font-size="14" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Novated Lease</tspan></text></a>
                        <line className="cursor" id="Line_5" data-name="Line 5" x2="92" transform="translate(139 2809)" fill="none" stroke="#707070" stroke-width="1" />
                    </g>
                </svg>
            </ReactBootstrap.Row>
        </ReactBootstrap.Row>

    );
}