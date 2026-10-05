
import ExpandableButton from '@/components/Common/ExpandableButton';
import DotField from '@/components/DotField';
import Footer from '@/components/Navigation/Footer';
import Navbar from '@/components/Navigation/Navbar';
import CertificationSection from '@/components/portofolio/CertificationSection';
import ContactMeSection from '@/components/portofolio/ContactMeSection';
import AboutSection from '@/components/portofolio/AboutSection';
import JourneySection from '@/components/portofolio/JourneySection';
import OfferingSection from '@/components/portofolio/OfferingSection';
import ProjectSection from '@/components/portofolio/ProjectSection';
import ToolsAndSkillSection from '@/components/portofolio/ToolsAndSkillSection';
import { Link } from '@inertiajs/react';
import HeroSection from '@/components/portofolio/HeroSection';

export default function Home() {
    return (
        <>
            {/* <div className='w-screen h-screen overflow-x-hidden relative' >
                <div className=" fixed inset-0 z-0 pointer-events-none" style={{backgroundColor: '#120F16'}}>
                    <DotField
                        dotRadius={1.5}
                        dotSpacing={14}
                        bulgeStrength={67}
                        glowRadius={160}
                        sparkle={false}
                        waveAmplitude={0}
                        cursorRadius={500}
                        cursorForce={0.1}
                        bulgeOnly
                        gradientFrom="#A855F7"
                        gradientTo="#B497CF"
                        glowColor="#120F17"
                    />
                </div> */}

            {/* <div className="relative z-10"> */}
            

            <div className=" relative text-white" style={{ backgroundColor: '#120F16' }}>

                <Navbar />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <OfferingSection />
                    <ToolsAndSkillSection />
                    <CertificationSection />
                    <ProjectSection />
                    <JourneySection />
                    <ContactMeSection />
                </main>
                <Footer />
            </div>
            {/* </div> */}
            {/* </div> */}


        </>


    )
}
