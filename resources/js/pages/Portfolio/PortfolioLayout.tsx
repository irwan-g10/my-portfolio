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
import ShapeGrid from '@/components/ShapeGrid';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useTheme } from '@/hooks/useTheme';
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function PortfolioLayout() {
    const { theme, toggleTheme } = useTheme();

    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Vantomic Studio" />
            <div className="relative bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100">
                <div className="relative z-10">
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
                <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
                    <ShapeGrid
                        shape="square"
                        direction="diagonal"
                        lineColor="#2a2734"
                        hoverColor="#ffffff"
                        hoverFillColor="#ffffff"
                        fillOpacity={0.15}
                        cellSize={40}
                        speed={0.5}
                        tiltX={0}
                        tiltY={0}
                        rainbow={false}
                        lineWidth={1}
                        radius={1.5}
                        trail={0.6}
                        glow={0.35}
                        twinkle={0}
                        fade={1}
                        clickCascade={false}
                        intro
                    />
                </div>
            </div>
        </>
    );
}
