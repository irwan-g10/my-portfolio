export default function JourneySection() {
  return (
    <div className="container py-5">
      <h1 className="align-items-center justify-content-start d-flex  ">My Journey</h1>
      <hr className="mb-5" />

      <div className="row gap-2 border p-2 ">
        <div className="col-auto border p-2">
          <div className="bg-primary rounded-pill d-flex justify-content-center align-items-center" style={{ width: "5px", height: "100%" }}>
            <div className="buletan bg-primary border-4 border-light rounded-circle position-absolute" style={{ width: "20px", height: "20px" }}></div>
          </div>
        </div>
        <div className="col-1 border p-2 justify-content-start align-items-center fw-bold d-flex">2025</div>
        <div className="col border rounded-5 p-3">
          <h5>Dicoding Indonesia</h5>
          <div className="">Front End Developer</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate nostrum ab animi, eveniet inventore beatae molestias magnam tempore laboriosam.</p>
        </div>
        <div className="col"></div>
      </div>

    </div>
  )
}