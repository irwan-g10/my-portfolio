export default function SectionTitle({ title = 'Title Section' }) {
    return (
        <div className="row">
            <div className="col-auto">
                <div className="section-title">
                    <h1 className="align-items-center justify-content-start fw-bold ">{title}</h1>
                    <hr className="mb-5 border-5 rounded-pill" />
                </div>
            </div>
            <div className="col"></div>
        </div>
    )
}