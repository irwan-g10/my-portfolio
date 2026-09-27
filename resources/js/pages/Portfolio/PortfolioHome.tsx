import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navigation/Navbar';
import ProjectSection from '@/components/ProjectSection';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Navbar />

            <main>
                <HeroSection />
                <ProjectSection />
                
            </main>

            

            

            <div className="skill ">
                <h1>What I Do</h1>
            </div>
            <div className="project-count">Project Count</div>
            <div className="why-hire-me">Why Hire Me</div>
            <div className="journey">My Journey</div>
            <div className="tools-and-skills">Tools and Skills</div>
            <div className="footer">Footer</div>
        </>

        
    )
}
