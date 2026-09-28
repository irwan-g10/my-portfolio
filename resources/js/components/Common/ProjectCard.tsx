import TechLabel from "./TechLabel";

export default function ProjectCard() {
    return (
        <div className="card col-3 rounded-5 shadow-sm">
            <img src="/images/website.png" className="card-img-top rounded mt-2" alt="Project Image" />
            <div className="card-body">
                <label className=" text-primary fw-semibold  small">Project STACK</label>
                <div className="card-title fw-bold">Project Title</div>
                <div className="card-text text-secondary small mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus at corrupti tempora. Consectetur, dolorum ratione?
                    </div>
                <div className="d-flex flex-wrap gap-2 mb-2 ">
                    <TechLabel label="React JS" />
                    <TechLabel label="Laravel" />
                    <TechLabel label="Inertia.js" />
                    <TechLabel label="Bootstrap" />
                    <TechLabel label="+5" />
                </div>
                <div className="btn btn-outline-primary fw-bold">Explore Project <i className="bi bi-arrow-right"></i></div>
            </div>
        </div>
    )
}