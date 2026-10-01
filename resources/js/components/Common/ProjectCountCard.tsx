export default function ProjectCountCard({ count = 0, label = 'label' }) {
    return (
        <div className=" border-primary border-dashed rounded border-2 justify-content-between align-items-center p-3 d-flex flex-column" style={{ width: '135px', height: '100px' }}>
            <div className="flex-grow-1 d-flex justify-content-center align-items-center fw-bold fs-6 text-secondary">{count}</div>
            <div className="fw-bold small" style={{fontSize: '0.75rem'}}>{label}</div>
        </div>
    )
}