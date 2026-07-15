import AboutHero from "../Components/About/AboutHero";
import MissionVision from "../Components/About/MissionVision";
import LeadershipMessages from "../Components/About/LeadershipMessages";
import WhyChooseUsAbout from "../Components/About/WhyChooseUsAbout";
import QualityPolicy from "../Components/About/QualityPolicy";
import CounsellingProcess from "../Components/About/CounsellingProcess";

function About() {
    return (
        <>
            <AboutHero />
            <LeadershipMessages />
            <MissionVision />
            <WhyChooseUsAbout />
            <QualityPolicy />
            <CounsellingProcess />
        </>
    )
}

export default About;