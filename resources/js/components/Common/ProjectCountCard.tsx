export default function ProjectCountCard({ count = 0, label = 'label' }) {
    return (
        <div className=" border-blue-500 border-dashed rounded-2xl border-3 flex flex-col items-center justify-center relative" style={{ width: '135px', height: '100px' }}>
            <div className="text-2xl font-bold">{count}</div>
            <div className="absolute bottom-2 text-xs font-bold">{label}</div>
        </div>
    )
}