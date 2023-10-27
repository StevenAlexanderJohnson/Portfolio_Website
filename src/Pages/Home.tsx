import { useParallax } from "react-scroll-parallax"
import ffga from "../assets/FFGA.png";

export interface Resource {
    title: string;
    description: string;
    link: string;
    linkText: string;
    imageUrl: string;
    parallax_ref: React.RefObject<HTMLLIElement>;
}
export default function Home() {
    const parallax = useParallax<HTMLDivElement>({
        startScroll: 0,
        endScroll: 1000,
        translateX: [0, -60],
        translateY: [0, 40],
        opacity: [1, 0],
    });
    let aboutMe = useParallax<HTMLHeadingElement>({
        translateY: [-100, 20]
    });

    const project_list: Resource[] = [
        {
            title: "Freighter",
            description: "A game server hosting platform that has a usage based payment plan. Currently in the process of porting over to AWS, but you can read about the progress in the link.",
            linkText: "Blog Post",
            link: "https://hackernoon.com/dev-log-1-introducing-freighter",
            imageUrl: ffga,
            parallax_ref: useParallax<HTMLLIElement>({ scale: [1, .9] }).ref,
        },
        {
            title: "Fantasy Football Genetic Algorithm",
            link: "https://github.com/StevenAlexanderJohnson/Fantasy_Football_GA",
            description: "A genetic algorithm that creates a fantasy football team based on the previous year's stats.",
            linkText: "Github",
            imageUrl: "",
            parallax_ref: useParallax<HTMLLIElement>({ scale: [1, .9] }).ref,
        },
        {
            title: "Buffer Game Launcher",
            description: "Buffer Game Launcher is a game launcher that allows you to launch games from any platform. It also allows you to add games from any platform to your library.",
            linkText: "Github",
            link: "https://github.com/StevenAlexanderJohnson/Buffer-Game-Launcher/tree/main",
            imageUrl: "#",
            parallax_ref: useParallax<HTMLLIElement>({ scale: [1, .9] }).ref,
        },
        {
            title: "Truck Catalogue and QR Code Generator",
            description: "This was a demo I created for my sister. It allows her to create a catalogue of her trucks and generate QR codes for each truck. The QR codes can then be printed and placed on the trucks.",
            linkText: "Github",
            link: "https://github.com/StevenAlexanderJohnson/Truck_API",
            imageUrl: "#",
            parallax_ref: useParallax<HTMLLIElement>({ scale: [1, .9] }).ref,
        },
    ]

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
                <span className="text-9xl absolute animate-wave origin-bottom-right right-10 hidden lg:block">
                    👋
                </span>
            </div>
            <div className="h-full mx-3 lg:mx-24 my-24 flex flex-col justify-center">
                <h2 className="text-text-light dark:text-text-dark text-4xl md:text-6xl text-center">
                    Great to meet you, I have some content down under for you to read. Then if you would like, you can send me an email.
                </h2>
                <div className="flex justify-around relative text-8xl">
                    🤜🤛
                </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center items-center md:grid-cols-2 gap-10 w-5/6 mx-auto min-h-full py-20" id="about">
                <h1 className="text-text-light dark:text-text-dark text-4xl md:text-6xl" ref={aboutMe.ref}>
                    About <span className="text-accent-light dark:text-accent-dark">Me</span>
                </h1>
                <div>
                    I am a passionate full-stack developer who loves to <span className="text-accent-light dark:text-accent-dark text-lg">create</span> and <span className="text-accent-light dark:text-accent-dark text-lg">learn</span>.
                    I am passionate about <span className="text-accent-light dark:text-accent-dark text-lg">life long learning</span> and exploring new technology.
                    Alongside learning, I also enjoy <span className="text-accent-light dark:text-accent-dark text-lg">helping</span> others by teaching them what I know when I can.
                </div>
                <div>
                    My hobbies include <span className="text-accent-light dark:text-accent-dark text-lg">gaming</span>, <span className="text-accent-light dark:text-accent-dark text-lg">coding</span>, and <span className="text-accent-light dark:text-accent-dark text-lg">keeping my dog occupied</span>.
                    Recently I've been focused on brushing up my fundamentals with <span className="text-accent-light dark:text-accent-dark text-lg">LeetCode</span> and <span className="text-accent-light dark:text-accent-dark text-lg">CodeSignal</span>.
                </div>
                <div className="text-9xl">
                    😁
                </div>

                <div className="md:col-span-2 w-full flex flex-row justify-center pb-10">
                    <div className="text-text-light dark:text-text-dark text-center">
                        <h2 className="text-text-light dark:text-text-dark text-2xl md:text-4xl pb-5">
                            What am I working on Now?
                        </h2>
                        My current project is called <span className="text-accent-light dark:text-accent-dark text-xl">Freighter</span>, a game server hosting platform that has a usage based payment plan.
                        More information can be found in my blog post <a className="underline underline-offset-4 text-accent-light dark:text-accent-dark text-xl" href="https://hackernoon.com/dev-log-1-introducing-freighter" target="_blank">here</a>.
                        You can also read more about it in the blog on this site as well as the <span className="text-accent-light dark:text-accent-dark text-xl">Projects</span> section just below.
                    </div>
                </div>
            </div>
            <div className="w-full min-h-full py-10" >
                <h2 className="text-text-light dark:text-text-dark text-4xl md:text-6xl text-center" id="projects">
                    Projects
                </h2>
                <ul className="list-none flex flex-col gap-10">
                    {
                        project_list.map((project, index) => {
                            return (
                                // Styling project card that has a description and a link to the github repo
                                <li className={`sticky p-10 bg-secondary-light dark:bg-secondary-dark my-10 w-10/12 sm:w-2/3 mx-auto shadow-lg rounded-lg border-2 border-accent-light dark:border-accent-dark min-h-[calc(100vh*.9)] overflow-auto flex flex-col items-center justify-around`} style={{ top: `${1 * (index + 1)}rem` }} key={index} ref={project.parallax_ref} >
                                    <h3 className="text-text-light dark:text-text-dark text-2xl md:text-4xl text-center">
                                        {project.title}
                                    </h3>
                                    <span className="text-text-light text-center dark:text-text-dark text-lg md:text-xl">
                                        {project.description}
                                    </span>
                                    <a className="text-white shadow-lg transition-all hover:shadow-accent-light/75 text-lg md:text-xl text-center underline underline-offset-4 bg-accent-light dark:bg-accent-dark rounded-full py-2 w-32" href={project.link} target="_blank">
                                        {project.linkText}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}