import { useState, useRef, useEffect } from 'react';

// Data
// export default function Carousel(prop: { data: Resource[] }) {
//     const maxScrollWidth = useRef(0);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carousel = useRef<HTMLDivElement | null>(null);

//     const data = prop.data;

//     const movePrev = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex((prevState) => prevState - 1);
//         }
//     };

//     const moveNext = () => {
//         if (
//             carousel.current !== null &&
//             carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//         ) {
//             setCurrentIndex((prevState) => prevState + 1);
//         }
//     };

//     const isDisabled = (direction: 'prev' | 'next') => {
//         if (direction === 'prev') {
//             return currentIndex <= 0;
//         }

//         if (direction === 'next' && carousel.current !== null) {
//             return (
//                 carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//             );
//         }

//         return false;
//     };

//     useEffect(() => {
//         if (carousel !== null && carousel.current !== null) {
//             carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//         }
//     }, [currentIndex]);

//     useEffect(() => {
//         maxScrollWidth.current = carousel.current
//             ? carousel.current.scrollWidth - carousel.current.offsetWidth
//             : 0;
//     }, []);

//     return (
//         <div className="relative m-10 h-5/6">
//             <h2 className="text-text-light dark:text-text-dark text-4xl md:text-6xl text-center">
//                 Projects
//             </h2>
//             <div className="relative">
//                 <button
//                     onClick={movePrev}
//                     className="hover:bg-accent-light/75 absolute top-0 left-0 h-full hover:dark:bg-accent-dark text-white w-10 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//                     disabled={isDisabled('prev')}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-12 w-20 -ml-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M15 19l-7-7 7-7"
//                         />
//                     </svg>
//                     <span className="sr-only">Prev</span>
//                 </button>
//                 <button
//                     onClick={moveNext}
//                     className="hover:bg-accent-light/75 absolute top-0 right-0 h-full hover:dark:bg-accent-dark text-white w-10 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//                     disabled={isDisabled('next')}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-12 w-20 -ml-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M9 5l7 7-7 7"
//                         />
//                     </svg>
//                     <span className="sr-only">Next</span>
//                 </button>
//                 <div
//                     ref={carousel}
//                     className="h-full relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//                 >
//                     {data.map((resource, index) => {
//                         return (
//                             <div
//                                 key={index}
//                                 className="text-center relative min-w-full h-full snap-start"
//                             >
//                                 <a
//                                     href={resource.link}
//                                     className=" w-full h-full block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                                     style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
//                                 >
//                                     <img
//                                         src={resource.imageUrl || ''}
//                                         alt={resource.title}
//                                         className="w-full  hidden"
//                                     />
//                                 </a>
//                                 <a
//                                     href={resource.link}
//                                     className="h-full w-full block absolute top-0 left-0 transition-opacity duration-300 bg-secondary-light dark:bg-secondary-dark"
//                                 >
//                                     <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                                         {resource.title}
//                                     </h3>
//                                 </a>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };
