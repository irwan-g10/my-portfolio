import { useState } from 'react';

interface InputProps {
    icon?: React.ReactNode;
    label?: string;
    type?: string;
    className?: string;
    checked?: boolean;
    name?: string;
    value?: string | number;
    rows?: number;
    placeholder?: string;
}

export default function Input({
    icon,
    label,
    type = 'text',
    className,
    checked = false,
    name,
    value,
    rows = 4,
    placeholder = 'Input your text here',
}: InputProps) {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioChecked, setradioChecked] = useState(false);
    const handleCheckbox = () => {
        setCheckboxChecked((prev) => !prev);
    };
    const handleRadio = () => {
        setradioChecked((prev) => !prev);
    };
    let content;
    if (type === 'textarea') {
        content = (
            <textarea
                className="w-full outline-none"
                rows={rows}
                placeholder={placeholder}
            >
                {value}
            </textarea>
        );
    } else if (type === 'radio') {
        content = (
            <label className="flex w-full cursor-pointer items-center gap-2 text-[9px] font-semibold text-slate-100">
                <input
                    type="radio"
                    // checked={radioChecked}
                    // onClick={handr}
                    // onChange={onChange}
                    name={name} // Penting untuk radio button agar bisa berkelompok
                    value={value}
                    className="cursor-pointer accent-blue-500"
                />
                {label}
            </label>
        );
    } else if (type === 'checkbox') {
        content = (
            <label className="flex items-center gap-2 text-[9px] font-semibold text-slate-100">
                <input
                    type="checkbox"
                    checked={checkboxChecked}
                    onClick={handleCheckbox}
                    // onChange={onChange}
                    className="accent-blue-500"
                />
                {label}
            </label>
        );
    } else {
        content = (
            <input
                type={type}
                className="w-full outline-none"
                placeholder={placeholder}
                // onChange={onChange}
            />
        );
    }
    return (
        <div
            className={`flex flex-col gap-2 text-xs ${type === 'checkbox' && `w-fit`}`}
        >
            {label && type !== 'checkbox' && type !== 'radio' && (
                <label
                    htmlFor=""
                    className="font-semibold text-slate-100"
                >
                    {label}
                </label>
            )}
            <div
                className={`flex ${type !== 'textarea' ? 'h-10' : 'py-3'} items-center justify-center gap-2 overflow-hidden rounded-md border-2 px-3 ${checkboxChecked ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-600'} bg-slate-950 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20`}
            >
                {icon && type !== 'checkbox' && (
                    <div className="flex items-center justify-center text-lg text-slate-500">
                        {icon}
                    </div>
                )}
                {content}
            </div>
        </div>
    );
}
