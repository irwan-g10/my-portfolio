import ProjectCountCard from "../Common/ProjectCountCard";

export default function HeroSection() {
    return (
        <div className="container vh-100">
            <div className="row m-5">
                <div className="col ">
                    <h3>Hello Semua</h3>

                    <h1>Nama Saya <span className="text-primary">Irwan Gumilar</span></h1>
                    <label className="text-secondary fst-italic">Saya Seorang Frontend Developer</label>
                    <p className="my-3 small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit aperiam voluptatem quidem ipsa quod error iure laudantium natus sapiente perspiciatis nam voluptatibus vitae voluptate porro. Sapiente harum non nemo, modi, possimus facilis quaerat maiores doloremque, necessitatibus rerum neque magnam.
                    </p>
                    <div className="project-count d-flex gap-2 justify-content-center">
                                    
                                    <ProjectCountCard count={5} label="Projects" />
                                    <ProjectCountCard count={2} label='Years Experience'/>
                                    <ProjectCountCard count={4.5} label='Starts Rating'/>
                                </div>

                </div>
                <div className="profesional-foto  col-5 justify-content-end align-items-center d-flex">
                    <img
                        src="/images/profesional-foto-removebg.png"
                        alt="Foto Irwan Gumilar"
                        className="object-fit-cover"
                    />

                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">

                    <button className="btn btn-primary fw-bold d-flex gap-3 mt-3 justify-content-start align-items-center"><label >Download CV</label> <i className="bi bi-download"></i></button>

                    <div className="d-flex gap-3 align-items-center justify-content-end mt-3">
                        <div>Find me on</div>
                        <div className="d-flex gap-1">
                            <div className="btn btn-primary rounded-circle" style={{ width: '40px', height: '40px' }}><i className="bi bi-instagram"></i></div>
                            <div className="btn btn-primary rounded-circle" style={{ width: '40px', height: '40px' }}><i className="bi bi-whatsapp"></i></div>
                            <div className="btn btn-primary rounded-circle" style={{ width: '40px', height: '40px' }}><i className="bi bi-linkedin"></i></div>
                            <div className="btn btn-primary rounded-circle" style={{ width: '40px', height: '40px' }}><i className="bi bi-facebook"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}