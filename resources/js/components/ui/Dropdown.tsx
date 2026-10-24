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
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="flex h-10 w-full cursor-pointer appearance-none justify-center rounded-sm bg-amber-500 p-3 pr-9 text-xs font-semibold outline-none"
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
            <div className="absolute top-3 right-3 font-extrabold">{icon}</div>
        </div>
    );
}
