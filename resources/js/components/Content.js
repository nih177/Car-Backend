import React from "react";
function Content() {
    return (
        <div id="content">
            <form action="carfinance_first.php" method="post">
                <input type="hidden" id="submitted-form" name="submitted-form"></input>
                <div id="home-body" className="clearfix">
                    <div className="home-box1">
                        <div className="box1-heading">
                            <img src="/images/index/pre-approval.jpg" width="521" height="50" alt="Pre Approval"></img>
                        </div>

                        <div className="grey-text">
                            Fast Approvals, Fixed Repayments, Low Car Loan Rates!
                        </div>

                        <div className="homebox1-quote">
                            Enter the loan amount below and<br></br>
                            then click <span className="blue">"Get a quote"</span>
                        </div>

                        <div className="box1-image"><img src="/images/index/box1-image.jpg" alt="Personal Car Loan" width="314" height="140"></img>
                        </div>

                        <div className="box1-amount">
                            <div className="enter-amount">
                                <span className="dollar-sign">$</span>
                                <input name="textfield" type="text" className="box1-field" id="textfield" placeholder="Enter Amount"></input>
                            </div>
                            <div className="box1-button">
                                <input type="image" id="submit-enter-amount" name="preapp" src="/images/index/getaquote.jpg"></input>
                                {/* <!--<img src="/images/index/getaquote.jpg" width="166" height="46" alt="" />--> */}
                            </div>
                        </div>

                    </div>
                    <div className="home-box2">
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
                            {/* <!--<div className="loan-calculatorbg">
				<form method="post" action="" >
					<h1>LOAN <span className="blue">CALCULATOR</span></h1>
					<div className="box2-wrapper">
						<ul>
							<li>
								<span className="slider-label">Amount</span>
								<span className="slider-value">$ 0</span>
								<div id="amount-slider"></div>
							</li>
							<li>
								<span className="slider-label">Residual: 0 %</span>
								<span id="residual-slider-amount" className="slider-value">($ 0)</span>
								<div id="residual-slider"></div>
							</li>
							<li>
								<span className="slider-label">Interest</span>
								<span className="slider-value">0 %</span>
								<div id="interest-slider"></div>
							</li>
							<li>
								<span className="slider-label">Term of lease</span>
								<span className="slider-value">1 Year(s)</span>
								<div id="term-of-lease-slider"></div>
							</li>
						</ul>
						<div className="box2-repayment">Monthly Repayment: $<span id="monthly-repayment">0.00</span></div>
						<input type="hidden" id="amount1" name="amttxt">
						<input type="hidden" id="resi" name="resitxt">
						<input type="hidden" id="intrst" name="intrsttxt">
						<input type="hidden" id="tim" name="timtxt">
						<input type="hidden" id="wrate" name="wratetxt">
						<input type="image" id="submit-loan-calculator" name="preapp" src="/images/index/getaquote-grey.png">
					</div>
				</form>
			</div>--> */}

                        </div>
                    </div>
                    {/* <div className="clear"></div> */}
                </div>
                <div className="clear"></div>
                <div id="services">
                    <table border="0" cellspacing="1" cellpadding="1">
                        <tbody>
                            <tr className="pictures">
                                {/* <!--<td><img src="/images/index/car.jpg" width="141" height="85" alt="" /></td>
                                <td><div className="thumb-divider"></div></td>
                                <td><img src="/images/index/truck.jpg" width="141" height="85" alt="" /></td>
                                <td><div className="thumb-divider"></div></td>
                                <td><img src="/images/index/bike.jpg" width="141" height="85" alt="" /></td>
                                <td><div className="thumb-divider"></div></td>
                                <td><img src="/images/index/equipment.jpg" width="141" height="85" alt="" /></td>
                                <td><div className="thumb-divider"></div></td>
                                <td><img src="/images/index/ship.jpg" width="141" height="85" alt="" /></td>
                                <td><div className="thumb-divider"></div></td>
                                <td><img src="/images/index/chattel.jpg" width="141" height="85" alt="" /></td>--> */}
                                <td><img src="/images/index/car.jpg" alt="Personal Car Loan"></img></td>
                                <td><img src="/images/index/truck.jpg" alt="Truck Finance"></img></td>
                                <td><img src="/images/index/bike.jpg" alt="Bike Loans"></img></td>
                                <td><img src="/images/index/equipment.jpg" alt="Equipment Finance"></img></td>
                                <td><img src="/images/index/ship.jpg" alt="Marine Loans"></img></td>
                                <td><img src="/images/index/chattel.jpg" alt="Chattel Mortgage"></img></td>
                            </tr>
                            <tr>
                                <td className="thumbs-text">Personal Car Loan</td>
                                <td className="thumbs-text">Truck Finance</td>
                                <td className="thumbs-text">Bike Loans</td>
                                <td className="thumbs-text">Equipment Finance</td>
                                <td className="thumbs-text">Marine Loans</td>
                                <td className="thumbs-text">Chattel Mortgage</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default Content;