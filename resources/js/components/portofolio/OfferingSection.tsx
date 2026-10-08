import OfferingCard from "../Common/OfferingCard";
import SectionTitle from "../Common/SectionTitle";


export default function OfferingSection() {
    return (
        <div className="w-4/5 mx-auto mb-10">
            <SectionTitle title='What Do I Offer'/>
            <div className="flex flex-col md:flex-row gap-10 items-end ">
                <OfferingCard />
                <OfferingCard scale='md:scale-110'/>
                <OfferingCard />
            </div>
        </div>
    )
}