import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar"
import { FaInstagram, } from "react-icons/fa";
import { FaGithub, FaXTwitter, FaMeta } from "react-icons/fa6";
// import Main from "./Main";

const links = [
    { name: <FaGithub className="text-[25px]" />, href: 'https://github.com/Amidah-ifeoluwa' },
    { name: <FaInstagram className="text-[25px]" />, href: 'https://instagram.com/just__meedah?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==' },
    { name: <FaXTwitter className="text-[25px]" />, href: 'https://twitter.com/ifeoluwa_amidah?t=IyIrmTt1FP-W5XdhYnwx7g&s=09' },
    { name: <FaMeta className="text-[25px]" />, href: 'https://www.facebook.com/hermeedah.ife?mibextid=ZbWKwL' },
]
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default function Service() {
    return (
        <RevealOnScroll>
            <div className="bg-black">
                <Navbar />
                <div>
                    <div className=" relative isolate overflow-hidden bg-gray-900 md:py-28 md:pt-64 sm:py-32 max-h-auto mt-  md:mt-">
                        <img
                            src="https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?w=900&t=st=1694452161~exp=1694452761~hmac=f57d7e734c3ba2f97c9aa1614e6ee2a57aabd604c8ca2479437b83d9ab806a84"
                            alt=""
                            className="opacity-25 absolute inset-0 -z-10 max-h-full w-full object-cover object-right md:object-center"
                        />
                        <div
                            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1097/845] max-h-screen w-[68.5625rem] "
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div
                            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1097/845] w-[68.5625rem] "
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0 md:pt-0 pt-32">
                                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with me</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    I'm passionate about frontend development and committed to delivering exceptional results.
                                </p>
                            </div>
                            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                    {links.map((link) => (
                                        <a key={link.name} href={link.href}>
                                            {link.name} <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    ))}
                                </div>
                                {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <RevealOnScroll>
                        <div className=' relative block md:pl-72 md:p-24 py-10 text-lime-100 bg-black md:text-left text-center'>
                            <h4 className='text-[14px] text-blue-700  pb-5'>WORKING WITH IFEOLUWA</h4>
                            <h1 className='text-[20px] md:text-[50px] leading-none'>Take a look at some of my latest <br />projects that I’ve been working on.</h1>
                        </div>
                    </RevealOnScroll>
                </div>


                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('https://img.freepik.com/free-photo/colleagues-working-together-project_23-2149286151.jpg?w=900&t=st=1694453443~exp=1694454043~hmac=6ccb6130ceed45f60f5613d1848c2947eb6a25ee887f2430d1d66655b7ca21c2')"
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        My Process
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        My creative process differs from that of many others
                                        in my field because I prioritize understanding my
                                        clients' backgrounds and project origins. I believe
                                        it's crucial to reciprocate the investment they make
                                        in my services with a deep understanding of their unique needs.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <div className="w-full h-full bg-center bg-cover bg-[url('./assets/background3.jpg')]">
                    <section className="pb-20  -mt-24">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap">
                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                                <i className="fas fa-award"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">Interview</h6>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                I come in with a lot of questions,
                                                which helps guide the conversation
                                                along and share their vision.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">
                                                Build
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                After our interview, we'll go through revision
                                                rounds to ensure a successful site build, involving extensive
                                                communication, design, and development work.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                                <i className="fas fa-fingerprint"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">
                                                Verified Company
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </section>
                    <div>
                        <div className='  block md:pl-64 md:p-24 text-lime-100 md:text-left text-center'>
                            <h4 className='text-[14px] text-blue-700 pl-5 pb-5'>WORKING WITH IFEOLUWA</h4>
                            <h1 className='md:text-[50px] text-[20px]  px-5 leading-none'>I would love to learn about your project
                                and <br /> walk you through my build process in more <br /> detail. Reach out today and we’ll talk soon.</h1>
                            <div>
                                <button className='bg-black text-lime-100 p-4 px-14 border-solid md:ml-5  border-lime-100 border-2 mt-7 md:mt-10 hover:-translate-y-1'>
                                    <a href="service">Contact Me</a>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </RevealOnScroll>

    )
}


// export default Service