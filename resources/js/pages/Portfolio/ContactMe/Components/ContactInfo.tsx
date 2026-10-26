export default function ContactInfo({
    label = 'label',
    value = 'value',
    icon = 'icon',
}) {
    return (
        <div className="mb-2 flex gap-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 p-2 text-blue-500">
                {icon}
            </div>
            <div className="col">
                <div className="flex flex-col">
                    <label>{label}</label>
                    <label htmlFor="">{value}</label>
                </div>
            </div>
        </div>
    );
}
