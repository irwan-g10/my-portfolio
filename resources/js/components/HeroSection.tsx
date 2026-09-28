export default function HeroSection() {
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col ">
                    <h3>Hello Semua</h3>

                    <h1>Nama Saya <span className="text-primary">Irwan Gumilar</span></h1>
                    <label className="text-secondary">Saya Seorang Frontend Developer</label>
                    <p className="my-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus obcaecati quos fuga quidem ab totam corrupti repellat autem ratione? Aut dolorem eaque officiis natus veritatis sed, qui nam numquam quia mollitia possimus harum, magni alias ratione reprehenderit repellat reiciendis quae! Rerum, totam sapiente minima fugiat dolores, nam saepe mollitia quos, illum eveniet quas quis voluptatem vitae reprehenderit cupiditate sed.
                    </p>

                </div>
                <div className="profesional-foto  col-5 justify-content-end align-items-end d-flex">
                    <img
                        src="/images/profesional-foto-removebg.png"
                        alt="Foto Irwan Gumilar"
                        className="object-fit-cover"
                    />

                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">

                    <button className="btn btn-primary d-flex gap-3 mt-3 justify-content-start align-items-center"><label >Download CV</label> <i className="bi bi-download"></i></button>

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