import React from "react";
import Head from "./Head";
import Footer from "./Footer";

function Site() {
    return (
        <div>
            <Head />
            <div id="content">          {/*  <!--<link rel="stylesheet" href="style/style.css"/>--> */}
                <div id="sitemap-body" className="body-content">
                    <div className="body-text">
                        <h1>Site map</h1>
                        <div className="row">
                            <div className="three columns">
                                <h3>Cars On Site</h3>
                                <ul>
                                    <li><a href="http://carloansales.com.au" title="Car Loan Sales Melbourne Australia">Home</a></li>
                                    <li><a href="/contact" title="Contact Car Loan Sales">Contact</a></li>
                                    <li><a href="/about" title="About Car Loan Sales">About</a></li>
                                    <li><a href="/career" title="Career">Career</a></li>
                                    <li><a href="/testimonials" title="Client Testimonial">Testimonial</a></li>
                                </ul>
                            </div>
                            <div className="four columns end">
                                <h3 className="twelve columns">Finance products</h3>
                                <ul className="six columns">
                                    <li>Low Doc Finance</li>
                                    <li>Personal Car Loan</li>
                                    <li>Car Lease</li>
                                    <li>Chattel Mortgage</li>
                                    <li>Commercial Hire Purchase</li>
                                    <li>Novated Lease</li>
                                    <li>Bad Credit Car Loan</li>
                                </ul>
                                <ul className="six columns">
                                    <li>Equipment Finance</li>
                                    <li>Bike Loans</li>
                                    <li>Personal Lease</li>
                                    <li>Small Ticket</li>
                                    <li>Truck Finance Lease</li>
                                    <li>Marine Loans</li>
                                </ul>
                            </div>
                            <div className="five columns">
                                <h3 className="twelve columns">Cities</h3>
                                <div className="citylist citylist3">
                                    <a className="underLine" href="carloancity_view.php?page_id=19">Car Loans Adelaide</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=20">Car Loans Albury</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=21">Car Loans Ballarat</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=22">Car Loans Bendigo</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=23">Car Loans Brisbane</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=24">Car Loans Cairns</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=25">Car Loans Canberra</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=26">Car Loans Dandenong</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=27">Car Loans Darwin</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=28">Car Loans Frankston</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=29">Car Loans Geelong</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=31">Car Loans Gold Coast</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=32">Car Loans Hobart</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=33">Car Loans Hunter Valley</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=34">Car Loans Melbourne</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=35">Car Loans Penrith</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=36">Car Loans Perth</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=37">Car Loans Sunbury</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=38">Car Loans Sydney</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=41">Car Loans Gippsland</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=43">Car Loans Noosa</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=44">Car Loans Launceston</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=45">Car Loans Mackay</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=46">Car Loans Rockhampton</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=47">Car Loans Bundaberg</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=48">Car Loans Bunbury</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=49">Car Loans Coffs Harbour</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=50">Car Loans Wagga Wagga</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=51">Car Loans Hervey Bay</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=52">Car Loans Toowoomba</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=56">Car Loans Bathurst</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=57">Car Loans Merimbula</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=58">Car Loans Pakenham</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=59">Car Loans Burwood</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=60">Car Loans Laverton</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=61">Car Loans Sunshine</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=62">Car Loans Caroline Springs</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=65">Car Loans Kew</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=66">Car Loans Ringwood</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=67">Car Loans Footscray</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=68">Car Loans Essendon</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=69">Car Loans Mildura</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=70">Car Loans Shepparton</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=71">Car Loans Gladstone</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=72">Car Loans South Yarra</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=73">Car Loans Thornbury</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=74">Car Loans Preston</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=75">Car Loans Cranbourne</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=76">Car Loans Altona</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=77">Car Loans Parramatta</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=78">Car Loans Kingsford Smith</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=79">Car Loans Ashgrove</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=80">Car Loans Sturt</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=81">Car Loans Fremantle</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=82">Car Loans Geraldton</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=83">Car Loans Central Coast</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=84">Car Loans Tweed Heads</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=85">Car Loans Newcastle</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=86">Car Loans Blacktown</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=87">Car Loans Casey</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=88">Car Loans Albany</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=90">Car Loans Nab Essanda CBA ANZ Westpac</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=91">Car Loans Hoppers Crossing</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=92">Car Loans Cheltenham</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=93">Car Loans Willoughby</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=94">Car Loans Five Dock</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=95">Car Loans Glebe</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=96">Car Loans Port Melbourne</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=97">Car Loans Springwood</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=98">Car Loans Warrnambool</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=99">Car Loans Sale</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=100">Car Loans Wangaratta</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=101">Car Loans Ararat</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=102">Car Loans Nowra</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=103">Car Loans Sylvania</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=104">Car Loans Pickles</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=105">Car Loans Manheim</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=106">Car Loans Calculator</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=107">Car Loans Tamworth</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=108">Car Loans St Kilda</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=109">Car Loans Ultimo</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=110">Car Loans Elizabeth Bay</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=111">Car Loans Rushcutters Bay</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=112">Car Loans Carlton</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=113">Car Loans Grovedale</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=114">Car Loans Newfarm</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=115">Car Loans Mount Gambier</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=116">Car Loans North Perth</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=117">Car Loans Banks</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=118">Car Loans Surry Hills</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=119">Car Loans Southbank</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=120">Car Loans Elsternwick</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=121">Car Loans Chelsea</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=122">Car Loans Bundoora</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=123">Car Loans Torquay</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=124">Car Loans Dromana</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=125">Car Loans Rye</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=126">Car Loans Cleveland</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=127">Car Loans Brighton</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=128">Car Loans Sebastopol</a><br></br><br></br>
                                </div>
                                <div className="citylist citylist2">
                                    <a className="underLine" href="carloancity_view.php?page_id=129">Car Loans Moe</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=130">Car Loans Malvern</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=131">Car Loans Richmond</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=132">Car Loans St Albans</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=133">Car Loans Coburg</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=135">Car Loans Jacana</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=136">Car Loans Uber Melbourne</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=137">Car Loans Uber Sydney</a><br></br><br></br>
                                    <a className="underLine" href="carloancity_view.php?page_id=138">Car Loans Uber Brisbane</a><br></br><br></br>
                                </div>
                            </div>
                            <div className="clear"></div> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Site;