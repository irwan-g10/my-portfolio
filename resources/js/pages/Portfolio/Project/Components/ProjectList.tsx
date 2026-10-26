import { useEffect, useState } from 'react';
import Button from '../../../../components/ui/Button';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
    const [isVisible, setIsVisible] = useState(false);
    const [expandVisible, setExpandVisible] = useState(false);

    const onExpandClick = () => {
        setExpandVisible((prev) => !prev);
    };

    const toggleShowProject = () => {
        setIsVisible((prev) => !prev);
    };
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    return (
        <div className="relative m-5">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-5">
                <ProjectCard onClick={toggleShowProject} />
                <ProjectCard onClick={toggleShowProject} />
                <ProjectCard onClick={toggleShowProject} />
                <ProjectCard onClick={toggleShowProject} />
                <ProjectCard onClick={toggleShowProject} />
                <ProjectCard onClick={toggleShowProject} />
            </div>
            {isVisible && (
                <div className="fixed inset-x-0 top-0 z-70 mx-auto h-full w-full bg-slate-400/10 backdrop-blur-sm">
                    <div className="absolute inset-0 m-auto h-4/5 w-4/5 overflow-y-auto rounded-lg bg-slate-950">
                        <div className="relative m-10">
                            <Button
                                title="close"
                                className="fixed top-5 right-5 w-fit text-slate-950"
                                onClick={toggleShowProject}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
