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
            <div className="flex flex-col gap-2">
                {label && <label htmlFor="">{label}</label>}
                <div className="flex gap-2 overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                    {icon && (
                        <div className="flex items-center justify-center border-r border-slate-300 bg-slate-200 px-3 py-2 text-lg">
                            {icon}
                        </div>
                    )}
                    <input
                        type={type}
                        className="text-sm outline-none"
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </div>
    );
}
