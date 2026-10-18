export default function SectionTitle({ title = 'Title Section' }) {
    return (
        <div className="flex w-fit flex-col py-10">
            <div className="mx-10 mb-5 text-2xl font-black">{title}</div>
            <div className="rounded-full border-3 border-slate-100" />
        </div>
    );
}
