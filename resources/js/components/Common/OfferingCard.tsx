import Card from '../ui/Card';
import Motion from './Motion';

export default function OfferingCard({
    title = '',
    image = '',
    description = '',
    scale = '',
}) {
    return (
        <Motion>
            <Card
                content={
                    <div className="flex flex-col gap-5 p-3">
                        <h5 className="flex justify-center text-xl font-bold">
                            Back-End
                        </h5>
                        <div className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consectetur minima totam iure debitis
                            voluptatum voluptates, quidem inventore earum.
                            Deleniti, ab.
                        </div>
                        <div className="features flex gap-5">
                            <div className="icon flex flex-1 items-center justify-center">
                                <i className="bi bi-server text-whitfeature ke-e text-6xl"></i>
                            </div>
                            <div className="flex flex-2 flex-col justify-center text-xs">
                                <div>feature ke-1</div>
                                <div>feature ke-2</div>
                                <div>feature ke-3</div>
                                <div>feature ke-4</div>
                                <div>feature ke-5</div>
                            </div>
                        </div>
                    </div>
                }
                className="border-3 border-purple-400/20 bg-purple-500/10"
            />
        </Motion>
    );
}
