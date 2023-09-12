// import "./index.css";
import Main from "./components/Main";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import Navbar from "./components/Navbar";
// import react from "react";
import img1 from './assets/filmbyoasis1.png';
import img2 from './assets/filmbyoasis2.png';
import img3 from './assets/filmbyoasis3.png'
import img4 from './assets/filmbyoasis4.png';
import img5 from './assets/filmbyoasis5.png';
import img6 from './assets/filmbyoasis6.png'

import we1 from './assets/weaid1.png';
import we2 from './assets/weaid2.png';
import we3 from './assets/weaid3.png';
import we4 from './assets/weaid4.png';
import we5 from './assets/weaid5.png';
import we6 from './assets/weaid6.png';
import we7 from './assets/weaid7.png';

import philip1 from './assets/philipmix1.png';
import philip2 from './assets/philipmix2.png';
import philip3 from './assets/philipmix3.png';
import philip4 from './assets/philipmix4.png';
import philip5 from './assets/philipmix5.png';
import philip6 from './assets/philipmix6.png';

import bata1 from './assets/bata1.png';
import bata2 from './assets/bata2.png';
import bata3 from './assets/bata3.png';
import bata4 from './assets/bata4.png';
import bata5 from './assets/bata5.png';
import bata6 from './assets/bata6.png'
import bata7 from './assets/bata7.png'

import landing1 from './assets/landing1.png';
import landing2 from './assets/landing2.png';
// import landing3 from './assets/landing3.png';
import landing4 from './assets/landing4.png';
import landing5 from './assets/landing5.png';
import landing6 from './assets/landing6.png';

import loginauth from './assets/loginauth.png'
import signupauth from './assets/signupauth.png'

import calculator from "./assets/calculator.png";

import login from './assets/login.png'
import signin from './assets/signin.png';
// import "..we/assets/css/style.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { motion, useScroll } from "framer-motion";

import { useRef } from "react";
import { useInView } from "framer-motion";


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translatey(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}


export default function App() {
  const { scrollYProgress } = useScroll();

  const filmByOasis = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6

    // Add more image URLs as needed
  ];

  const weaid = [
    we1,
    we2,
    we3,
    we4,
    we5,
    we6,
    we7,
  ];

  const philipmix = [
    philip1,
    philip2,
    philip3,
    philip4,
    philip5,
    philip6,
  ];

  const Authentication = [
    login,
    signin,
  ];

  const Bata = [
    bata1,
    bata2,
    bata3,
    bata4,
    bata5,
    bata6,
    bata7,
  ];

  const Landingpage = [
    landing1,
    landing2,
    // landing3,
    landing4,
    landing5,
    landing6,
  ];

  const Auth = [
    loginauth,
    signupauth,
  ];
  const Calculator = [
    calculator
  ]


  // const projectName = [
  //   ""
  // ];

  return (


    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="bg-black">

        <Router>
          <Navbar />


          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/Project" element={<Project oasis={filmByOasis} we={weaid} philip={philipmix} auth={Authentication} ba={Bata} landing={Landingpage} au={Auth} calc={calculator} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Main" element={<Main />} />
          </Routes>
          <Footer />

        </Router>
      </div>
    </>

  );
}
