import React, { useEffect, useRef, useState } from "react";
// import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
// import Contact from "../components/"
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Contact() {
    const [agreed, setAgreed] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault()
        console.log("hello");
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log("submited");
    }

    return (
        <div className=" px-6 py-24  lg:px-8">
            <div className="w-full h-full bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/wave-background-abstract-gradient-design_483537-3688.jpg?w=1060&t=st=1694277705~exp=1694278305~hmac=75a5d5d39657d5b0c4c04e390d8515bd384e378791207ced40794c2e1566ba54')]">
                <RevealOnScroll>
                    <div className=' block md:pl-64 md:p-24 p-0 text-lime-100 md:text-left text-center'>
                        <h4 className='text-[14px] text-blue-700 pl-5 pb-5'>WORKING WITH IFEOLUWA</h4>
                        <h1 className='md:text-[40px] text-[20px]  px-5 leading-none'>I would love to learn about your project
                            and <br /> walk you through my build process in more <br /> detail. Reach out today and we’ll talk soon.</h1>
                    </div>

                </RevealOnScroll>
            </div>
            {/* <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    // className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div> */}
            <div className="w-full h-full bg-center bg-cover bg-[url('./assets/background3.jpg')]">
                <RevealOnScroll>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-lime-100 sm:text-4xl mb-5">Contact me now !</h2>
                        {/* <p className="mt-2 text-lg leading-8 text-lime-100">
                            Aute magna irure deserunt veniam aliqua magna enim voluptate.
                        </p> */}
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    <form className="mx-auto max-w-xl sm:mt-10" onSubmit={formHandler}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-lime-100">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 bg-gray-500 px-3.5 py-2 text-lime-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-lime-100">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 bg-gray-500 px-3.5 py-2 text-lime-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div> */}
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-lime-100">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full bg-gray-500 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="country" className="sr-only">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                                <ChevronDownIcon
                                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div> */}
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-lime-100">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-gray-700 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 text-lime-100">
                                    By selecting this, you agree to our{' '}
                                </Switch.Label>
                                <a href="#" className="font-semibold text-blue-400">
                                    privacy&nbsp;policy
                                </a>
                                .
                            </Switch.Group>
                        </div>
                        <div className="mt-10">

                            <Popover>
                                <PopoverHandler>
                                    <button
                                        onClick={clickHandler}
                                        type="submit"
                                        className="block w-full rounded-md bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Submit

                                    </button>
                                </PopoverHandler>
                                <PopoverContent>
                                    Message sent successful, you will recieve an email soon!
                                </PopoverContent>
                            </Popover>
                        </div>
                    </form>
                </RevealOnScroll>
            </div>
        </div>

    )
}



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

// const Contact = () => {
//     return (
//         <div className='block w-full '>
//             <form className='flex flex-col shadow-lg max-w-sm max-h-96 p-20 w-full'>
//                 <h1>Contact <span>Form </span> </h1>
//                 <input type="text" name='name' id='' placeholder='Enter Name' />
//                 <input type="text" name='email' id='' placeholder='Enter Email' />
//                 <input type="text" name='phone' id='' placeholder='Enter Text' />
//                 <textarea name="Message" id="" cols="30" rows="10" />
//                 <button type="submit">SUBMIT</button>
//             </form>
//         </div>
//     )
// }

// export default Contact