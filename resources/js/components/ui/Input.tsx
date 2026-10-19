export default function Input({
    icon = null,
    label = '',
    type = 'text',
    className = '',
    onChange,
    value = '',
    rows = 4,
    placeholder = 'input text here',
}) {
    const isTextArea = type === 'textarea';

    return (
        <div className="mb-5 flex flex-col gap-2 text-xs">
            {label && (
                <label
                    htmlFor=""
                    className="font-semibold text-slate-100"
                >
                    {label}
                </label>
            )}
            <div className="flex items-center justify-center overflow-hidden rounded-md border-2 border-slate-600 bg-slate-950 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
                {icon && (
                    <div className="ms-3 flex items-center justify-center text-lg text-slate-500">
                        {icon}
                    </div>
                )}
                {isTextArea ? (
                    <textarea
                        className="m-3 w-full outline-none"
                        rows={4}
                        placeholder={placeholder}
                    >
                        {value}
                    </textarea>
                ) : (
                    <input
                        type={type}
                        className="m-2 ms-3 w-full outline-none"
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                )}
            </div>
        </div>
    );
}
