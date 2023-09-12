import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, } from "react-icons/fa";
import { FaGithub, FaXTwitter, FaMeta } from "react-icons/fa6";
import { filmbyoasis1, ife, weaid1 } from '../assets'
import Contact from "./Contact";
import CV from "../assets/CV.pdf"

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
const About = () => {
    return (
        <div>
            <div className=" relative isolate overflow-hidden bg-gray-900 md:py-28 md:pt-64 sm:py-32 max-h-auto mt-  md:mt-">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 -z-10 max-h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] max-h-screen w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#8781ff] opacity-20"
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
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#8781ff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with me</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            I'm passionate about frontend development and committed to delivering exceptional results.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href} className="hover:text-blue-500">
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
            <RevealOnScroll>

                <div className="w-full h-full bg-center bg-cover bg-[url('./assets/background3.jpg')]">
                    <div className='md:flex block md:mt-5 justify-normal md:px-24 md:mb-1'>
                        <div className='text-lime-100'>
                            <img src={ife} alt="service" className='md:w-[500px] w-full md:max-w-full md:h-auto my-8' />

                        </div>
                        <div className='block pl-3 md:pl-44 items-center pt-0 md:pt-24'>
                            <div className='text-blue-600 pb-5 md:pb-3 md:text-[56px] text-[40px] font-bold' >
                                <h1>About Me</h1>
                            </div>
                            <div className='text-lime-100 md:text-[20px] text-[15px] md:pr-0 pr-2'>
                                I'm Agbaje Amidah Ifeoluwa, a passionate and creative web<br />
                                developer with a relentless pursuit of excellence in the digital<br />
                                eye for design and a deep understanding of cutting-edge web<br />
                                technologies, I bring your online vision to life. besides the <br />
                                work aspect, I really love listening to music while working and <br />
                                i'm obsessed with black.
                            </div>


                            <div className="mx-auto mt-3 max-w-2xl lg:mx-0 lg:max-w-none">
                                <div className="block  grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                    {links.map((link) => (
                                        <a key={link.name} href={link.href} className=" hover:text-blue-700">
                                            {link.name} <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    ))}
                                </div>
                                <button className='bg-black text-lime-100 p-4 px-14 border-solid border-lime-100 border-2 mt-4 hover:-translate-y-1'>
                                    <a
                                        className="button"
                                        href="../assets/CV.pdf"
                                        download="Agbaje's CV"
                                    >
                                        Download Resume
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            <Contact />
        </div>

    )
}

export default About