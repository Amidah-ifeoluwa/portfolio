// import React from 'react';
import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Service1 from "./Service1";
// Projects1
import Contact from "./Contact";

// Main



export default function Home({ RevealOnScroll }) {
    return (
        <div>
            <div className="bg-black">
                <div className="bg-[url('./assets/background2.jpg')] overflow-hidden max-w-full ">
                    <Navbar />
                    <Main />
                </div>
                <RevealOnScroll>
                    <div className="bg-[url('./assets/background1.jpg')] overflow-hidden max-w-full ">
                        <Service1 />
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    <div className="bg-[url('./assets/background3.jpg')] overflow-hidden max-w-full ">
                        {/* <Projects1 /> */}
                    </div>
                </RevealOnScroll >
                <div className="bg-[url('./assets/background3.jpg')] overflow-hidden max-w-full">
                    <Contact />
                </div>
                {/* <div>
        <Service />
      </div> */}
            </div >
        </div>
    )
}
