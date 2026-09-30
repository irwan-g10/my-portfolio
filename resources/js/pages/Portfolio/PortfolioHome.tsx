
import Footer from '@/components/Navigation/Footer';
import Navbar from '@/components/Navigation/Navbar';
import CertificationSection from '@/components/portofolio/CertificationSection';
import HeroSection from '@/components/portofolio/HeroSection';
import HireSection from '@/components/portofolio/HireSection';
import JourneySection from '@/components/portofolio/JourneySection';
import OfferingSection from '@/components/portofolio/OfferingSection';
import ProjectSection from '@/components/portofolio/ProjectSection';
import ToolsAndSkillSection from '@/components/portofolio/ToolsAndSkillSection';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <HeroSection />
                <OfferingSection />
                <ToolsAndSkillSection />
                <CertificationSection />
                <ProjectSection />
                <JourneySection />
                <HireSection />
            </main>
            
            <Footer />
        </>

        
    )
}
