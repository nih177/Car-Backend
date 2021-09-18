import React from "react";
import Head from "./Head";
import Footer from "./Footer";

function Testimonial() {
    return (
        <div>
            <Head />
            <div id="content">
                <div id="testimonial-body" className="body-content">
                    <div className="body-text">
                        <h1>Testimonials</h1>
                        <h3>~ Craig Kristic, Sunbury Vic</h3>
                        <p>Speaking openly and professionally about my options, Carloansales knew exactly what i wanted.
                            Information was completely open with no surprises and pre-approval was instant. Completely
                            Satisfied, I acquired a company vehicle for my parents through Carloansales. I would highly
                            recommend Carloansales before major financial institutions or dealer finance for peace of
                            mind vehicle finance.
                        </p>
                        <p className="date">2013-02-19 09:30:09</p>
                        <h3>~ Ben Kochanski, Newcastle NSW</h3>
                        <p>I have recently purchased two vehicles through David at Carloansales. My experience has been
                            second to none when it comes to prompt service. David also found me the best finance rate
                            available at the time and he did it with a smile. I will be back to use Carloansales next
                            time I need to purchase another vehicle. An excellent service.</p>
                        <p className="date">2013-02-11 16:23:51</p>
                        <h3>~ Lisa Papez - Melbourne Vic</h3>
                        <p>We were thrilled with the service we received from David and the team. They made the entire
                            car buying process, quick and easy to understand. David went above and beyond and loan
                            company we have ever dealt with and arranged everything for us in incredibly quickly;
                            we woke up wanting a car and went to sleep owning it. We*d recommend carloansales.com.au
                            to anyone, in and look forward to using them for our next car purchase.</p>
                        <p className="date">2013-02-11 16:21:15</p>
                        <h3>~ Simon Jenkins - Richmond Vic</h3>
                        <p>Thanks for helping me out of my previous loan Nightmare! I recommend Carloansales.</p>
                        <p className="date">2013-02-08 17:12:49</p>
                        <h3>~ Sarah Menzies, Bondi NSW</h3>
                        <p>The process was quick, easy and smooth,
                            I will recommend this company to everyone
                            I know. Thanks!</p>
                        <p className="date">2013-01-14 12:41:57</p>
                        <h3>~ Brooke Levey - Nedlands WA</h3>
                        <p>I was very happy with Carloansales.com.au who were extremely efficient and prompt to all
                            requests throughout the finance process, and I would certainly recommend Carloansales to
                            colleagues and associates.</p>
                        <p className="date">2012-09-18 11:02:22</p>
                        <h3>~ Janet Harrison - Elwood Vic</h3>
                        <p>I am very impressed, 48 hour process. Thank you so much guys!</p>
                        <p className="date">2012-08-05 07:50:08</p>
                        <h3>~ David Murray, Manly, NSW</h3>
                        <p>Thanks for your help with my Lo Doc car loan - I will use you again next time. </p>
                        <p className="date">2012-06-09 13:26:05</p>
                        <h3>~ Michelle Mahoney, Ashgrove Qld</h3>
                        <p>Nothing was a problem for Carloansales - We changed the structure a few times until it was
                            perfect for us. I will be telling my friends of my experience - Well done Lads! </p>
                        <p className="date">2012-06-04 16:45:01</p>
                        <div>
                            <p><a href="carfinance_first.php"><img src="/images/page-button.png"></img></a></p>
                        </div>

                    </div>
                </div>

                {/* <!--<table align="left" style="width: 900px;">
                    <tr>
                        <td align="left">
                            <b style="font-size: 16px;">Testimonials</b>
                        </td>
                    </tr>
                </table>--> */}

            </div>
            <Footer />
        </div>
    );
}
export default Testimonial;