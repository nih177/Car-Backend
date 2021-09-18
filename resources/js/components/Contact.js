import React from "react";
import Head from "./Head";
import Footer from "./Footer";

function Contact() {
    return (
        <div>
            <Head />
            <div id="content">
                <div id="contact-us-body" class="body-content">
                    <div class="body-text">
                        <h1>
                            Carloansales</h1>
                        <ul>
                            <li>
                                <strong>Phone: </strong>1300 797 833 (9.00am-5.00p.m, Monday to Friday AEST)</li>
                            <li>
                                <strong>Email: </strong><a href="mailto:support@carloansales.com.au">support@carloansales.com.au</a></li>
                            <li>
                                <strong>Fax: </strong>03 8456 6714</li>
                            <li>
                                <strong>Web: </strong><a href="http://www.carloansales.com.au">www.carloansales.com.au</a></li>
                        </ul>
                        <ul>
                            <li>
                                Carloansales.com.au</li>
                            <li>
                                ABN 99 033 791 789</li>
                            <li>
                                AFS License: 336343</li>
                            <li>
                                Australian Credit License: 393424</li>
                            <li>
                                COSL MN: M0005987</li>
                        </ul>
                        <h1>Contact us</h1>
                        <form action="" method="post">
                            <div class="row">
                                <label class="three columns">First name:*</label>
                                <input class="four columns" type="text" name="fname" value=""></input>
                                <span class="five columns msg">Please enter first name</span>
                            </div>
                            <div class="row">
                                <label class="three columns">Surname:*</label>
                                <input class="four columns" type="text" name="surname" value=""></input>
                                <span class="five columns msg">Please enter name</span>
                            </div>
                            <div class="row">
                                <label class="three columns">Telephone:</label>
                                <input class="four columns" type="text" value="" name="telephone"></input>
                                <span class="five columns msg"></span>
                            </div>
                            <div class="row">
                                <label class="three columns">Mobile No.:*</label>
                                <input class="four columns" type="text" name="mobile" value=""></input>
                                <span class="five columns msg">Please enter mobile no.</span>
                            </div>
                            <div class="row">
                                <label class="three columns">E-mail Address:*</label>
                                <input class="four columns" type="text" name="email" value=""></input>
                                <span class="five columns msg">Please enter email</span>
                            </div>
                            <div class="row">
                                <label class="three columns">Vehicle Purchase Date:</label>
                                <input class="four columns" type="text" name="purchagedate" value=""></input>
                                <span class="five columns msg"></span>
                            </div>
                            <div class="row">
                                <label class="three columns">Vehicle Purchase Price:*</label>
                                <input class="four columns" type="text" name="purchageprice" value=""></input>
                                <span class="five columns msg">Please enter vehicle purchage price</span>
                            </div>
                            <div class="row">
                                <label class="three columns">Preferred Time For Us To Call:*</label>
                                <input class="four columns" type="text" value="" name="preftime"></input>
                                <span class="five columns msg">Please enter preferred time for us to call</span>
                            </div>
                            <div class="row">
                                <label class="three columns">Comments:</label>
                                <div class="four columns form-textarea"><textarea name="comments"></textarea></div>
                                <span class="five columns msg"></span>
                            </div>
                            <div class="row">
                                <input type="submit" name="sub" class="button" value="Submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;