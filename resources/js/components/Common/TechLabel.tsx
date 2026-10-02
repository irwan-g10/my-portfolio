export default function TechLabel({ label = 'label' }) {
    return (
        // <div className="border rounded-pill bg-primary text-white fw-semibold p-1 small">
        <div className="bg-blue-500 rounded-sm text-xs p-1 text-white font-semibold">
            {label}
        </div>
    )
}