import spongebob from "../assets/SpongebobHuh.gif";
import lookingaround from "../assets/looking around.gif";
import incomplete from "../assets/incomplete.gif";
export default function NotFound() {
    const gifs = [spongebob, lookingaround, incomplete];
    return (
        <div className="h-full flex flex-col justify-center min-h-fit gap-3">
            <span className="text-text-light dark:text-text-dark text-lg lg:text-6xl text-center">Huh... I don't remember that page.</span>
            <span className="text-text-light dark:text-text-dark text-lg lg:text-6xl text-center">In other words, 404.</span>
            <img src={gifs[Math.floor(Math.random()*3)]} alt="Spongebob" className="w-1/2 mx-auto" />
        </div>
    )
}