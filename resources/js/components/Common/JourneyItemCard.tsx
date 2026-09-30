export default function JourneyItemCard() {
    return (
        <div className="d-flex gap-4 align-items-center">
            <div className="buletan bg-primary border-4 position-absolute start-0 border-light rounded-circle "
                style={{ width: "20px", height: "20px" }}></div>
            <div className="fw-bold ps-4">2025</div>
            <div className=" border rounded-5 p-3">
                <h5>Dicoding Indonesia</h5>
                <div className="">Front End Developer</div>
                <p style={{ maxWidth: '350px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate nostrum ab animi, eveniet inventore beatae molestias magnam tempore laboriosam.</p>
            </div>
        </div>
    )
}