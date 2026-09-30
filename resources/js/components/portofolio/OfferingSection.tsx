import OfferingCard from "../Common/OfferingCard";
import SectionTitle from "../Common/SectionTitle";


export default function OfferingSection() {
    return (
        <div className="container mb-5">
            <SectionTitle title='What Do I Offer'/>
            <div className=" d-flex gap-3">
                <OfferingCard />
                <OfferingCard />
                <OfferingCard />
            </div>
        </div>
    )
}