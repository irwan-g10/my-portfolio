import { useState } from 'react';
import Card from '../ui/Card';

export default function JourneyItemCard({
    position = 'left',
    title = 'DIcoing Indonesia',
    job = 'Front End Develope',
    year = '2026',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit omnis hic? Dolore atque ratione exercitationem eligendi, magnam nostrum aliquam!',
}) {
    const [detailActive, setDetailActive] = useState(false);
    const handleDetailClick = () => {
        setDetailActive((prev) => !prev);
    };
    return (
        <div
            className="flex flex-col items-center"
            onClick={handleDetailClick}
        >
            <div
                className={`relative flex gap-2 ${position === 'left' ? 'flex-row-reverse' : ''} w-full`}
            >
                <div className="flex-10">
                    {detailActive && (
                        <div className="px-10">
                            <p
                                className={`text-xs md:text-sm ${position === 'left' ? 'text-left' : 'text-right'}`}
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis earum saepe sunt
                                alias voluptates porro iusto, totam deleniti
                                ipsam unde eius, eum repudiandae tempore. Sunt
                                saepe, minima facere officia illo doloremque
                                temporibus. Doloribus, fuga quasi. Eveniet,
                                consequatur expedita aut nemo sunt debitis
                                soluta ipsam. Aspernatur officiis, quos id animi
                                enim cum non, magni sed blanditiis labore, nulla
                                eius? Laudantium non, voluptate ex repellat
                                facere nam ad architecto optio voluptas amet
                                necessitatibus quas unde nisi sint esse,
                                inventore, porro magnam cupiditate saepe earum.
                                Repellat atque optio quo ad quaerat! Iste in,
                                debitis repellendus odit corporis ipsum animi
                                numquam laborum? Optio, praesentium.
                            </p>
                        </div>
                    )}
                </div>
                <div
                    className={`timeline top-0 bottom-0 ${position === 'left' ? 'left-104' : 'right-104'} w-[5px] bg-amber-500`}
                ></div>

                <div className="flex h-fit flex-10">
                    <div
                        className={`flex gap-2 ${position === 'left' ? '' : 'flex-row-reverse'}`}
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
                            className=""
                        />
                        <div
                            className={`flex items-center gap-5 ${position === 'left' ? 'flex-row-reverse' : ''}`}
                        >
                            <div className="h-5 w-5 rounded-full bg-amber-500"></div>

                            <div className="flex h-fit font-bold">{year}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="h-10 w-30 bg-amber-500"></div> */}
        </div>
    );
}
