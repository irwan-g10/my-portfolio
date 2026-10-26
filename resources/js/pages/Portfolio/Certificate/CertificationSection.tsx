import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import { useState } from 'react';
import CertificationCard from './Components/CertificationCard';

export default function CertificationSection() {
    const [expandVisible, setExpandVisible] = useState(false);

    const onExpandClick = () => {
        setExpandVisible((prev) => !prev);
    };
    return (
        <div className="relative mx-auto mb-10 flex flex-col items-center justify-center">
            <div className="w-4/5">
                <SectionTitle title="My Certification" />
            </div>
            <div className="mx-10 flex items-center gap-10">
                <div className="">
                    <Button icon={<i className="bi bi-arrow-left-short"></i>} />
                </div>
                <div className="mb-5 grid gap-2">
                    <CertificationCard />
                    <CertificationCard />
                    <CertificationCard />
                </div>
                <div>
                    <Button
                        icon={<i className="bi bi-arrow-right-short"></i>}
                    />
                </div>
            </div>

            {/* <div className="flex items-center justify-center">
                <ExpandableButton
                    title="Lihat Lebih Banyak"
                    onClick={onExpandClick}
                    isVisible={expandVisible}
                />
            </div> */}
        </div>
    );
}
