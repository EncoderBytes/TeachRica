import About from "./HomePageComponent/About";
import GrowLearning from "./HomePageComponent/GrowLearning";
import HelpUs from "./HomePageComponent/HelpUs";
import LittleInfo from "./HomePageComponent/LittleInfo";
import OurClient from "./HomePageComponent/OurClient";

export default function HomePage() {
    return (
        <>
            <div className="w-100 overflow-hidden">
                <GrowLearning />

                <LittleInfo />

                <About />
                <OurClient/>
                <HelpUs/>
            </div>
        </>
    )
}