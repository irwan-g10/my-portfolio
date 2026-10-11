
import ExpandableButton from '@/components/ui/ExpandableButton';
import Footer from '@/components/Navigation/Footer';
import Navbar from '@/components/Navigation/Navbar';
import { Head, Link, usePage } from '@inertiajs/react';
import { useTheme } from '@/hooks/useTheme';
import ScrollToTop from '@/components/Common/ScrollToTop';
import { SharedData } from '@/types';
import HeroSection from '@/components/Section/Portofolio/HeroSection';
import AboutSection from '@/components/Section/Portofolio/AboutSection';
import OfferingSection from '@/components/Section/Portofolio/OfferingSection';
import ToolsAndSkillSection from '@/components/Section/Portofolio/ToolsAndSkillSection';
import CertificationSection from '@/components/Section/Portofolio/CertificationSection';
import ProjectSection from '@/components/Section/Portofolio/ProjectSection';
import JourneySection from '@/components/Section/Portofolio/JourneySection';
import ContactMeSection from '@/components/Section/Portofolio/ContactMeSection';

export default function Home() {

    const { theme, toggleTheme } = useTheme();

        const { auth } = usePage<SharedData>().props;


    return (
        <>
            <Head title='Vantomic Studio' />
            <div
                className="
                relative 
                bg-slate-100
                text-slate-950
                dark:text-slate-100 dark:bg-slate-950
                "

            >

                <Navbar onClick={toggleTheme} theme={theme} auth={auth}/>
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


    )
}
