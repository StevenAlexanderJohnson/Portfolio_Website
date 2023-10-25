import { useParallax } from "react-scroll-parallax"
import constructionBarrier from "../assets/construction barrier.png";
import constructionMan from "../assets/construction man.png";
import sunglassEmoji from "../assets/sungless emoji.png";

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
        speed: -10,
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
                    I am a pationate full-stack developer who loves to <span className="text-accent-light dark:text-accent-dark text-lg">create</span> and <span className="text-accent-light dark:text-accent-dark text-lg">learn</span>.
                    I am pationate about <span className="text-accent-light dark:text-accent-dark text-lg">life long learning</span> and exploring new technology.
                    Alongside learning, I also enjoy <span className="text-accent-light dark:text-accent-dark text-lg">helping</span> others by teaching them what I know when I can.
                </div>
                <div>
                    My hobbies include <span className="text-accent-light dark:text-accent-dark text-lg">gaming</span>, <span className="text-accent-light dark:text-accent-dark text-lg">coding</span>, and <span className="text-accent-light dark:text-accent-dark text-lg">keeping my dog occupied</span>.
                    Recently I've been focused on brushing up my fundimentals with <span className="text-accent-light dark:text-accent-dark text-lg">LeetCode</span> and <span className="text-accent-light dark:text-accent-dark text-lg">CodeSignal</span>.
                </div>
                <div>
                    <img src={sunglassEmoji} alt="sunglass emoji" className="w-1/4 h-1/4 mx-auto" />
                </div>

                <div className="md:col-span-2 w-full flex flex-row justify-center pb-10">
                    <div className="text-text-light dark:text-text-dark text-center">
                        <h2 className="text-text-light dark:text-text-dark text-2xl md:text-4xl pb-5">
                            What am I working on Now?
                        </h2>
                        My current project is called <span className="text-accent-light dark:text-accent-dark text-xl">Freighter</span>, a game server hosting platform that has a usage based payment plan.
                        More information can be found in my blog post <a className="underline underline-offset-4 text-accent-light dark:text-accent-dark text-xl" href="https://hackernoon.com/dev-log-1-introducing-freighter" target="_blank">here</a>.
                        You can also read more about it in the blog on this site as well as the <span className="underline underline-offset-4 text-accent-light dark:text-accent-dark text-xl">Projects</span> section (once it gets added that is 👍).
                    </div>
                </div>
            </div>
        </>
    )
}