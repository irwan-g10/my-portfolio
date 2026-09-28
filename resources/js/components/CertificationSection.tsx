import CertificationCard from "./Common/CertificationCard";

export default function CertificationSection() {
    return (
        <div className="container mb-5">
            <h1 className="mb-5">My Certification</h1>
            <div className="row gap-2">
                <CertificationCard />
                <CertificationCard />
                <CertificationCard />

            </div>
        </div>
    )
}