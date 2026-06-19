// import Banner from "../Components/Home/Banner";
import Accreditation from "../Components/Home/Accreditation";
import Banner from "../Components/Home/Banner";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Layout/Footer/Footer";
import Navbar from "../Components/Layout/Navber";
import ServiceBanners from "../Components/Home/serviceBanners";
import FloatingButton from "../Components/Home/FloatingButton";
import TrustSignals from "../Components/Home/TrustSignals";
import TestimonialsSection from "../Components/Home/Testimonials/Testimonials";

function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner />
            <FloatingButton />
            <TrustSignals />
            {/* <Hero /> */}
            <ServiceBanners />
            <Accreditation />
            <TestimonialsSection />
            {/* <Footer /> */}

        </div>
    );
}

export default Home;