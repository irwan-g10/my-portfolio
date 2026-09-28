import CertificationSection from '@/components/CertificationSection';
import HeroSection from '@/components/HeroSection';
import HireSection from '@/components/HIreSection';
import JourneySection from '@/components/JourneySection';
import Footer from '@/components/Navigation/Footer';
import Navbar from '@/components/Navigation/Navbar';
import OfferingSection from '@/components/OfferingSection';
import ProjectSection from '@/components/ProjectSection';
import ToolsAndSkillSection from '@/components/ToolsAndSkillSection';
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
