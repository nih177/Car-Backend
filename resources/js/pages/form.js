import React from 'react';
import { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './form.css'
import { VALIDATE_ALPHA, VALIDATE_NUMERIC } from '../helpers/validators';
import axios from 'axios';
export default function Form(props) {
    // const [loanAmount, setLoanAmount] = useState(0);
    // const [term, setTerm] = useState(0);
    // const [image, setImage] = useState('');
    function updateTerm() {
        console.log("Youuu")
        document.getElementById('term').innerHTML = props.term
        console.log(props.term)
        document.getElementById("term-span").style.opacity = "0";
    }
    const [studentInput, setStudent] = useState({
        loanAmount: 0,
        term: 0,
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setStudent({ ...studentInput, [e.target.name]: e.target.value })
        setLoanAmount(e.target.value)
        console.log(props.loanAmount)
    }

    const saveStudent = (e) => {

    }
    function submitForm(e) {
        e.preventDefault();
        var validated = 1;
        console.log(studentInput.loanAmount)
        console.log(props.loanAmount)
        if (!props.loanAmount) {
            document.getElementById("loanAmount").style.border = "2px";
            validated = 0;
        }

        if (VALIDATE_NUMERIC(props.loanAmount) == false) {
            document.getElementById("loanAmount").style.border = "2px soild red";
            validated = 0;
        }
        if (!props.term) {
            document.getElementById("term-span").style.opacity = "1";
            validated = 0;
        }

        if (VALIDATE_NUMERIC(props.term) == false) {
            document.getElementById("term-span").style.opacity = "1";
            validated = 0;
        }

        if (validated == 1) {
            // window.location.href="https://instagram.com";
            console.log(props.term)

            // const data = {
            //     loanAmount: props.loanAmount,
            //     term: props.term,
            // }
            // console.log(data)
            // const res = axios.post(`http://127.0.0.1:8000/validate`, data).then(() => {
            //     console.log("Success. . . . ")
            // }).catch(error => {
            //     console.log("ERRRR:: ", error.response.data);
            // });
            // if (res === "Worked") {
            //     console.log(res)
            // }
            // else {
            //     console.log("Shit")
            //     console.log("___")
            // }
            // console.log(res)
            // console.log("Sent data")
            // console.log("Appended")
            window.location.href = "https://carloansales.herokuapp.com/form2";
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
                <ReactBootstrap.Col className=" " md={6}>
                    <svg className="float-right mt15 mr30" xmlns="http://www.w3.org/2000/svg" width="339" height="49" viewBox="0 0 339 49">
                        <g id="Group_3" data-name="Group 3" transform="translate(-514 -23)">
                            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(514 23)" fill="none" stroke="#4d4acf" stroke-width="2">
                                <circle cx="24.5" cy="24.5" r="24.5" stroke="none" />
                                <circle cx="24.5" cy="24.5" r="23.5" fill="none" />
                            </g>
                            <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(659 23)" fill="none" stroke="#ccc" stroke-width="1">
                                <circle cx="24.5" cy="24.5" r="24.5" stroke="none" />
                                <circle cx="24.5" cy="24.5" r="24" fill="none" />
                            </g>
                            <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(804 23)" fill="none" stroke="#ccc" stroke-width="1">
                                <circle cx="24.5" cy="24.5" r="24.5" stroke="none" />
                                <circle cx="24.5" cy="24.5" r="24" fill="none" />
                            </g>
                            <line id="Line_7" data-name="Line 7" x2="95" transform="translate(563.5 47.5)" fill="none" stroke="#4d4acf" stroke-width="2" />
                            <line id="Line_8" data-name="Line 8" x2="95" transform="translate(708.5 47.5)" fill="none" stroke="#ccc" stroke-width="2" />
                            <text id="_1" data-name="1" transform="translate(534 55)" fill="#4d4acf" font-size="20" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">1</tspan></text>
                            <text id="_2" data-name="2" transform="translate(678 56)" fill="#ccc" font-size="20" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">2</tspan></text>
                            <text id="_3" data-name="3" transform="translate(823 55)" fill="#ccc" font-size="20" font-family="AbrilFatface-Regular, Abril Fatface"><tspan x="0" y="0">3</tspan></text>
                        </g>
                    </svg>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col className=" " md={4}>
                    <a href="/" className="text-decoration-none float-right mt15">Go back to home page</a>
                </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="d-flex align-items-center pl35">
                <form className="d-flex mx-auto " id="form1" onSubmit={submitForm} enctype="multipart/form-data" method="POST">
                    {/* -------------PAGE 1--------------- */}
                    <ReactBootstrap.Row id="page1" className="mx-auto w50 form-container">

                        <ReactBootstrap.Col md={12} className="sub-heading-text">
                            Amount
                            <br />
                            <br />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col md={12}>
                            <span className="normal-text">Loan Amount</span>
                            <input type="text" id="loanAmount" name="loanAmount" onChange={e => { e.preventDefault(); props.setLoanAmount(e.target.value); }} className="form-control w50 mt10" />
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col className="" md={12}>
                                <span className="normal-text">What is the term of the loan</span>
                                <br />
                            </ReactBootstrap.Col>
                            <ReactBootstrap.Row >
                                <ReactBootstrap.Col className="">
                                    <button onClick={e => { e.preventDefault(); props.setTerm(5); updateTerm() }} className="w25 small-button-text mt15">5 years</button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Row >
                                <ReactBootstrap.Col className="mt15">
                                    <button onClick={e => { e.preventDefault(); props.setTerm(4); updateTerm() }} className="w25 small-button-text">4 years</button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Row >
                                <ReactBootstrap.Col className="mt15">
                                    <button onClick={e => { e.preventDefault(); props.setTerm(3); updateTerm() }} className="w25 small-button-text">3 years</button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Row >
                                <ReactBootstrap.Col className="mt15">
                                    <button onClick={e => { e.preventDefault(); props.setTerm(2); updateTerm() }} className="w25 small-button-text">2 years</button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <ReactBootstrap.Row >
                                <ReactBootstrap.Col className="mt15">
                                    <button onClick={e => { e.preventDefault(); props.setTerm(1); updateTerm() }} className="w25 small-button-text">1 year</button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                            <input type="text" id="term" name="term" onChange={handleInput} value={studentInput.term} className="form-control" hidden />
                            <span id="term-span" className=" o0 ml-2 p-2 d-block"><span className="color-red">* </span>Please click on the term you want</span>
                            <br />
                            <ReactBootstrap.Row>
                                <ReactBootstrap.Col md={12} className=" mb20">
                                    <button type="submit" className=" bg-dark big-button-text btn d-flex">Continue</button>
                                </ReactBootstrap.Col>
                            </ReactBootstrap.Row>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Row>
                </form>
            </ReactBootstrap.Row>
        </ReactBootstrap.Row>
    );
}