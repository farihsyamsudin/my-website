import Nav from "../component/Nav"
import TitleSection from "../component/TitleSection"
import Aos from 'aos'
import 'aos/dist/aos.css';
import Footer from "../component/Footer";
import { useEffect } from 'react'
import CardProject from "../component/CardProject";
import biorythmProject from "../image/biorythm-project.png"
import weatherProject from "../image/weather-project.png"
import mangroviaProject from "../image/mangrovia-project.png"
import webgisProject from "../image/webgis-project.png"
import pboProject from "../image/pbo-project.png"
import daminProject from "../image/damin-project.png"
import desbinProject from "../image/desbin-project.png"
import logkelProject from "../image/logkel-project.png"

const ProjectShowcase = () => {
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
            <div className="py-[30px] px-[20px]">
                <TitleSection title="My Projects" description="Several projects that I have created. For some reason. for some reason, the only viewable application is the frontend application, which is available for free hosting. but for other projects, it will be directed to github" />
                <div className="flex gap-10 flex-wrap justify-center pb-[40px]">
                    <CardProject projecttitle="Biorythm Calculator" projectdesc="Biorhythms are calculated based on a person's date of birth and the number of days in the cycle. The cyclic nature of biorhythms lends itself to a sine function, which has maximums and minimums that occur at regular intervals. This project was created when I was taking a course using React Ionic." projecturl="https://biorythm-calculator.netlify.app/" projectimage={biorythmProject} />
                    <CardProject projecttitle="Weather Prediction API" projectdesc="A simple web app to predict weather on spesified city using Weather API. I created this website when I was asked to teach 3rd semester students about web programming (Consume API Module) when I was in 5th semester and became a teaching assistant." projecturl="https://forecasting-cuaca-api.netlify.app" projectimage={weatherProject} />
                    <CardProject projecttitle="Mangrovia (Mangrove Identification Area)" projectdesc="Web App using a machine learning to identify mangrove areas and what types are suitable for planting there. If the link cant be opened (Because the trial is over TT), you can open my github at https://github.com/farihsyamsudin/mangrovia" projecturl="https://mangrovia.onrender.com" projectimage={mangroviaProject} />
                    <CardProject projecttitle="Webgis Serang City" projectdesc="webgis to see the distribution of special places in the city of Serang. This website was created as a final assignment for a web programming course when I was in semester 3, for some reason. I can't host it, instead I will provide a github link for the source code" projecturl="https://github.com/farihsyamsudin/uas_pemweb" projectimage={webgisProject} />
                    <CardProject projecttitle="Website Desa Tejang Pulau Sabesi" projectdesc="This website was created in the context of the lecturer's devotion to Tejang Village, Sabesi Island. This website was created with the aim of improving e-government in the archipelago. My role in this project is to create backend system for this website" projecturl="https://desabinaantejangpulausebesi.com/" projectimage={desbinProject} />
                    <CardProject projecttitle="Predict Fish Morphometrics Based on Chlorophyll-a and Sea Surface Temperature" projectdesc="a simple web application that I created using flask, in the final assignment of the data mining course. functions to predict fish morphometrics based on chlorophyll-a input and sea surface temperature. This website uses regression analysis in machine learning to predict the length of the fish. unfortunately I have finished the trial deploy, so I can only provide the source code that I have created." projecturl="https://github.com/farihsyamsudin/prediksi-panjang-ikan" projectimage={daminProject} />
                    <CardProject projecttitle="OOP Final Project" projectdesc="This website was created to complete the final assignment of Object-Oriented Programming using Django. I created this web app together with my friend to manage catch data at the Nusantara Karangantu Fishing Port, and there are other features such as chlorophyll-a and SPL estimation, as well as Wave API. For some other reasons, unfortunately I have finished the trial deploy, so I can only provide the source code that I have created." projecturl="https://github.com/farihsyamsudin/projectuas" projectimage={pboProject} />
                    <CardProject projecttitle="Marine Logistics Study Program Website" projectdesc="Creating a website for the Marine Logistics study program at the request of a lecturer from the study program. Using WordPress with a processing time of approximately 3 weeks with a team of 3 people" projecturl="https://logkel-kdserang.upi.edu/" projectimage={logkelProject} />
                </div>
                <TitleSection title="" description="I apologize if many projects cannot be shown directly, but I would be very happy if you contact me to see the projects I have made. I will respond to run it via tunneling server ^^. Thank you, hope you enjoy my project showcase." />
            </div>
            <Footer/>
        </section>
    )
}

export default ProjectShowcase