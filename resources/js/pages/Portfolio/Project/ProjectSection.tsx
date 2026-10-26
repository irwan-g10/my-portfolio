import ExpandableButton from '@/components/ui/ExpandableButton';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectList from '@/pages/Portfolio/Project/Components/ProjectList';
import { useState } from 'react';

export default function ProjectSection() {
    const [expandVisible, setExpandVisible] = useState(false);

    const onExpandClick = () => {
        setExpandVisible((prev) => !prev);
    };
    return (
        <div
            className={`relative mx-auto mt-10 ${expandVisible ? '' : 'h-screen overflow-hidden'}`}
            id="project"
        >
            <div className="mx-auto w-4/5">
                <SectionTitle title="Latest Project" />
            </div>

            <div className="project-list relative">
                <ProjectList />
            </div>
            <div className="mx-auto flex w-4/5 items-center justify-center py-10">
                <ExpandableButton
                    title="Lihat Lebih Banyak"
                    onClick={onExpandClick}
                    isVisible={expandVisible}
                />
            </div>
        </div>
    );
}
