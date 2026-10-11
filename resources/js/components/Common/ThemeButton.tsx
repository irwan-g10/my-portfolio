import { motion } from "framer-motion";
export default function ThemeButton({ onClick, theme, className }) {
    return (
        <div className={`border-2 cursor-pointer flex items-center justify-${theme === 'light' ? 'start' : 'end'} w-20 p-1  rounded-full  border-slate-950 dark:border-slate-100`} onClick={onClick}>
            <motion.div
                className=" w-7 h-7 dark:bg-slate-100 dark:text-slate-950 bg-slate-950 text-slate-100  rounded-full p-1 flex justiy-center items-center"
                layout
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35
                }}
                animate={{
                    x: theme==='light' ? 0 : 1 // Mengatur jarak geser ke kanan saat mode dark
                }}
            >
                {theme === 'light' ? <i className="bi bi-cloud-sun-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
            </motion.div>
        </div>
    )
}