import { useParallax } from "react-scroll-parallax"
import constructionBarrier from "../assets/construction barrier.png";
import constructionMan from "../assets/construction man.png";

export default function Home() {
    const parallax = useParallax<HTMLDivElement>({
        easing: 'easeInOutCirc',
        translateX: [0, -50],
        startScroll: 0,
        endScroll: 1000,
        opacity: [1, 0],
        speed: 0.5,
    });
    let aboutMe = useParallax<HTMLHeadingElement>({
        speed: -6,
    });
    // use ref for the home content
    return (
        <>
            <div className="w-5/6 flex flex-col justify-center bg-text mx-auto h-full" ref={parallax.ref}>
                <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl">
                    Hey, my name is
                    <br />
                    <span className="text-5xl md:text-7xl text-accent-light dark:text-accent-dark">Steven</span>.
                </h1>
                <span className="text-text-light dark:text-text-dark">
                    Welcome to my Website
                </span>
            </div>
            <div className="h-screen lg:m-32">
                <h2 className="text-text-light dark:text-text-dark text-4xl md:text-5xl text-center px-10">
                    Please Excuse the mess, this site is still under construction.
                </h2>
                <div className="flex justify-around relative">
                    <img src={constructionBarrier} alt="construction barrier" className="w-1/2 h-1/2" />
                    <img src={constructionBarrier} alt="construction barrier" className="w-1/2 h-1/2" />
                    <img src={constructionMan} alt="construction man" className="absolute h-2/3 mx-auto" />
                </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center items-center md:grid-cols-2 gap-10 w-5/6 mx-auto h-full" id="about">
                <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl" ref={aboutMe.ref}>
                    About <span className="text-accent-light dark:text-accent-dark">Me</span>
                </h1>
                <div>
                    I am a pationate developer who loves to <span className="text-accent-light dark:text-accent-dark">create</span> and <span className="text-accent-light dark:text-accent-dark">learn</span>.
                    I am pationate about <span className="text-accent-light dark:text-accent-dark">life long learning</span> and exploring new technology.
                </div>
                <div>
                    My hobbies include <span className="text-accent-light dark:text-accent-dark">gaming</span>, <span className="text-accent-light dark:text-accent-dark">coding</span>, and <span className="text-accent-light dark:text-accent-dark">keeping my dog occupied</span>.
                </div>
                <div className="md:col-span-2 w-full flex flex-row gap-2">
                    <div className="text-text-light dark:text-text-dark">
                        I am currently working on <span className="text-accent-light dark:text-accent-dark">Freighter</span> and <span className="text-accent-light dark:text-accent-dark">a discord bot</span>.
                        I am currently learning <span className="text-accent-light dark:text-accent-dark">React</span> and <span className="text-accent-light dark:text-accent-dark">Typescript</span>.
                    </div>
                </div>
            </div>
        </>
    )
}