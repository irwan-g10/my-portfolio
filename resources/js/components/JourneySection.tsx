export default function JourneySection(){
    return (
        <div className="container py-5">
  <div className="row">
    <div className="col-md-8 mx-auto">
      
      {/* <!-- Container Timeline (Garis Kiri) --> */}
      <div className="position-relative ps-4 border-start border-2 border-secondary-subtle ms-3">

        {/* <!-- Item Timeline 1 --> */}
        <div className="mb-5 position-relative">
          {/* <!-- Titik / Dot pada Garis --> */}
          <span className="timeline-dot position-absolute top-0 start-0 translate-middle bg-white border border-2 border-secondary rounded-circle"></span>
          
          {/* <!-- Card Content --> */}
          <div className="card shadow-sm border-0 bg-light">
            <div className="card-body p-4">
              <span className="badge bg-secondary mb-2">2023</span>
              <h5 className="card-title fw-bold text-dark">Fullstack Web Developer</h5>
              <h6 className="card-subtitle mb-3 text-muted">Ryhar Panel</h6>
              <p className="card-text text-secondary small">
                Developed a web platform for selling hosting panels with dedicated admin and user dashboards, implemented analytics, built system settings management, and integrated payment gateway.
              </p>
              <div className="d-flex flex-wrap gap-1">
                <span className="badge bg-light text-dark border">NEXT.JS</span>
                <span className="badge bg-light text-dark border">NODE.JS</span>
                <span className="badge bg-light text-dark border">PRISMA</span>
                <span className="badge bg-light text-dark border">TAILWIND CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Item Timeline 2 --> */}
        <div className="mb-5 position-relative">
          {/* <!-- Titik / Dot pada Garis --> */}
          <span className="timeline-dot position-absolute top-0 start-0 translate-middle bg-white border border-2 border-secondary rounded-circle"></span>
          
          {/* <!-- Card Content --> */}
          <div className="card shadow-sm border-0 bg-light">
            <div className="card-body p-4">
              <span className="badge bg-secondary mb-2">2022</span>
              <h5 className="card-title fw-bold text-dark">Frontend Developer</h5>
              <h6 className="card-subtitle mb-3 text-muted">Tech Company</h6>
              <p className="card-text text-secondary small">
                Membuat antarmuka aplikasi web yang responsif dan terintegrasi dengan RESTful API.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>
    )
}