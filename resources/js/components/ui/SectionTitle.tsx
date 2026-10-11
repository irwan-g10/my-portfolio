export default function SectionTitle({ title = 'Title Section' }) {
    return (
        <div className="mb-10 flex flex-col w-fit ">
            <div className="text-2xl font-black mb-5 mx-10">{title}</div>
            <div className="border-3 rounded-full border-slate-950 dark:border-slate-100" />

        </div>
    )
}