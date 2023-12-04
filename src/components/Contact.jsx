import React, { useEffect, useRef, useState } from "react";
import { Switch } from '@headlessui/react'
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
        <div className=" px-3 py-12 md:py-0 lg:px-8 md:mb-20 mb-10">
            <div className="w-full h-full bg-center bg-cover bg-[url('https://img.freepik.com/free-vector/wave-background-abstract-gradient-design_483537-3688.jpg?w=1060&t=st=1694277705~exp=1694278305~hmac=75a5d5d39657d5b0c4c04e390d8515bd384e378791207ced40794c2e1566ba54')]">
                <RevealOnScroll>
                    <div className='block md:pl-56 md:p-16 p-0 text-white md:text-left text-center'>
                        <h4 className='text-[14px] text-blue-700 pl-5 pb-5'>WORKING WITH IFEOLUWA</h4>
                        <h1 className='md:text-[32px] text-[20px]  px-2 md:px-5 leading-none'>I would love to learn about your project
                            and walk you through my build process in more detail. Reach out today and we'll talk soon.</h1>
                    </div>

                </RevealOnScroll>
            </div>
            <div className="w-full h-full bg-center bg-cover bg-[url('./assets/background3.jpg')]">
                <RevealOnScroll>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl my-5">Contact me now !</h2>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll>
                    <form className="mx-auto max-w-xl sm:mt-10" onSubmit={formHandler}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 bg-gray-500 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 bg-gray-500 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
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

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
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
                                <Switch.Label className="text-sm leading-6 text-white">
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
