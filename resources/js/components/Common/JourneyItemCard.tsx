import Card from '../ui/Card';

export default function JourneyItemCard() {
    return (
        <div className="mb-5 flex items-center gap-2">
            <div className="buletan h-10 w-10 rounded-full bg-amber-500"></div>
            <div className="font-bold">2025</div>
            <Card
                content={
                    <div>
                        <h5 className="font-bold md:text-xl">
                            Dicoding Indonesia
                        </h5>
                        <div className="my-1 text-xs italic">
                            Front End Developer
                        </div>
                        <p
                            className="text-xs md:text-sm"
                            style={{ maxWidth: '350px' }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta voluptate nostrum ab animi, eveniet
                            inventore beatae molestias magnam tempore
                            laboriosam.
                        </p>
                    </div>
                }
            />
        </div>
    );
}
