export default function Input({
    icon = null,
    label = '',
    type = 'text',
    className = '',
    value = '',
    placeholder = 'input text here',
}) {
    return (
        <div>
            <div className="flex flex-col gap-2 text-slate-950">
                {label && <label htmlFor="">{label}</label>}
                <div className="flex items-center justify-center overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                    {icon && (
                        <div className="ms-3 flex h-5 w-5 items-center justify-center text-lg">
                            {icon}
                        </div>
                    )}
                    <input
                        type={type}
                        className="m-3 w-full text-sm outline-none"
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </div>
    );
}
