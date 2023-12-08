import { useState } from "react";
import { navbarData } from "./navbarData";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        setToggle(!toggle);
    };

    // start mobile first plus facile
    return (
        <nav className=" mt-1 fixed top-0 w-full bg-black items-center p-4 flex md:p-6 md:px-32 z-10 bg-black">
            <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
                <h1 className="text-xl text-white font-bold cursor-pointer">IFEOLUWA</h1>

                <button
                    className="flex justify-end md:hidden ring-1 ring-white rounded"
                    onClick={showNav}
                >
                    <FaBars className="text-white m-1" />
                </button>

                <ul
                    className={`${toggle ? " flex" : " hidden"
                        } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
                >
                    {navbarData.map((link, index) => {
                        return (
                            <li key={index} className={link.cname}>
                                <Link
                                    className="hover:text-blue-500 text-white text-[18px]"
                                    to={link.href}
                                    onClick={showNav}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
