export default function TechLabel({ label = 'label' }) {
    return (
        <div className="border rounded-pill bg-primary text-white fw-semibold p-1 small">
            {label}
        </div>
    )
}