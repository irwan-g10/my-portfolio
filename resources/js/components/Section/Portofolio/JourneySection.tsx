import JourneyItemCard from '@/components/Common/JourneyItemCard';
import ExpandableButton from '@/components/ui/ExpandableButton';
import SectionTitle from '@/components/ui/SectionTitle';

export default function JourneySection() {
    return (
        <div className="relative mx-auto w-4/5">
            <SectionTitle title="My Journey" />
            <div></div>

            <JourneyItemCard />
            <ExpandableButton title="Lihat Lebih Banyak" />
        </div>
    );
}
