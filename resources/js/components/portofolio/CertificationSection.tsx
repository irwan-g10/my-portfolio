import CertificationCard from "../Common/CertificationCard";
import SectionTitle from "../Common/SectionTitle";


export default function CertificationSection() {
    return (
        <div className="container mb-5">
            <SectionTitle title="My Certification" />
            <div className="row gap-2">
                <CertificationCard />
                <CertificationCard />
                <CertificationCard />

            </div>
        </div>
    )
}