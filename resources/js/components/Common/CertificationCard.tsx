import TechLabel from "./TechLabel";

export default function CertificationCard() {
    return (
        <div className="row gap-3">
            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                <div className="jurusan justify-content-center align-items-center d-flex flex-column">
                    <div className="">Desember 2025</div>
                    <div className="fw-bold">Dicoding Academy</div>
                </div>
            </div>
            <div className="col ">
                <div className="ow">
                    <h5 className="fw-bold">Full Stack Web Developer</h5>
                    <div className="small text-body-tertiary mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio unde tenetur. Expedita, quam eligendi! Odit ullam unde officia ipsum!</div>
                    <div className="d-flex gap-2">
                        <TechLabel label="Laravel" />
                        <TechLabel label="Laravel" />
                        <TechLabel label="Laravel" />
                        <TechLabel label="Laravel" />
                    </div>
                </div>
            </div>
            <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-outline-primary rounded-pill">Lihat Sertifikat</button>
            </div>
            <hr />
        </div>
    )
}