import { twMerge } from 'tailwind-merge';
interface CardProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export default function Card({ children, className, onClick }: CardProps) {
    return (
        <div className="group relative">
            {/* <div
                className={twMerge(
                    `absolute inset-0 z-0 translate-y-3 scale-95 bg-red-500 ${className} rounded-lg border-b-2 border-slate-100/20 bg-transparent`,
                )}
            ></div> */}
            <div
                className={twMerge(
                    `relative w-full gap-3 rounded-lg border border-slate-100/20 bg-slate-100/10 p-5 backdrop-blur-xs ${className} `,
                )}
                onClick={onClick}
            >
                {children}
            </div>
        </div>
    );
}
