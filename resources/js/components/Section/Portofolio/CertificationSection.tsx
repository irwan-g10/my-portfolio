import CertificationCard from "@/components/Common/CertificationCard";
import ExpandableButton from "@/components/ui/ExpandableButton";
import SectionTitle from "@/components/ui/SectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";


export default function CertificationSection() {
    return (
        <div className="w-4/5 mx-auto mb-10 relative">
            <SectionTitle title="My Certification" />
            <div className="grid gap-2  mb-5">
                <CertificationCard />
                <CertificationCard />
                <CertificationCard />

            </div>
            <div className="flex justify-center items-center">
                <ExpandableButton title='Lihat Lebih Banyak' />
            </div>
        </div>
    )
}