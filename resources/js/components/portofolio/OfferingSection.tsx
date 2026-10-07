import OfferingCard from "../Common/OfferingCard";
import SectionTitle from "../Common/SectionTitle";


export default function OfferingSection() {
    return (
        <div className="w-4/5 mx-auto mb-10">
            <SectionTitle title='What Do I Offer'/>
            <div className="flex gap-10 items-end ">
                <OfferingCard />
                <OfferingCard scale='scale-110'/>
                <OfferingCard />
            </div>
        </div>
    )
}