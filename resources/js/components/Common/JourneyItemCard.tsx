import { useState } from 'react';
import Card from '../ui/Card';

export default function JourneyItemCard({
    position = 'left',
    title = 'DIcoing Indonesia',
    job = 'Front End Develope',
    fromMonth = 'Agustus 2025',
    toMonth = 'Agustus 2025',

    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit omnis hic? Dolore atque ratione exercitationem eligendi, magnam nostrum aliquam!',
}) {
    const [detailActive, setDetailActive] = useState(false);
    const handleDetailClick = () => {
        setDetailActive((prev) => !prev);
    };
    return (
        <div
            className="flex flex-col items-center transition-all duration-300"
            onClick={handleDetailClick}
        >
            <div
                className={`relative flex gap-2 ${position === 'left' ? 'flex-row-reverse' : ''} w-full`}
            >
                <div
                    className={`flex flex-10 gap-5 pb-10 ${position === 'left' ? '' : 'flex-row-reverse'}`}
                >
                    <div className="mt-18 flex flex-col items-center text-sm font-bold whitespace-nowrap text-amber-500 md:text-sm">
                        <div>{fromMonth}</div>
                        <div>.s.d</div>
                        <div>{toMonth}</div>
                    </div>
                    {detailActive && (
                        <Card
                            className=""
                            content={
                                <p
                                    className={`text-xs md:text-sm ${position === 'left' ? 'text-left' : 'text-right'}`}
                                >
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Perspiciatis earum saepe
                                    sunt alias voluptates porro iusto, totam
                                    deleniti ipsam unde eius, eum repudiandae
                                    tempore. Sunt saepe, minima facere officia
                                    illo doloremque temporibus. Doloribus, fuga
                                    quasi. Eveniet, consequatur expedita aut
                                    nemo sunt debitis soluta ipsam. Aspernatur
                                    officiis, quos id animi enim cum non, magni
                                    sed blanditiis labore, nulla eius?
                                    Laudantium non, voluptate ex repellat facere
                                    nam ad architecto optio voluptas amet
                                    necessitatibus quas unde nisi sint esse,
                                    inventore, porro magnam cupiditate saepe
                                    earum. Repellat atque optio quo ad quaerat!
                                    Iste in, debitis repellendus odit corporis
                                    ipsum animi numquam laborum? Optio,
                                    praesentium.
                                </p>
                            }
                        />
                    )}
                </div>
                <div className="mt-20">
                    <Card
                        className="flex h-10 w-10 items-center justify-center rounded-full p-0"
                        content={
                            <div className="h-5 w-5 rounded-full bg-amber-500"></div>
                        }
                    />
                </div>

                <div
                    className={`flex h-fit flex-10 pb-10 ${position === 'left' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`flex items-center gap-2 ${position === 'left' ? '' : 'flex-row-reverse'}`}
                    >
                        <Card
                            content={
                                <div>
                                    <h5 className="font-bold md:text-xl">
                                        {title}
                                    </h5>
                                    <div className="my-1 text-xs italic">
                                        {job}
                                    </div>
                                    <p className="text-xs md:text-sm">
                                        {description}
                                    </p>
                                </div>
                            }
                            className="h-50 w-100"
                        />
                        <Card className="h-30 w-4 p-0" />
                        <Card className="h-20 w-4 p-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}
