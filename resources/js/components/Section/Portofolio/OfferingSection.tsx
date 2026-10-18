import OfferingCard from '@/components/Common/OfferingCard';
import SectionTitle from '@/components/ui/SectionTitle';

export default function OfferingSection() {
    return (
        <div className="mx-auto mb-10 w-4/5">
            <SectionTitle title="What Do I Offer" />
            {/* <div className="m-5 flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                delectus ratione repellendus! Cumque saepe facilis modi enim
                dolore delectus ut, dolorem quos rem aut vitae dicta eum iure!
                Perspiciatis?
            </div> */}
            <div className="flex flex-col items-end gap-10 md:flex-row">
                <div className="transform transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:-rotate-5">
                    <OfferingCard />
                </div>
                <div className="transition-transform duration-300 hover:-translate-y-5 hover:scale-105">
                    <OfferingCard />
                </div>
                <div className="transition-transform duration-300 hover:-translate-y-5 hover:scale-105 hover:rotate-5">
                    <OfferingCard />
                </div>
            </div>
        </div>
    );
}
