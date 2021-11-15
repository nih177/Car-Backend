import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import NewDesign from '../components/new';
import AllVehicles from '../components/all-vehicles';
import TestimonialSvg from '../components/testimonial-svg';

export default function MainPage(props) {

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
                                    <div id="amount-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><a className="ui-slider-handle ui-state-default ui-corner-all" href="#"></a></div>
                                </li>
                                <li>
                                    <span id="residual" className="slider-label">Residual: 0 %</span>
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
                            <button onClick={submitForm} className="mx-auto bg-blue big-button-text btn d-flex">Get a quote</button>
                            {/* <input type="image" id="submit-loan-calculator" name="preapp" src="/images/index/getaquote-grey.png"></input> */}
                        </div>

                    </div>
                </div>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="mt100">
                <AllVehicles />
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="mt100">
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
                <img className="pl0 pr0" src="/images/footersvg.png" alt="Footer" />
            </ReactBootstrap.Row>
        </ReactBootstrap.Row>

    );
}