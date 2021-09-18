import React from "react";
import "./fountations.css";
import "./style.css";
import { Link } from "react-router-dom";
function Head() {
    return (
        <div id="full-header">
            <div id="header-wrapper">
                <div className="header clear">
                    <div id="top-logo">
                        <div id="div1">
                            <a id="logo" href="http://www.carloansales.com.au"></a>
                        </div>
                        <div id="div2">
                            <span className="phone">Call Us: 1300 797 833</span>
                        </div>
                    </div>

                    <div id="header-text">
                        <div className="contact">
                            <button>Q<br></br>
                                u<br></br>
                                i<br></br>
                                c<br></br>
                                k<br></br><br></br>
                                C<br></br>
                                o<br></br>
                                n<br></br>
                                t<br></br>
                                a<br></br>
                                c<br></br>
                                t</button>
                        </div>
                    </div>
                    <div id="menu">
                        <ul className="nav-bar">
                            <li><a href="/" title="Car Loan Sales Melbourne Australia">Home</a></li>
                            <li><Link to="/about" title="About Car Loan Sales ">About Us</Link></li>
                            <li className="has-flyout">
                                <a href="#" title="Finance Products" className="flyout-toggle">Finance Products</a>
                                <ul className="flyout" >
                                    <li><a title="Low Doc Finance" className="menud" href="low-doc-finance.php">Low Doc Finance</a></li>
                                    <li><a title="Personal Car Loan" className="menud" href="personal-car-loans.php">Personal Car Loan</a></li>
                                    <li><a title="Car Lease" className="menud" href="car-lease.php">Car Lease</a></li>
                                    <li><a title="Chattel Mortgage" className="menud" href="chattel-mortgage.php">Chattel Mortgage</a></li>
                                    <li><a title="Commercial Hire Purchase" className="menud" href="commercial-hire-purchase.php">CHP</a></li>
                                    <li><a title="Novated Lease" className="menud" href="novated-lease.php">Novated Lease</a></li>
                                    <li><a title="Equipment Finance" className="menud" href="equipment-finance.php">Equipment Finance</a></li>
                                    <li><a title="Bike Loans" className="menud" href="bike-loans.php">Bike Loans</a></li>
                                    <li><a title="Personal Lease" className="menud" href="personal-car-lease.php">Personal Lease</a></li>
                                    <li><a title="Gap insurance" className="menud" href="small-ticket-finance.php">Small Ticket</a></li>
                                    <li><a title="Truck Finance Lease" className="menud" href="truck-finance.php">Truck Finance Lease</a></li>
                                    <li><a title="Marine Loans" className="menud" href="marine-loans-boat-finance.php">Marine Loans</a></li>
                                    <li><a title="Bad Credit Loans" className="menud" href="bad-credit-car-loan.php">Bad Credit Loans</a></li>
                                </ul>
                            </li>
                            <li><a href="/contact-us" title="Contact Car Loan Sales">Contact Us</a></li>
                            <li><a href="/career" title="Careers">Careers</a></li>
                            <li><a href="/testimonials" title="Client Testimonials">Testimonials</a></li>
                            <li><a href="/site-map" title="Car Loan Sales Sitemap">Site Map</a></li>
                            <li><a href="/faq" title="Freequently Asked Questions">FAQ's</a></li>
                            <li><a href="veda_register.php" title="About Car Loan Sales ">Credit Check </a></li>
                            <li><a href="view_blog.php" title="Careers">Blogs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* -------------------BANNER-------------------- */}
            <div id="banner">
                <div className="banner-top">
                    <span>FREE ROADSIDE ASSISTANCE WITH EVERY SETTLED LOAN</span>
                </div>
                <div className="banner-image">
                    <div className="banner-car"></div>
                    <div className="banner-text">
                        <div className="finance-from">Finance<br></br><span className="blue">from</span></div>
                        <div className="interest-rate">2.99<span className="percentage-sign">%</span></div>
                        <div className="conditions blue">TAP - Conditions Apply</div>
                    </div>
                    <a href="carfinance_first.php">
                        <img src="/images/banner-button.png"></img>
                    </a>
                </div>
                <div className="testimonial">
                    <h2>TESTIMONIALS</h2>
                    <div className="testimonial-wrapper">

                        <div className="orbit-wrapper" >
                            <div id="testimonials" className="orbit">
                                {/* <img /*className="testimonial-image fluid-placeholder" border="0" src="/images/sunbary.jpg" alt="Craig Kristic, Sunbury Vic"></img> */}
                                <div className="orbit-slide">
                                    <img className="testimonial-image" border="0" src="/images/sunbary.jpg" alt="Craig Kristic, Sunbury Vic"></img>
                                    <h3>~ Craig Kristic, Sunbury Vic</h3>
                                    <p>Speaking openly and professionally about my options, Carloansales knew exactly what i wanted.
                                        Information was completely open with no surprises and pre-approval was instant.
                                        Completely Satisfied, I acquired a company vehicle for my parents through Carloansales.
                                        I would highly recommend Carloansales before major financial institutions or dealer finance for peace of mind vehicle finance.
                                    </p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/Newcastle.jpg" alt="Ben Kochanski, Newcastle NSW"></img>
                                    <h3>~ Ben Kochanski, Newcastle NSW</h3>
                                    <p>I have recently purchased two vehicles through David at Carloansales.
                                        My experience has been second to none when it comes to prompt service.
                                        David also found me the best finance rate available at the time and he did it with a smile.
                                        I will be back to use Carloansales next time I need to purchase another vehicle.
                                        An excellent service.</p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/LisaPape.jpg" alt="Lisa Papez - Melbourne Vic"></img>
                                    <h3>~ Lisa Papez - Melbourne Vic</h3>
                                    <p>We were thrilled with the service we received from David and the team.
                                        They made the entire car buying process, quick and easy to understand.
                                        David went above and beyond and loan company we have ever dealt with and arranged
                                        everything for us in incredibly quickly; we woke up wanting a car and went to sleep owning it.
                                        We*d recommend carloansales.com.au to anyone, in and look forward to using them for our next car
                                        purchase.</p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/Richmond.jpg" alt="Simon Jenkins - Richmond Vic"></img>
                                    <h3>~ Simon Jenkins - Richmond Vic</h3>
                                    <p>Thanks for helping me out of my previous loan Nightmare! I recommend Carloansales.</p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/BondiNSW.jpg" alt="Sarah Menzies, Bondi NSW"></img>
                                    <h3>~ Sarah Menzies, Bondi NSW</h3>                            <p>The process was quick, easy and smooth,
                                        I will recommend this company to everyone
                                        I know. Thanks!</p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/Nedlands.jpg" alt="Brooke Levey - Nedlands WA"></img>
                                    <h3>~ Brooke Levey - Nedlands WA</h3>
                                    <p>I was very happy with Carloansales.com.au who were extremely efficient and prompt to all
                                        requests throughout the finance process, and I would certainly recommend Carloansales to
                                        colleagues and associates.</p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/sunbary.jpg" alt="Janet Harrison - Elwood Vic"></img>
                                    <h3>~ Janet Harrison - Elwood Vic</h3>
                                    <p>I am very impressed, 48 hour process. Thank you so much guys!</p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/Manly.jpg" alt="David Murray, Manly, NSW"></img>
                                    <h3>~ David Murray, Manly, NSW</h3>
                                    <p>Thanks for your help with my Lo Doc car loan - I will use you again next time. </p>
                                </div>
                                <div className="orbit-slide2">
                                    <img className="testimonial-image" border="0" src="/images/AshgroveQld.jpg" alt="Michelle Mahoney, Ashgrove Qld"></img>
                                    <h3>~ Michelle Mahoney, Ashgrove Qld</h3>
                                    <p>Nothing was a problem for Carloansales - We changed the structure a few times until it was perfect for us.
                                        I will be telling my friends of my experience - Well done Lads! </p>
                                </div>
                            </div>
                            {/* <div className="timer"> */}
                                {/* <span className="mask">
                                    <span className="rotator"></span>
                            </span> */}
                                {/* <span className="pause">
                                </span> */}
                            {/* </div> */}
                            {/* <div className="orbit-caption"> */}
                            {/* </div> */}
                        </div>
                    </div>
                    {/* <div className="gradient-right"></div>
                    <div className="gradient-left"></div> */}
                </div>
                <div className="banner-bottom"></div>
            </div>

        </div>
    );
}
export default Head;