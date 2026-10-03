export default function ContactInfo({label = 'label', value = 'value', icon = 'icon'}) {
    return (
        <div className="flex gap-5 mb-2">
            <div className="border p-2 rounded-full w-10 h-10 flex justify-center items-center border-blue-500 text-blue-500">{icon}</div>
            <div className=" col ">
                <div className="flex flex-col ">
                    <label>{label}</label>
                    <label htmlFor="">{value}</label>
                </div>
            </div>
        </div>
    )
}