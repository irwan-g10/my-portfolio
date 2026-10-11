import OfferingCard from "@/components/Common/OfferingCard";
import SectionTitle from "@/components/ui/SectionTitle";


export default function OfferingSection() {
    return (
        <div className="w-4/5 mx-auto mb-10">
            <SectionTitle title='What Do I Offer'/>
            <div className="flex flex-col md:flex-row gap-10 items-end ">
                <OfferingCard />
                <OfferingCard/>
                <OfferingCard />
            </div>
        </div>
    )
}