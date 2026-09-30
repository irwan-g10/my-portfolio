export default function HeroSection() {
    return (
        <div className="container vh-100">
            <div className="row m-5">
                <div className="col ">
                    <h3>Hello Semua</h3>

                    <h1>Nama Saya <span className="text-primary">Irwan Gumilar</span></h1>
                    <label className="text-secondary fst-italic">Saya Seorang Frontend Developer</label>
                    <p className="my-3 small">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, vero quis inventore voluptatum non nihil, commodi tenetur numquam animi vel neque cumque, consequatur sunt suscipit dolorem doloribus ea molestias tempora cum alias dolorum blanditiis quasi! Vitae vero qui eaque eius dolor cum? Quod nemo vero ipsum assumenda illo laborum pariatur, perspiciatis dolore quas accusantium fuga mollitia accusamus, fugit ducimus distinctio quisquam asperiores nam iure repudiandae blanditiis tempora numquam voluptas placeat.
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