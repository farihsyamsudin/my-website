import heroImage from '../../image/hero.png'

const Hero = () => {
    return (
        <div className="px-[20px] sm:py-[80px] sm:flex w-full gap-[100px] items-center justify-center">
            <div data-aos="fade-down" className="relative sm:pb-0 mb-[60px] vert-move-horizontal">
                <img src={heroImage} alt="" className="w-[250px] mx-auto block relative z-20" />
                <svg className="centering-blob z-[1] w-[320px] md:w-[450px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#5A72A0" d="M31.4,-57.4C42.9,-47.8,56,-43.8,60.4,-35.2C64.9,-26.6,60.6,-13.3,63.3,1.6C66.1,16.5,75.8,32.9,72,42.6C68.3,52.3,50.9,55.3,36.7,59.7C22.4,64.2,11.2,70.1,-2.6,74.7C-16.5,79.2,-32.9,82.4,-45.9,77.2C-58.9,72,-68.4,58.5,-69.3,44.2C-70.3,30,-62.7,15,-62.7,0C-62.6,-14.9,-70.1,-29.9,-69.1,-44C-68.1,-58.2,-58.6,-71.7,-45.7,-80.5C-32.8,-89.4,-16.4,-93.7,-3.2,-88.1C9.9,-82.5,19.9,-67.1,31.4,-57.4Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="relative z-20 sm:max-w-[300px] lg:max-w-[600px] sm:pb-0 pb-20">
                <p data-aos="zoom-in" className="lg:text-8xl text-4xl text-secondary font-bold uppercase font-fredoka">I<span className="tracking-wide">ntroduce!</span></p>
                <p data-aos="zoom-in" className="text-2xl lg:text-5xl pb-[15px] text-primary font-pt-sans">Farih Syamsudin</p>
                <p data-aos="fade-up" className="text-fourthry font-oswald tracking-wider lg:text-base text-sm">Web Developer || Data Science || Cybersecurity</p>
                <p data-aos="fade-down" className="py-[15px] font-oswald tracking-wider lg:text-base text-sm">In this era of rapid technological advancement, I have devoted countless hours to exploring various fields, particularly web application development, data science and cybersecurity. (I'm a developer not designer)</p>
                <a data-aos="zoom-out" href="#more"><button className=" py-2 px-4 bg-primary text-slate-100 rounded-full hover:bg-secondary font-fredoka lg:text-base text-sm">Get Know About Me!</button></a>
            </div>
        </div>
    )
}

export default Hero