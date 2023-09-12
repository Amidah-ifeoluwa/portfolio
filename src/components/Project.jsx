import React from 'react'
import Filmbyoasis from './Filmbyoasis'
import WeAid from './Weaid'
import Philipmix from './Philipmix'
import Authentication from './Authentication'
import Bata from './Bata'
import Landingpage from './Landingpage'
import Auth from './Auth'
import Calculator from './Calculator'

// const RevealOnScroll = ({ children }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef(null);

//     useEffect(() => {
//         const onWindScroll = () => {
//             const element = ref.current;
//             if (element) {
//                 const { top } = element.getBoundingClientRect();
//                 const isVisible = top < window.innerHeight;
//                 setIsVisible(isVisible);
//             }
//         };

//         window.addEventListener("scroll", onWindScroll);
//         return () => {
//             window.removeEventListener("scroll", onWindScroll);
//         };
//     }, []);

//     const classes = `transition-opacity duration-1000
//         ${isVisible ? "opacity-100" : "opacity-0"
//         }`;

//     return (
//         <div ref={ref} className={classes}>
//             {children}
//         </div>
//     );
// };

const Project = ({ oasis, we, philip, auth, ba, landing, au, calc }) => {
    return (
        <div>
            <div>
                <div className=' relative block md:pl-72 md:p-24 py-10 text-lime-100 bg-black md:text-left text-center'>
                    <h4 className='text-[14px] text-blue-700  pb-5'>WORKING WITH IFEOLUWA</h4>
                    <h1 className='text-[20px] md:text-[50px] leading-none'>Take a look at some of my latest <br />projects that I’ve been working on.</h1>
                </div>
            </div>
            <div className='flex justify-around'>
                <Filmbyoasis oasis={oasis} />
                <WeAid we={we} />
            </div>
            <div className='flex justify-around'>
                <Philipmix philip={philip} />
                <Authentication auth={auth} />
            </div>
            <div className='flex justify-around'>
                <Bata ba={ba} />
                <Landingpage landing={landing} />
            </div>
            <div className='flex justify-around'>
                <Auth au={au} />
                <Calculator calc={calc} />
            </div>

        </div>
    )
}

export default Project