import React from "react";

function Menu()
{
    return(
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
                                <li><a href="/about" title="About Car Loan Sales ">About Us</a></li>
                                <li className="has-flyout">
                                    <a href="#" title="Finance Products" className="flyout-toggle">Finance Products</a>
                                    <ul className="flyout" >
                                    <li><a title="Low Doc Finance" className="menud" href="/low-doc-finance">Low Doc Finance</a></li>
                                    <li><a title="Personal Car Loan" className="menud" href="/personal-car-lease">Personal Car Loan</a></li>
                                    <li><a title="Car Lease" className="menud" href="/car-lease">Car Lease</a></li>
                                    <li><a title="Chattel Mortgage" className="menud" href="/chattel-mortgage">Chattel Mortgage</a></li>
                                    <li><a title="Commercial Hire Purchase" className="menud" href="/commercial-hire-purchase">CHP</a></li>
                                    <li><a title="Novated Lease" className="menud" href="/novated-lease">Novated Lease</a></li>
                                    <li><a title="Equipment Finance" className="menud" href="/equipment-finance">Equipment Finance</a></li>
                                    <li><a title="Bike Loans" className="menud" href="/bike-loans">Bike Loans</a></li>
                                    <li><a title="Personal Lease" className="menud" href="/personal-car-lease">Personal Lease</a></li>
                                    <li><a title="Gap insurance" className="menud" href="/small-ticket-finance">Small Ticket</a></li>
                                    <li><a title="Truck Finance Lease" className="menud" href="/truck-finance">Truck Finance Lease</a></li>
                                    <li><a title="Marine Loans" className="menud" href="/marine-loans-boat-finance">Marine Loans</a></li>
                                    <li><a title="Bad Credit Loans" className="menud" href="/bad-credit-car-loan">Bad Credit Loans</a></li>
                                    </ul>
                                </li>
                                <li><a href="/contact-us" title="Contact Car Loan Sales">Contact Us</a></li>
                                <li><a href="/career" title="Careers">Careers</a></li>
                                <li><a href="/testimonials" title="Client Testimonials">Testimonials</a></li>
                                <li><a href="/site-map" title="Car Loan Sales Sitemap">Site Map</a></li>
                                <li><a href="/faq" title="Freequently Asked Questions">FAQ's</a></li>
                                <li><a href="/credit" title="About Car Loan Sales ">Credit Check </a></li>
                                <li><a href="/blog" title="Careers">Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Menu;