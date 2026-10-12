import OfferingCard from '@/components/Common/OfferingCard';
import SectionTitle from '@/components/ui/SectionTitle';

export default function OfferingSection() {
    return (
        <div className="mx-auto mb-10 w-4/5">
            <SectionTitle title="What Do I Offer" />
            <div className="flex flex-col items-end gap-10 md:flex-row">
                <OfferingCard />
                <OfferingCard />
                <OfferingCard />
            </div>
        </div>
    );
}
