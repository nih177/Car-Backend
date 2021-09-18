import React from 'react';
import Head from './Head';
import Footer from './Footer';

function Credit() {
    return (
        <div>
            <Head />
            <form action="" method="post">
                <div id="contact-us-body" className="body-content">
                    <div className="body-text">
                        <h1 className="mt30">Credit Check Request</h1>
                        <div>
                            <p>
                                Curious to find out about your Credit's Health?<br></br>	<br></br>
                                Understanding your credit file enables you to make more informed decisions regarding your finances.</p>
                            <p>
                                By purchasing your Credit File through Carloansales we will be able to help guide you to your next loan enquiry, making minimal impact on your credit file.</p>
                        </div><br></br>
                        <div align="center">
                            <font color="red"></font>
                        </div>
                        <div className="get-a-quote-nav clearfix">
                        </div><table align="center" border="1" style={{width:"100%;"}}>
                            <tbody>
                                <tr>
                                    <td>
                                        First Name<span className="color-red">*</span>
                                    </td>
                                    <td>
                                        <input type="text" name="firstname" value="" /><br></br>
                                        <font color="red"></font>
                                    </td>
                                    <td>
                                        Middle Name
                                    </td>
                                    <td>
                                        <input type="text" name="midname" value="" /><br></br>
                                        <font color="red"></font>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Surname<span className="color-red">*</span>
                                    </td>
                                    <td>
                                        <input type="text" name="surname" value="" /><br></br>
                                        <font color="red"></font>
                                    </td>

                                    <td>
                                        Email<span className="color-red">*</span>
                                    </td>
                                    <td>
                                        <input type="text" name="email" value="" /><br></br>
                                        <font color="red"></font>
                                        <font color="red"></font>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Date Of birth<span className="color-red">*</span>
                                    </td>
                                    <td>
                                        <input type="text" name="dob" value="" /><br></br>
                                        <font color="red"></font>
                                    </td>
                                    <td>
                                        Address
                                    </td>
                                    <td>
                                        <textarea name="address" rows=""></textarea><br></br>
                                        <font color="red"></font>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        License Number<span className="color-red">*</span>
                                    </td>
                                    <td>
                                        <input type="text" name="licensenumber" value="" /><br></br>
                                        <font color="red"></font>
                                    </td>
                                    <td>
                                        State<span className="color-red">*</span>
                                    </td>
                                    <td>
                                        <select name="state">
                                            <option value="NSW">NSW</option>
                                            <option value="VIC">VIC</option>
                                            <option value="QLD">QLD</option>
                                            <option value="TAS">TAS</option>
                                            <option value="SA">SA</option>
                                            <option value="WA">WA</option>
                                            <option value="ACT">ACT</option>
                                            <option value="NT">NT</option>
                                        </select>
                                        <font color="red"></font>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Phone number
                                    </td>
                                    <td>
                                        <input type="text" name="employer" value="" /><br></br>
                                    </td>
                                    <td>
                                        Total Amount
                                    </td>
                                    <td>
                                        <span className="total-amount">$</span><input type="text" className="val-29" value="29.95" readonly="" />
                                    </td>
                                </tr>
                                {/* <tr>
                             <!--  <tr>
                    <td>
                        <select name="selvalue">
                            <option value="1">NSW</option>
                            <option value="2">VIC</option>
                            <option value="3">QLD</option>
                            <option value="4">TAS</option>
                            <option value="5">SA</option>
                            <option value="6">WA</option>
                            <option value="7">ACT</option>
                            <option value="8">NT</option>
                        </select>
                    </td>
                </tr>!--> 
                                </tr>*/}
                                <tr>
                                    <td colspan="4">
                                        <div className="tickbox" style={{height: "30px;"}}>
                                            <div className="privacy-box" style={{display: "none;"}}>
                                                <p>
                                                    Carloansales ABN 99 033 791 789 collects from me/us (being each of the Applicants and Guarantors (and from other persons, whose signature is acknowledged when the privacy consent box has been ticked) personal information about me/us, for purposes of: <br></br>	<br></br>
                                                    .Assessing the Applicant for finance, the guarantee and any insurance proposal<br></br>	<br></br>
                                                    .Arranging Finance and Insurance; and<br></br>	<br></br>
                                                    .Credit and Reference Checking.<br></br>	<br></br>
                                                    For the same purposes, Carloansales will use the information and disclose it to: <br></br>	<br></br>
                                                    .One or more of the financiers used by Carloansales to arrange finance (including BMA Pty Ltd), all of whom are collectively referred to as “Credit Providers” in this consent; and<br></br>	<br></br>
                                                    .(Where relevant) any business which provides information about the creditworthiness of persons (“Credit Reporting Agency”).Suppliers of goods, mercantile agents, collection agencies, insurers, and to Carloansales Agents, brokers, contractors and external advisers and to my/our car or finance brokers.<br></br>	<br></br>
                                                    I/We agree that Carloansales may disclose me/our personal information to it’s related bodies corporate and to BMA Pty Ltd (Together referred to as the ‘Related Companies’) and that Carloansales and the related companies may use this personal information for product development and research and to inform me/us about products and services in the future.Carloan$ales and the related companies will not send information about products if I/We send a written request to the effect to Carloansales at the address below.<br></br>	<br></br>
                                                    I/we acknowledge that if we do not provide this information, Carloansales or the Credit Providers may not be able too process the application for finance.<br></br>	<br></br>
                                                    I/We are able to gain access to the information held about the me/us by Carloansales and the related companies subject to expectations stated in the Privacy Act 1988 (Cth) (“The Privacy Act”).<br></br>	<br></br>
                                                    I/We agree, if we supply Carloansales or the Credit Providers with personal information about any third party (such as a referee), I/We will inform that third party of this fact.<br></br>	<br></br>
                                                    The credit providers collect and use personal information about me/us for the following purposes: <br></br>	<br></br>
                                                    .Assesing the application for finance, the guarantee or any related insurance proposal; and<br></br>	<br></br>
                                                    .(if the application is accepted) providing finance and ancillary services (such as insurance) yo the Applicant(s) and for the ongoing management of finance, guarantees and ancillary services.<br></br>	<br></br>
                                                    For the same purposes, and subject to the Privacy Act, I/We agree that the credit providers may do all the following now and in the future: <br></br>	<br></br>
                                                    1. Collect and use commercial or consumer credit information about me/us from a credit reporting agency<br></br>	<br></br>
                                                    2. Collect and give to (i) any credit provider named in the application for finance or the information obtained under paragraph 1 above (ii) any body which maintains a register of encumbered vehicles (such as R.E.V.S.), or (iii) a Credit Reporting Agency), any personal information about me/us, including any information about my/our creditworthiness, credit standing, credit history or credit capacity, the status of the finance and any default by me/us in accordance with the Privacy Act.<br></br>	<br></br>
                                                    3. Collect from and give to any sources disclosed in the application for finance, personal information about me/us.<br></br>	<br></br>
                                                    4. Give to any guarantor or proposed guarantor of the application for finance, any information about the finance (including personal information about me/us) now or at any time in the future.<br></br>	<br></br>
                                                    5. Collect from and disclose personal informationabout me/us to the Credit Provider’s agents, contactors, external advisors as well as to suppliers of goods, mercantile agents, collection agencies and insurers, and my/our car or finance/insurance broker.<br></br>	<br></br>
                                                    The credit provider who provides me/us with finance may also provide my/our consent to other acts of collection, disclosure and use of personal collection, disclosure and use of personal information about me/us.<br></br>	<br></br>
                                                    In this consent, “Personal Information” has the same meaning as the Privacy Act and includes sensitive information (Eg Health and Financial information)<br></br>	<br></br>
                                                    The Guarantor(s) acknowledgement that: <br></br>	<br></br>
                                                    .The application for finance will be supported by their guarantee; and<br></br>	<br></br>
                                                    .That they have read and understood thet terms of the application for finance.<br></br>	<br></br>	<br></br>
                                                    Declaration<br></br>	<br></br>
                                                    I/We solemnly declare and sincerely declare that: <br></br>	<br></br>
                                                    (a) I am/We are not insolvent or an undischarged bankrupt; <br></br>	<br></br>
                                                    (b) The information given by me/us is true and correct; <br></br>	<br></br>
                                                    (c) The income and expenses declared represent<br></br>	<br></br>
                                                    (d) I am/We are permanent resident(s) of Australia; <br></br>	<br></br>
                                                    (e) I am/We are over the age of 18 years; and<br></br>	<br></br>
                                                    (f) I/We have read and understood this Privacy Act Consent and agree to CarloanSales, the related Companies and the Credit Providers collecting, using and disclosing information (including personal information) about me/us in accordance with provisions of this Consent.</p>
                                            </div>
                                            <input name="privacy" className="required" id="privacy-disclosure" type="checkbox" value="1" />
                                            I accept the above <strong>Privacy Disclosure &amp; Consent</strong> statement
                                        </div>

                                        <font color="red"></font>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td><input type="submit" name="subpquote" className="button" value="Purchase" /></td>
                                </tr>

                            </tbody></table>
                    </div>
                </div>
            </form>


            <Footer />
        </div>
    );
}

export default Credit;