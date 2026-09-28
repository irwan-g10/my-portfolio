export default function ProjectCountCard({ count = 0, label = 'label' }) {
    return (
        <div className=" border-primary border-dashed rounded border-2 justify-content-between align-items-center p-3 d-flex flex-column" style={{ width: '200px', height: '150px' }}>
            <div className="flex-grow-1 d-flex justify-content-center align-items-center fw-bold fs-2 text-secondary">{count}</div>
            <div className="fw-bold fs-6">{label}</div>
        </div>
    )
}