import { toHover } from '@/lib/utils';
import { useState } from 'react';

export default function Dropdown({
    name,
    label,
    value,
    options = [],
    onChange,
    icon,
}) {
    const [optionShow, setOptionShow] = useState(false);
    return (
        <div className="group relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={`flex h-10 w-full cursor-pointer appearance-none justify-center rounded-sm border-2 border-amber-500 bg-slate-950 p-3 pr-9 text-xs font-semibold text-amber-500 outline-none ${toHover('bg-amber-500 text-slate-100')}`}
            >
                <option
                    value=""
                    className=""
                >
                    <div>{label}</div>
                </option>
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
            <div className="absolute top-3 right-3 font-extrabold text-amber-500 hover:text-slate-100">
                {icon}
            </div>
        </div>
    );
}
