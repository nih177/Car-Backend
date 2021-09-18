import React from "react";
import Head from "./Head";
import Footer from "./Footer";

function Career() {
    return (
        <div>
            <Head />
            <div id="content">
                <div id="career-body" className="body-content">
                    <div className="body-text">
                        <h1>Careers</h1>
                        At Carloansales we are always on the lookout for passionate people with talent and experience within Finance Broking.
                        Applications are invited from self motivated, enthusiastic people with strong communication skills and advanced
                        computer skills. Please feel free to email your Resume to info@carloansales.com.au.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Career;