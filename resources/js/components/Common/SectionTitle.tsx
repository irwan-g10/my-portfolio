export default function SectionTitle({ title = 'Title Section' }) {
    return (
        <div className="mb-10 flex">
                <div className="section-title">
                    <h1 className="text-3xl font-black mb-2">{title}</h1>
                    <hr className="border-3 rounded-full border-black-900" />
                </div>
        </div>
    )
}