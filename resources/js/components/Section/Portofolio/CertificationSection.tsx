import CertificationCard from '@/components/Common/CertificationCard';
import ExpandableButton from '@/components/ui/ExpandableButton';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CertificationSection() {
    return (
        <div className="relative mx-auto mb-10 w-4/5">
            <SectionTitle title="My Certification" />
            <div className="mb-5 grid gap-2">
                <CertificationCard />
                <CertificationCard />
                <CertificationCard />
            </div>
            <div className="flex items-center justify-center">
                <ExpandableButton title="Lihat Lebih Banyak" />
            </div>
        </div>
    );
}
