import JourneyItemCard from '@/components/Common/JourneyItemCard';
import SectionTitle from '@/components/ui/SectionTitle';

export default function JourneySection() {
    return (
        <div className="mx-auto w-4/5">
            <SectionTitle title="My Journey" />

            <div className="flex">
                <div className="flex-1"></div>
                <div className="relative flex items-center">
                    <div className="absolute inset-y-25 ms-5 w-1 rounded-full bg-amber-500"></div>
                    <div className="flex flex-col gap-5">
                        <JourneyItemCard />
                        <JourneyItemCard />
                        <JourneyItemCard />
                    </div>
                </div>
            </div>
            {/* <ExpandableButton title="Lihat Lebih Banyak" /> */}
        </div>
    );
}
