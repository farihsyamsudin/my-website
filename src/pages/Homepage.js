import Nav from "../component/Nav"
import Hero from "./homepage/Hero"
import Background from "./homepage/background/Background"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Homepage = () => {
    useEffect(() => {
        Aos.init({
            offset: 50, // offset (in px) from the original trigger point
            delay: 100, // values from 0 to 3000, with step 50ms
            duration: 700, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
        });
    }, [])

    return (
        <section className="bg-thirdry min-h-screen">
            <Nav />
            <Hero />
            {/* <div data-aos="zoom-in" className="relative">
                    <span className="w-full h-[2px] bg-secondary absolute centering-absolute"></span>
                    <h3 className="w-fit px-4 py-2 bg-secondary text-white font-fredoka rounded-md mx-auto text-2xl sm:text-4xl lg:text-5xl mb-[30px] uppercase relative z-10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                </div> */}
            <Background  />
        </section>
    )
}

export default Homepage