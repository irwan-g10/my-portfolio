
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
import { Head, Link, usePage } from '@inertiajs/react';
import HeroSection from '@/components/portofolio/HeroSection';
import { useTheme } from '@/hooks/useTheme';
import ScrollToTop from '@/components/Common/ScrollToTop';
import { SharedData } from '@/types';

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
