import { motion } from "motion/react";
import React from "react";

export default function Motion({ children, className, }) {
    return (

        <div className="relative overflow-hidden">

            <motion.div
                className={`${className}`}
                initial={{ opacity: 0, x: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} // once: false agar animasi ulang terus saat discroll
                transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}