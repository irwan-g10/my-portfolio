import { FaArrowRightLong } from "react-icons/fa6";
import CertificationCard from "../Common/CertificationCard";
import ExpandableButton from "../Common/ExpandableButton";
import SectionTitle from "../Common/SectionTitle";
import Button from "../Common/Button";


export default function CertificationSection() {
    return (
        <div className="w-4/5 mx-auto mb-10">
            <SectionTitle title="My Certification" />
            <div className="grid gap-2  mb-5">
                <CertificationCard />
                <CertificationCard />
                <CertificationCard />

            </div>
                <div className="flex justify-center items-center">
                    <Button title="Lihat Lebih Banyak" icon={<FaArrowRightLong />}/>
                </div>
        </div>
    )
}