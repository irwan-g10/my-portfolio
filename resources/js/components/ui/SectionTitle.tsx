export default function SectionTitle({ title = 'Title Section' }) {
    return (
        <div className="mb-10 flex w-fit flex-col">
            <div className="mx-10 mb-5 text-2xl font-black">{title}</div>
            <div className="rounded-full border-3 border-slate-100" />
        </div>
    );
}
