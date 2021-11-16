import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {useState} from 'react'
import { VALIDATE_ALPHA, VALIDATE_NUMERIC, VALIDATE_EMAIL } from '../helpers/validators';
import './form.css';

export default function Form3(props) {
    const history = useHistory();

    function updateCheck(e)
    {
        if(e.target.checked == true){
            document.getElementById("checked-box-span").style.display = "none";
        }
    }
    const [checked, setChecked] =useState(false);

    function submitForm(e) {
        e.preventDefault();
        var validated = 1;
        // FullName
        console.log(props.fullName)
        if (!props.fullName) {
            document.getElementById("fullName").style.border = "1px solid red";
            // document.getElementById("fullName").style.display = "none";
            validated = 0;
        }

        if (VALIDATE_ALPHA(props.fullName) == false) {
            document.getElementById("fullName").style.border = "1px solid red";
            validated = 0;
        }

        // Mobile
        console.log(props.mobile)
        if (!props.mobile) {
            document.getElementById("mobile").style.border = "1px solid red";
            validated = 0;
        }

        if (VALIDATE_NUMERIC(props.mobile) == false) {
            document.getElementById("mobile").style.border = "1px solid red";
            validated = 0;
        }

        // Occupation
        console.log(props.occupation)
        if (!props.occupation) {
            document.getElementById("occupation").style.border = "1px solid red";
            validated = 0;
        }

        if (VALIDATE_ALPHA(props.occupation) == false) {
            document.getElementById("occupation").style.border = "1px solid red";
            validated = 0;
        }

        // Telephone
        console.log(props.telephone)
        if (!props.telephone) {
            document.getElementById("telephone").style.border = "1px solid red";
            validated = 0;
        }

        if (VALIDATE_NUMERIC(props.telephone) == false) {
            document.getElementById("telephone").style.border = "1px solid red";
            validated = 0;
        }

        // Email
        console.log(props.email)
        if (!props.email) {
            document.getElementById("email").style.border = "1px solid red";
            validated = 0;
        }

        if (VALIDATE_EMAIL(props.email) == false) {
            document.getElementById("email").style.border = "1px solid red";
            validated = 0;
        }

        // postcode
        console.log(props.postcode)
        if (!props.postcode) {
            document.getElementById("postcode").style.border = "1px solid red";
            validated = 0;
        }

        if (VALIDATE_NUMERIC(props.postcode) == false) {
            document.getElementById("postcode").style.border = "1px solid red";
            validated = 0;
        }

        // Income
        console.log(props.income)
        if (!props.income) {
            document.getElementById("income").style.border = "1px solid red";
            validated = 0;
        }

        if (VALIDATE_NUMERIC(props.income) == false) {
            document.getElementById("income").style.border = "1px solid red";
            validated = 0;
        }
        // PerDuration
        console.log(props.perDuration)
        // We don't have to write if clauses for select

        // Check Box

        if(checked == false){
            document.getElementById("checked-box-span").style.display = "block";
            validated = 0
        }
        else
        {
            document.getElementById("checked-box-span").style.display = "none";
        }
        if (validated == 1) {
            console.log("Success")
            // window.location.href = "/final-page";
            history.push("/final-page");
        }
    }


    return (
        <ReactBootstrap.Row className="w99">
            <ReactBootstrap.Row >
                <ReactBootstrap.Col md={2}>
                    <svg className="mt15" xmlns="http://www.w3.org/2000/svg" width="208.569" height="51.026" viewBox="0 0 208.569 51.026">
                        <defs>
                            <clipPath id="clip-path">
                                <path id="path54" d="M0-114.156H208.569v-51.026H0Z" transform="translate(0 165.182)" />
                            </clipPath>
                            <clipPath id="clip-path-2">
                                <path id="path60" d="M372.8-184.852h38.456v59.575H372.8Z" transform="translate(-372.796 184.852)" />
                            </clipPath>
                            <clipPath id="clip-path-3">
                                <path id="path66" d="M403.2-165.182v51.026H534.949v-51.026Z" transform="translate(-403.195 165.182)" />
                            </clipPath>
                        </defs>
                        <g id="g10" transform="translate(-85 154.182)">
                            <g id="g12" transform="translate(85 -154.182)">
                                <path id="path14" d="M14.817-104.762a5.567,5.567,0,0,0-5.23-3.486c-4.492,0-6.1,3.755-6.1,6.571,0,3.218,2.045,6.6,6.034,6.6a5.613,5.613,0,0,0,5.263-3.419h3.889a9.531,9.531,0,0,1-9.152,6.6c-6.1,0-9.52-4.995-9.52-9.789a9.5,9.5,0,0,1,9.554-9.755,9.455,9.455,0,0,1,9.118,6.671H14.817" transform="translate(0 128.037)" fill="#21376c" />
                                <path id="path16" d="M74.861-108.248a6.454,6.454,0,0,0-6.369,6.638,6.479,6.479,0,0,0,6.336,6.537,6.488,6.488,0,0,0,6.47-6.537,6.344,6.344,0,0,0-6.437-6.638Zm6.369,15.89v-2.883h-.067a7.107,7.107,0,0,1-6.3,3.352,9.535,9.535,0,0,1-9.856-9.688,9.626,9.626,0,0,1,9.856-9.856,7.361,7.361,0,0,1,6.3,3.118h.067v-2.615h3.486v18.572H81.23" transform="translate(-44.924 128.037)" fill="#21376c" />
                                <path id="path18" d="M140.365-92.359V-110.93h3.252v1.676h.067a5.723,5.723,0,0,1,4.727-2.179v3.587a6.55,6.55,0,0,0-2.514.67c-1.106.6-2.045,2.011-2.045,4.66v10.157h-3.487" transform="translate(-97.005 128.037)" fill="#21376c" />
                                <path id="path20" d="M177.71-105.184h-3.487V-129.99h3.487v24.807" transform="translate(-120.405 140.861)" fill="#21376c" />
                                <path id="path22" d="M203.878-108.248a6.547,6.547,0,0,0-6.537,6.571,6.576,6.576,0,0,0,6.537,6.6,6.587,6.587,0,0,0,6.537-6.638A6.54,6.54,0,0,0,203.878-108.248Zm0,16.359a9.986,9.986,0,0,1-10.023-9.889,9.87,9.87,0,0,1,10.023-9.654,9.861,9.861,0,0,1,10.023,9.722,9.991,9.991,0,0,1-10.023,9.822" transform="translate(-133.971 128.037)" fill="#21376c" />
                                <path id="path24" d="M276.31-108.248a6.454,6.454,0,0,0-6.369,6.638,6.479,6.479,0,0,0,6.335,6.537,6.488,6.488,0,0,0,6.47-6.537A6.343,6.343,0,0,0,276.31-108.248Zm6.369,15.89v-2.883h-.067a7.106,7.106,0,0,1-6.3,3.352,9.535,9.535,0,0,1-9.856-9.688,9.626,9.626,0,0,1,9.856-9.856,7.36,7.36,0,0,1,6.3,3.118h.067v-2.615h3.486v18.572h-3.486" transform="translate(-184.144 128.037)" fill="#21376c" />
                                <path id="path26" d="M353.513-92.359v-10.09c0-1.441,0-5.8-4.626-5.8-2.917,0-4.895,2.045-4.895,5.766v10.124h-3.487V-110.93h3.252v1.978h.067a6.6,6.6,0,0,1,5.431-2.481,7.548,7.548,0,0,1,6.571,3.319,9.061,9.061,0,0,1,1.173,4.76v11h-3.487" transform="translate(-235.321 128.037)" fill="#21376c" />
                                <path id="path28" d="M487.532-108.248a6.454,6.454,0,0,0-6.369,6.638,6.479,6.479,0,0,0,6.335,6.537,6.488,6.488,0,0,0,6.47-6.537A6.343,6.343,0,0,0,487.532-108.248Zm6.369,15.89v-2.883h-.067a7.106,7.106,0,0,1-6.3,3.352,9.535,9.535,0,0,1-9.856-9.688,9.626,9.626,0,0,1,9.856-9.856,7.36,7.36,0,0,1,6.3,3.118h.067v-2.615h3.487v18.572H493.9" transform="translate(-330.118 128.037)" fill="#7a79a5" />
                                <path id="path30" d="M555.283-105.184H551.8V-129.99h3.487v24.807" transform="translate(-381.342 140.861)" fill="#7a79a5" />
                                <path id="path32" d="M585.839-102.818a6.029,6.029,0,0,0-6-5.431,6.03,6.03,0,0,0-6,5.431Zm-12,2.682a6.3,6.3,0,0,0,6.1,5.062,5.936,5.936,0,0,0,5.3-3.118h3.487a9.465,9.465,0,0,1-8.917,6.3,9.689,9.689,0,0,1-9.453-9.789,9.547,9.547,0,0,1,9.521-9.755,9.52,9.52,0,0,1,9.453,9.52c0,.6-.067,1.542-.1,1.777H573.838" transform="translate(-394.166 128.037)" fill="#7a79a5" />
                                <path id="path34" d="M642.612-106a2.286,2.286,0,0,0-2.38-2.246,2,2,0,0,0-2.179,1.978c0,1.542,1.341,1.944,2.883,2.413,1.442.436,5.6,1.609,5.6,6.034,0,3.285-2.28,5.934-6.235,5.934a6.363,6.363,0,0,1-6.57-6.571h3.487c.134,2.079,1.206,3.386,3.151,3.386a2.465,2.465,0,0,0,2.682-2.548c0-1.643-1.441-2.213-3.252-2.849-2.011-.738-5.23-1.643-5.23-5.6a5.561,5.561,0,0,1,5.833-5.364A5.486,5.486,0,0,1,646.1-106h-3.487" transform="translate(-437.965 128.037)" fill="#7a79a5" />
                                <path id="path36" d="M546.476-23.343v-1.109h.945v1.109h-.945" transform="translate(-377.665 67.925)" fill="#21376c" />
                                <path id="path38" d="M557.026-35.793a1.51,1.51,0,0,0-1.418-.945,1.653,1.653,0,0,0-1.654,1.781,1.673,1.673,0,0,0,1.635,1.79,1.521,1.521,0,0,0,1.427-.927h1.054a2.584,2.584,0,0,1-2.481,1.79,2.572,2.572,0,0,1-2.58-2.654A2.576,2.576,0,0,1,555.6-37.6a2.563,2.563,0,0,1,2.472,1.809h-1.045" transform="translate(-382.18 77.013)" fill="#21376c" />
                                <path id="path40" d="M574-36.739a1.775,1.775,0,0,0-1.772,1.781A1.783,1.783,0,0,0,574-33.167a1.786,1.786,0,0,0,1.772-1.8A1.773,1.773,0,0,0,574-36.739Zm0,4.435a2.707,2.707,0,0,1-2.717-2.681A2.676,2.676,0,0,1,574-37.6a2.673,2.673,0,0,1,2.717,2.635A2.708,2.708,0,0,1,574-32.3" transform="translate(-394.807 77.013)" fill="#21376c" />
                                <path id="path42" d="M598.487-32.431v-2.8c0-.427-.055-1.508-1.191-1.508-1.209,0-1.191,1.081-1.2,1.5v2.808h-.945v-2.8a1.729,1.729,0,0,0-.209-1.036,1.048,1.048,0,0,0-.936-.473c-1.245,0-1.245,1.127-1.245,1.5v2.808h-.945v-5.035h.872v.545h.018a1.648,1.648,0,0,1,1.445-.682,1.727,1.727,0,0,1,1.563.845,1.74,1.74,0,0,1,1.663-.845,1.921,1.921,0,0,1,1.772.909,2.5,2.5,0,0,1,.282,1.227v3.035h-.945" transform="translate(-408.999 77.013)" fill="#21376c" />
                                <path id="path44" d="M620.8-23.343v-1.109h.945v1.109H620.8" transform="translate(-429.028 67.925)" fill="#21376c" />
                                <path id="path46" d="M630-36.739a1.75,1.75,0,0,0-1.727,1.8,1.757,1.757,0,0,0,1.718,1.772,1.759,1.759,0,0,0,1.754-1.772A1.72,1.72,0,0,0,630-36.739Zm1.727,4.308v-.781h-.018A1.927,1.927,0,0,1,630-32.3a2.585,2.585,0,0,1-2.671-2.626A2.609,2.609,0,0,1,630-37.6a2,2,0,0,1,1.709.845h.018v-.709h.945v5.035h-.945" transform="translate(-433.542 77.013)" fill="#21376c" />
                                <path id="path48" d="M649.31-37.16v2.726c0,1.245.554,1.572,1.254,1.572.782,0,1.318-.5,1.318-1.6v-2.7h.945v5.035h-.863v-.545h-.018a1.686,1.686,0,0,1-1.482.672,2.15,2.15,0,0,1-1.435-.5,2.356,2.356,0,0,1-.664-1.935V-37.16h.945" transform="translate(-448.08 76.707)" fill="#21376c" />
                                <g id="g50" transform="translate(0 0)">
                                    <g id="g52" clip-path="url(#clip-path)">
                                        <g id="g58" transform="translate(115.16 -6.076)" clip-path="url(#clip-path-2)">
                                            <g id="g64" transform="translate(9.39 6.076)" clip-path="url(#clip-path-3)">
                                                <path id="path70" d="M418.315-104.587a14.757,14.757,0,0,1-8.922,2.549,14.509,14.509,0,0,1-5.45-1.8,17.4,17.4,0,0,1-.747-4,1.147,1.147,0,0,1,1.1-1.1,20.073,20.073,0,0,1,2.131.528,10.209,10.209,0,0,0,2.176.571c3.274.176,8.658-.461,9.185-4.768a4.656,4.656,0,0,0,.22-1.077l-.022-.352-.2-.11c-1.121.066-2.285.11-3.406.2-1.121.066-2.263.11-3.384.11-2.11-.066-4.352-.373-5.955-1.736a5.073,5.073,0,0,1-1.6-4.021,11.731,11.731,0,0,1,.11-1.516,13.156,13.156,0,0,1,4.153-8.065,11.138,11.138,0,0,1,8.065-3.648c3.758-.066,7.757,1.736,8.812,5.472a2.365,2.365,0,0,1,.2,1.011c.11,1.055-1.143,1.362-1.912,1.253a10.609,10.609,0,0,1-2.944-.835,9.413,9.413,0,0,0-2.945-.791,8.237,8.237,0,0,0-4.505,1.275,5.044,5.044,0,0,0-2.637,3.758c-.11.791.4,1.758,1.318,1.582a16.452,16.452,0,0,0,2.769-.374,15.875,15.875,0,0,1,2.813-.352,7.046,7.046,0,0,1,5.823,2.659,8.82,8.82,0,0,1,1.275,6.087c-.418,3.186-2.857,5.779-5.516,7.493h0" transform="translate(-403.195 142.821)" fill="#7a79a5" />
                                                <path id="path72" d="M427.126-111.048l7.674-1.758c-1.757-4.716-5.363-30.7,1.017-44.659l-2.126-1.295c-3.144,2.868-12.76,16.277-6.565,47.712h0" transform="translate(-418.326 160.744)" fill="#231f20" />
                                                <path id="path74" d="M438.731-107.092c-1.255-7.13-4.716-31.344,3.514-45.676" transform="translate(-426.51 156.603)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-dashoffset="72.276" stroke-width="3.035" stroke-dasharray="72.319 48.211" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </ReactBootstrap.Col>
                {/* -----------SVGS-------------- */}
                <ReactBootstrap.Col className="d-flex justify-content-center  " md={8}>
                    <svg className=" mt15 mr30" xmlns="http://www.w3.org/2000/svg" width="339" height="49" viewBox="0 0 339 49">
                        <g id="Group_4" data-name="Group 4" transform="translate(-512 -23)">
                            <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(512 23)" fill="none" stroke="#4d4acf" stroke-width="2">
                                <circle cx="24.5" cy="24.5" r="24.5" stroke="none" />
                                <circle cx="24.5" cy="24.5" r="23.5" fill="none" />
                            </g>
                            <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(657 23)" fill="none" stroke="#4d4acf" stroke-width="2">
                                <circle cx="24.5" cy="24.5" r="24.5" stroke="none" />
                                <circle cx="24.5" cy="24.5" r="23.5" fill="none" />
                            </g>
                            <g id="Ellipse_7" data-name="Ellipse 7" transform="translate(802 23)" fill="none" stroke="#4d4acf" stroke-width="2">
                                <circle cx="24.5" cy="24.5" r="24.5" stroke="none" />
                                <circle cx="24.5" cy="24.5" r="24" fill="none" />
                            </g>
                            <line id="Line_12" data-name="Line 12" x2="95" transform="translate(561.5 47.5)" fill="none" stroke="#4d4acf" stroke-width="2" />
                            <line id="Line_13" data-name="Line 13" x2="95" transform="translate(706.5 47.5)" fill="none" stroke="#4d4acf" stroke-width="2" />
                            <text id="_1" data-name="1" transform="translate(532 55)" fill="#4d4acf" font-size="20" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">1</tspan></text>
                            <text id="_2" data-name="2" transform="translate(676 56)" fill="#4d4acf" font-size="20" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">2</tspan></text>
                            <text id="_3" data-name="3" transform="translate(821 55)" fill="#4d4acf" font-size="20" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">3</tspan></text>
                        </g>
                    </svg>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className=" " md={2}>
                    <a href="/" className="text-decoration-none float-right mt15">Go back to home page</a>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="d-flex align-items-center pl29p5">
                <form onSubmit={submitForm} enctype="multipart/form-data" method="post">
                    <ReactBootstrap.Row id="page3" className="mx-auto w60 form-container">

                        <ReactBootstrap.Col md={12} className="sub-heading-text mt15">
                            Your Personal Details
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12} className="mt20">
                            <span className="normal-text">Fullname</span>
                            <div className="mt4"></div>
                            <input id="fullName" onChange={e => { e.preventDefault(); props.setFullName(e.target.value); }} className="w50" type="text" ></input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12}>
                            <span className="normal-text mt15">Mobile</span>
                            <div className="mt4"></div>
                            <input id="mobile" onChange={e => { e.preventDefault(); props.setMobile(e.target.value); }} className="w50" type="tel" ></input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12}>
                            <span className="normal-text mt15">Occupation</span>
                            <div className="mt4"></div>
                            <input id="occupation" onChange={e => { e.preventDefault(); props.setOccupation(e.target.value); }} className="w50" type="text" ></input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12}>
                            <span className="normal-text mt15">Work Telephone</span>
                            <div className="mt4"></div>
                            <input id="telephone" onChange={e => { e.preventDefault(); props.setTelephone(e.target.value); }} className="w50" type="tel" ></input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12}>
                            <span className="normal-text mt15">Email</span>
                            <div className="mt4"></div>
                            <input id="email" onChange={e => { e.preventDefault(); props.setEmail(e.target.value); }} className="w50" type="email" ></input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12}>
                            <span className="normal-text mt15">Postcode</span>
                            <div className="mt4"></div>
                            <input id="postcode" onChange={e => { e.preventDefault(); props.setPostcode(e.target.value); }} className="w50" type="text" ></input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12} className="mb4">
                            <span className="normal-text mt15">What is your income (after tax)</span>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={4}>
                            <input id="income" onChange={e => { e.preventDefault(); props.setIncome(e.target.value); }} className="" type="text" ></input>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={8}>
                            <span className="per-text">per</span>
                            <select id="perDuration" onChange={e => { e.preventDefault(); props.setPerDuration(e.target.value); }} className="select-middle w30">
                                <option>week</option>
                                <option>month</option>
                                <option>year</option>
                            </select>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Row className="mt15 -ml3">
                            <ReactBootstrap.Col md={1} className="pl0 pr0 w2">
                                <input id="check-box" className="w50 -mt3" type="checkbox" id="allow" name="allow" onChange={e => { setChecked(e.target.checked); }} onClick={e=>{updateCheck(e)}} />
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Col className="pl0 pr0" md={11}>
                                <span className="allow-text mt-auto mb-auto">I accept the Privacy Disclouser & Consent statement</span>
                            </ReactBootstrap.Col>
                            <span id="checked-box-span" className=" dn ml-2 p-2"><span className="color-red">* </span>Please accept the Privacy Disclouser & Consent statement</span>
                        </ReactBootstrap.Row>
                        <ReactBootstrap.Col className="mt20 mb20">
                            <button type="submit" className="w19 big-button-text bg-blue">Finish</button>
                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                </form>
            </ReactBootstrap.Row>
        </ReactBootstrap.Row >
    );
}