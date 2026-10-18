// import JourneyItemCard from '@/components/Common/JourneyItemCard';
// import SectionTitle from '@/components/ui/SectionTitle';
// import React from 'react';

// export default function JourneySection() {
//     const journeyData = [
//         {
//             year: '2025',
//             title: 'Dicoding Indonesia',
//             job: 'Front End Developer',
//             description:
//                 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit omnis hic? Dolore atque ratione exercitationem eligendi, magnam nostrum aliquam!',
//         },
//         {
//             year: '2025',
//             title: 'PT Badjatex',
//             job: 'Production Operator',
//             description:
//                 'Menangani proses produksi tekstil, memastikan kualitas kain sesuai standar perusahaan, dan mengelola operasional mesin secara efisien.',
//         },
//         {
//             year: '2025',
//             title: 'AJE Elektronik',
//             job: 'Store Crew',
//             description:
//                 'Melayani pelanggan, mengelola inventaris stok barang elektronik, serta mencatat transaksi harian toko dengan akurat dan rapi.',
//         },
//         {
//             year: '2024',
//             title: 'PT Idar Buana',
//             job: 'Printing Operator',
//             description:
//                 'Mengoperasikan mesin cetak industri, melakukan kalibrasi warna, serta merawat perangkat cetak agar berjalan tanpa hambatan.',
//         },
//         {
//             year: '2023',
//             title: 'Freelance Developer',
//             job: 'Full-Stack Web Developer',
//             description:
//                 'Membangun dan mengembangkan aplikasi web modern menggunakan Laravel, React, Tailwind CSS, serta mengelola deployment server mandiri.',
//         },
//     ];

//     return (
//         <div className="mx-auto w-4/5">
//             <SectionTitle title="My Journey" />

//             <div className="relative flex w-full justify-center">
//                 <div className="flex w-full flex-col items-center">
//                     {journeyData.map((item, index) => {
//                         const position = index % 2 === 0 ? 'left' : 'right';
//                         const isLast = index === journeyData.length - 1;
//                         const isEven = index % 2 === 0;

//                         return (
//                             <React.Fragment key={index}>
//                                 {/* Kartu Journey */}
//                                 <div className="w-full">
//                                     <JourneyItemCard
//                                         position={position}
//                                         title={item.title}
//                                         year={item.year}
//                                         description={item.description}
//                                         job={item.job}
//                                     />
//                                 </div>

//                                 {/* Garis Penghubung Kurva Antar Kartu */}
//                                 {!isLast && (
//                                     <div className="relative h-24 w-full">
//                                         <svg
//                                             className="h-full w-full fill-none stroke-amber-500"
//                                             viewBox="0 0 100 100"
//                                             preserveAspectRatio="none"
//                                         >
//                                             {isEven ? (
//                                                 // Dari Kartu Kiri (titik X=25 atau sesuai lebar card) ke Kartu Kanan (X=75)
//                                                 // M 30 0 = Mulai dari agak ke tengah-kiri atas
//                                                 // C 30 50, 70 50, 70 100 = Melengkung ke arah kanan bawah
//                                                 <path
//                                                     d="M 30 0 C 30 50, 70 50, 70 100"
//                                                     strokeWidth="3"
//                                                     strokeLinecap="round"
//                                                 />
//                                             ) : (
//                                                 // Dari Kartu Kanan (X=70) ke Kartu Kiri (X=30)
//                                                 <path
//                                                     d="M 70 0 C 70 50, 30 50, 30 100"
//                                                     strokeWidth="3"
//                                                     strokeLinecap="round"
//                                                 />
//                                             )}
//                                         </svg>
//                                     </div>
//                                 )}
//                             </React.Fragment>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

import JourneyItemCard from '@/components/Common/JourneyItemCard';
import ExpandableButton from '@/components/ui/ExpandableButton';

import SectionTitle from '@/components/ui/SectionTitle';
import { useState } from 'react';

export default function JourneySection() {
    const [expandVisible, setExpandVisible] = useState(false);

    const onExpandClick = () => {
        setExpandVisible((prev) => !prev);
    };
    const journeyData = [
        {
            year: '2025',

            title: 'Dicoding Indonesia',

            job: 'Front End Developer',

            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit omnis hic? Dolore atque ratione exercitationem eligendi, magnam nostrum aliquam!',
        },

        {
            year: '2025',

            title: 'PT Badjatex',

            job: 'Production Operator',

            description:
                'Menangani proses produksi tekstil, memastikan kualitas kain sesuai standar perusahaan, dan mengelola operasional mesin secara efisien.',
        },

        {
            year: '2025',

            title: 'AJE Elektronik',

            job: 'Store Crew',

            description:
                'Melayani pelanggan, mengelola inventaris stok barang elektronik, serta mencatat transaksi harian toko dengan akurat dan rapi.',
        },

        {
            year: '2024',

            title: 'PT Idar Buana',

            job: 'Printing Operator',

            description:
                'Mengoperasikan mesin cetak industri, melakukan kalibrasi warna, serta merawat perangkat cetak agar berjalan tanpa hambatan.',
        },

        {
            year: '2023',

            title: 'Freelance Developer',

            job: 'Full-Stack Web Developer',

            description:
                'Membangun dan mengembangkan aplikasi web modern menggunakan Laravel, React, Tailwind CSS, serta mengelola deployment server mandiri.',
        },
    ];

    return (
        <div
            className={`relative mx-auto mt-10 w-4/5 ${expandVisible ? '' : 'h-screen overflow-hidden'}`}
        >
            <SectionTitle title="My Journey" />

            <div className="flex">
                {/* <div className="flex-1"></div> */}

                <div className="relative flex w-full justify-center">
                    <div className="flex w-full flex-col">
                        {journeyData.map((item, index) => {
                            const position = index % 2 === 0 ? 'left' : 'right';

                            return (
                                <JourneyItemCard
                                    position={position}
                                    title={item.title}
                                    year={item.year}
                                    description={item.description}
                                    job={item.job}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mx-auto flex w-4/5 items-center justify-center py-10">
                <ExpandableButton
                    title="Lihat Lebih Banyak"
                    onClick={onExpandClick}
                    isVisible={expandVisible}
                />
            </div>
        </div>
    );
}
