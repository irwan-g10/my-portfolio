import ProjectList from "./ProjectList";
import TechLabel from "./TechLabel";

export default function ProjectHeroCard() {
    return (
        <div className="border rounded p-3 py-5 ">
           <div className="row gap-5 ">
             <div className="gambar col">
                <img src="/images/website.png" alt="Project Image" className="w-100 border border-secondary img-fluid object-fit-cover shadow-sm rounded"  style={{ height: '250px' }}    />
            </div>
            <div className="deskripsi col-5">
                <div className="d-flex mb-3 align-items-center gap-2 border border-primary shadow-sm rounded-pill fst-italic p-1 px-3 mb-2 fw-bold text-white bg-primary" style={{ width: 'fit-content' }}>
                    <i className="bi bi-star-fill"></i>
                    <span>On-Going Project</span>
                </div>
                <h3  className="fw-bold">E-Commerce Web Application</h3 >
                <div className="fs-6 text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquam eum adipisci ullam ex, saepe cum atque at aut dolorum officiis pariatur voluptate laudantium. Quod fugiat, placeat est sunt, vel aut sequi nemo eum totam odit ut vero deleniti! Fuga?</div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                    <TechLabel label="React JS" />
                    <TechLabel label="Laravel" />
                    <TechLabel label="Inertia.js" />
                    <TechLabel label="Bootstrap" />
                    <TechLabel label="+5" />
                </div>
                <div className="d-flex gap-3 mt-3 justify-content-end align-items-center ">
                    <div className="btn fw-bold btn-white text-primary border border-primary">Live Demo</div>
                    <div className="btn fw-bold btn-primary"><i className="bi bi-github"></i> GitHub</div>
                </div>
            </div>
           </div>
           {/* <ProjectList /> */}
        </div>
    )
}