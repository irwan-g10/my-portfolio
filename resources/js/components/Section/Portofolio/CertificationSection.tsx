import CertificationCard from '@/components/Common/CertificationCard';
import ExpandableButton from '@/components/ui/ExpandableButton';
import SectionTitle from '@/components/ui/SectionTitle';
import { useState } from 'react';

export default function CertificationSection() {
    const [expandVisible, setExpandVisible] = useState(false);

    const onExpandClick = () => {
        setExpandVisible((prev) => !prev);
    };
    return (
        <div className="relative mx-auto mb-10 w-4/5">
            <SectionTitle title="My Certification" />
            <div className="mb-5 grid gap-2">
                <CertificationCard />
                <CertificationCard />
                <CertificationCard />
            </div>

            <div className="flex items-center justify-center">
                <ExpandableButton
                    title="Lihat Lebih Banyak"
                    onClick={onExpandClick}
                    isVisible={expandVisible}
                />
            </div>
        </div>
    );
}
