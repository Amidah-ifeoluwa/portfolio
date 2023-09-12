import { FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import { FaBootstrap, FaReact } from "react-icons/fa6";



export default function Example() {
    return (
        <div className="bg-black pyhy`-24 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-bold leading-8 text-gray-500">
                    Some of the programming languages i know
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <div className="flex items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                        <FaHtml5 className="text-[40px] text-gray-500" />
                        <h1 className="text-gray-500 text-[25px] font-bold">HTML</h1>
                    </div>
                    <div className="flex items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                        <FaCss3 className="text-[40px] text-gray-500" />
                        <h1 className="text-gray-500 text-[25px] font-bold">CSS</h1>
                    </div>
                    <div className="flex items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                        <FaJsSquare className="text-[40px] text-gray-500" />
                        <h1 className="text-gray-500 text-[25px] font-bold">JAVASCRIPT</h1>
                        {/* <FontAwesomeIcon icon="fa-brands fa-js" /> */}
                    </div>
                    <div className="flex items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                        <FaBootstrap className="text-[40px] text-gray-500" />
                        <h1 className="text-gray-500 text-[25px] font-bold">BOOTSTRAP</h1>
                    </div>
                    <div className="flex items-center col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                        <FaReact className="text-[40px] text-gray-500" />
                        <h1 className="text-gray-500 text-[25px] font-bold">REACT</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


