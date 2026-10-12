import { motion } from 'framer-motion';
export default function ThemeButton({ onClick, theme, className }) {
    return (
        <div
            className={`flex cursor-pointer items-center border-2 justify-${theme === 'light' ? 'start' : 'end'} w-20 rounded-full border-slate-950 p-1 dark:border-slate-100`}
            onClick={onClick}
        >
            <motion.div
                className="justiy-center flex h-7 w-7 items-center rounded-full bg-slate-950 p-1 text-slate-100 dark:bg-slate-100 dark:text-slate-950"
                layout
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 35,
                }}
                animate={{
                    x: theme === 'light' ? 0 : 1, // Mengatur jarak geser ke kanan saat mode dark
                }}
            >
                {theme === 'light' ? (
                    <i className="bi bi-cloud-sun-fill"></i>
                ) : (
                    <i className="bi bi-moon-stars-fill"></i>
                )}
            </motion.div>
        </div>
    );
}
