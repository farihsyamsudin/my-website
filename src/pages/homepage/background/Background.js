import Footer from "../../../component/Footer"
import TitleSection from "../../../component/TitleSection"
import EducationSec from "./EducationSec"
import SkillsSec from "./SkillsSec"
import ToolsSec from "./ToolsSec"

const Background = () => {
    return (
        <>
        <div id="more" className="px-[20px] pb-[20px]">
            <TitleSection title="Education" description="My education and sertification" />
            <EducationSec/>
            <TitleSection title="Skills" description="My skills" />
            <SkillsSec/>
            <ToolsSec/>
        </div>
        <Footer/>
        </>
    )
}

export default Background