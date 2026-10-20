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
            className="flex flex-col items-center"
            onClick={handleDetailClick}
        >
            <div
                className={`relative flex gap-2 ${position === 'left' ? 'flex-row-reverse' : ''} w-full`}
            >
                <div
                    className={`flex flex-10 gap-5 pb-10 ${position === 'left' ? '' : 'flex-row-reverse'}`}
                >
                    {/* <div className="flex flex-col items-center text-sm font-bold whitespace-nowrap text-amber-500 md:text-sm">
                        <div>{fromMonth}</div>
                        <div>.s.d</div>
                        <div>{toMonth}</div>
                    </div> */}
                    {detailActive && (
                        <Card>
                            <div className={`flex flex-col gap-3`}>
                                <div
                                    className={`text-xs md:text-sm ${position === 'left' ? 'text-left' : 'flex-row-reverse text-right'} flex gap-5`}
                                >
                                    <Card className="h-5 w-5 rounded-full bg-slate-950 p-0" />
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis earum
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Neque quo perferendis
                                        consectetur repellendus quas saepe
                                        ipsum, nemo recusandae fugit beatae
                                        doloribus sequi deserunt magnam
                                        architecto rem illo voluptates iure
                                        laudantium eum exercitationem impedit!
                                        Facilis commodi eveniet neque cupiditate
                                        sed non, quaerat quibusdam expedita!
                                        Cupiditate, quas accusamus laboriosam
                                        numquam voluptatibus sit?
                                    </p>
                                </div>
                                <div
                                    className={`text-xs md:text-sm ${position === 'left' ? 'text-left' : 'flex-row-reverse text-right'} flex gap-5`}
                                >
                                    <Card className="h-5 w-5 rounded-full bg-slate-950 p-0" />
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis earum
                                        consectetur adipisicing elit.
                                        Perspiciatis earum
                                    </p>
                                </div>
                                <div
                                    className={`text-xs md:text-sm ${position === 'left' ? 'text-left' : 'flex-row-reverse text-right'} flex gap-5`}
                                >
                                    <Card className="h-5 w-5 rounded-full bg-slate-950 p-0" />
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis earum
                                    </p>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
                <div className="mt-20">
                    <Card className="flex h-10 w-10 items-center justify-center rounded-full p-0">
                        <div className="h-5 w-5 rounded-full bg-amber-500"></div>
                    </Card>
                </div>

                <div
                    className={`flex h-fit flex-10 pb-10 ${position === 'left' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`flex items-center gap-2 ${position === 'left' ? '' : 'flex-row-reverse'}`}
                    >
                        <Card className="h-50 w-100">
                            <div>
                                <h5 className="font-bold md:text-xl">
                                    {title}
                                </h5>
                                <div className="my-1 text-xs italic">{job}</div>
                                <p className="text-xs md:text-sm">
                                    {description}
                                </p>
                            </div>
                        </Card>
                        <Card className="h-30 w-3 p-0" />
                        <Card className="h-20 w-3 p-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}
