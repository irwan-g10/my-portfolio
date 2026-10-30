import SectionTitle from '@/components/ui/SectionTitle';
import OfferingCard from '@/pages/Portfolio/Offering/Components/OfferingCard';
import { useEffect, useState } from 'react';

export default function OfferingSection() {
    const [activeCard, setActiveCard] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const description = [
        'Mengintegrasikan performa backend yang tangguh dengan antarmuka frontend yang dinamis, fungsional, dan siap digunakan untuk kebutuhan bisnis maupun personal,',
        'Membangun logika sisi server yang aman, terstruktur, dan andal. Mengelola integrasi database relasional maupun NoSQL secara efisien menggunakan MySQL, PostgreSQL, dan MongoDB untuk performa data yang optimal.',
        'Menyusun tata letak antarmuka pengguna (UI/UX) yang interaktif, bersih, dan dinamis. Mengombinasikan fleksibilitas styling modern untuk menghadirkan pengalaman navigasi yang mulus di berbagai perangkat.',
    ];

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveCard((prevIndex) => (prevIndex + 1) % 3); // Berputar dari 0 -> 1 -> 2 -> 0 dst.
        }, 3000);

        return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
    }, [isPaused]);
    return (
        <div className="m-auto mb-10 w-4/5">
            <SectionTitle title="What Do I Offer" />
            {/* <div className="m-5 flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                delectus ratione repellendus! Cumque saepe facilis modi enim
                dolore delectus ut, dolorem quos rem aut vitae dicta eum iure!
                Perspiciatis?
            </div> */}
            <div className="mb-10 flex justify-center">
                <div className="flex h-40 w-150 items-center text-center text-lg">
                    <span>
                        <i className="bi bi-quote me-3 text-3xl"></i>
                        {description[activeCard]}
                    </span>
                </div>
            </div>
            <div
                className="flex flex-col items-center gap-10 md:flex-row"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className={`transform transition-all duration-500 ${
                        activeCard === 0
                            ? '-translate-y-5 scale-105 -rotate-5'
                            : 'translate-y-0 scale-100 rotate-0'
                    }`}
                >
                    <OfferingCard
                        title="Fullstack Developer"
                        description="Perancangan Sistem & Arsitektur Web Modern dengan Teknologi
                    MERN dan Laravel Inertia React"
                    />
                </div>

                <div
                    className={`transform transition-all duration-500 ${
                        activeCard === 1
                            ? '-translate-y-5 scale-105 rotate-0'
                            : 'translate-y-0 scale-100 rotate-0'
                    }`}
                >
                    <OfferingCard
                        title="Backend Developer"
                        description="Perancangan Arsitektur Server & API Skalabel dengan Laravel, Express.js, & Hapi.js"
                    />
                </div>
                <div
                    className={`transform transition-all duration-500 ${
                        activeCard === 2
                            ? '-translate-y-5 scale-105 rotate-5'
                            : 'translate-y-0 scale-100 rotate-0'
                    }`}
                >
                    <OfferingCard
                        title="Frontend Developer"
                        description="Pengembangan Antarmuka Web Modern & Responsif dengan React.js, Tailwind CSS, & Bootstrap"
                    />
                </div>
            </div>
        </div>
    );
}
