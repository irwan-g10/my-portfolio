import ScrollToTop from '@/components/Common/ScrollToTop';
import Footer from '@/components/Navigation/Footer';
import Navbar from '@/components/Navigation/Navbar';
import AboutSection from '@/components/Section/Portofolio/AboutSection';
import CertificationSection from '@/components/Section/Portofolio/CertificationSection';
import ContactMeSection from '@/components/Section/Portofolio/ContactMeSection';
import HeroSection from '@/components/Section/Portofolio/HeroSection';
import JourneySection from '@/components/Section/Portofolio/JourneySection';
import OfferingSection from '@/components/Section/Portofolio/OfferingSection';
import ProjectSection from '@/components/Section/Portofolio/ProjectSection';
import ToolsAndSkillSection from '@/components/Section/Portofolio/ToolsAndSkillSection';
import { useTheme } from '@/hooks/useTheme';
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Home() {
    const { theme, toggleTheme } = useTheme();

    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Vantomic Studio" />
            <div className="relative bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
                <Navbar
                    onClick={toggleTheme}
                    theme={theme}
                    auth={auth}
                />
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
                <ScrollToTop />
                <Footer />
            </div>
        </>
    );
}
