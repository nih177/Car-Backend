import React from "react";
import Head from './Head';
import Content from './Content';
import About from "./About";
import Footer from './Footer';
function Home() {
    return (
        <div id="Home">
            <Head />
            <Content />
            <Footer />
        </div>
    );
}

export default Home;