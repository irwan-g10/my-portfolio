import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

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
    onChange?: () => any;
}

export default function Input({
    icon,
    label,
    type = 'text',
    className,
    checked = false,
    name,
    onChange,
    value,
    rows = 4,
    placeholder = 'Input text here',
    inline,
}) {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioChecked, setradioChecked] = useState(false);
    const handleCheckbox = () => {
        setCheckboxChecked((prev) => !prev);
    };
    const handleRadio = () => {
        setradioChecked((prev) => !prev);
    };
    let content;
    if (type === 'text' || type === 'date') {
        // <div
        //     className={`flex items-center justify-center gap-2 overflow-hidden rounded-md border-2 px-3 ${checkboxChecked ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-600'} bg-slate-950 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20`}
        // >
        //     {icon && (
        //         <div className="flex items-center justify-center text-lg text-slate-500">
        //             {icon}
        //         </div>
        //     )}
        return (
            <div
                className={`mb-2 flex gap-2 ${!inline ? 'flex-col' : 'items-center text-sm'}`}
            >
                {label && (
                    <label className="font-semibold text-slate-100">
                        {label}
                    </label>
                )}
                <div
                    className={twMerge(
                        `flex-1 rounded-md border-2 border-slate-600 bg-slate-950 px-3 text-xs focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 ${className}`,
                    )}
                >
                    {/* {icon && ( */}
                    <div className="flex h-10 items-center justify-center gap-2 text-lg text-slate-500">
                        {icon}
                        <input
                            type={type}
                            className="w-full text-xs text-slate-100 outline-none"
                            value={value}
                            name={name}
                            placeholder={placeholder}
                            onChange={onChange}
                        />
                    </div>
                    {/* )} */}
                </div>
            </div>
        );
        // </div>;
    } else if (type === 'textarea') {
        return (
            <div className={`mb-2 flex gap-2 ${!inline && 'flex-col'}`}>
                {label && (
                    <label className="font-semibold text-slate-100">
                        {label}
                    </label>
                )}
                <div
                    className={twMerge(
                        `rounded-md border-2 border-slate-600 bg-slate-950 p-3 text-xs focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 ${className}`,
                    )}
                >
                    <textarea
                        className="w-full outline-none"
                        rows={rows}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                    >
                        {value}
                    </textarea>
                </div>
            </div>
        );
    } else if (type === 'radio') {
        content = (
            <label className="flex w-full cursor-pointer items-center gap-2 text-[9px] font-semibold text-slate-100">
                <input
                    type="radio"
                    checked={checked}
                    // onClick={handr}
                    onChange={onChange}
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
                    value={value}
                    onChange={onChange}
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
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        );
    }
    return (
        // <div
        //     className={`flex flex-col gap-2 text-xs ${type === 'checkbox' && `w-fit`}`}
        // >
        //     {label && type !== 'checkbox' && type !== 'radio' && (
        //         <label
        //             htmlFor=""
        //             className="font-semibold text-slate-100"
        //         >
        //             {label}
        //         </label>
        //     )}
        //     <div
        //         className={`flex ${type !== 'textarea' ? 'h-10' : 'py-3'} items-center justify-center gap-2 overflow-hidden rounded-md border-2 px-3 ${checkboxChecked ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-600'} bg-slate-950 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20`}
        //     >
        //         {icon && type !== 'checkbox' && (
        //             <div className="flex items-center justify-center text-lg text-slate-500">
        //                 {icon}
        //             </div>
        //         )}
        //         {content}
        //     </div>
        // </div>
        <div>{content}</div>
    );
}
