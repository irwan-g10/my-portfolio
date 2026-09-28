export default function ProjectSection() {
    return (
        <div className="container">
            <h1 className="align-items-center justify-content-center d-flex ">Latest Project</h1>
            <div className="project-count d-flex justify-content-center align-items-center gap-2">
                <div className="card m- fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Client Order</div>
                <div className="card m- fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Completed Project</div>
                <div className="card m- fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Star Rating</div>
                <div className="card m- fw-bold col border-sm shadow justify-content-center align-items-center" style={{ height: '200px' }}>Months of Experience</div>
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