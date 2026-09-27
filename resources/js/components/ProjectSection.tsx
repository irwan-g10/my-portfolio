export default function ProjectSection() {
    return (
        <div className="container">
            <h1 className="align-items-center justify-content-center d-flex ">Latest Project</h1>
            <div className="project-count row justify-content-evenly align-items-center gap-3">
                <div className="card m-5 fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Client Order</div>
                <div className="card m-5 fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Completed Project</div>
                <div className="card m-5 fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Star Rating</div>
                <div className="card m-5 fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Months of Experience</div>
            </div>
            <div className="project-list">
                <div>
                    <div>gambar</div>
                    <div className="project-detail">
                        <p>Project Name</p>
                        <p>Description of the project.</p>
                    </div>
                    <div>Detail</div>
                </div>
            </div>
        </div>
    )
}