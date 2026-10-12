export default function JourneyItemCard() {
    return (
        <div className="flex items-center gap-4">
            <div
                className="buletan absolute start-0 rounded-full border-4 border-white bg-blue-500"
                style={{ width: '20px', height: '20px' }}
            ></div>
            <div className="ps-10 font-bold">2025</div>
            <div className="rounded-lg border p-5 shadow-sm">
                <h5 className="font-bold md:text-xl">Dicoding Indonesia</h5>
                <div className="my-1 text-xs italic">Front End Developer</div>
                <p
                    className="text-xs md:text-sm"
                    style={{ maxWidth: '350px' }}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta voluptate nostrum ab animi, eveniet inventore beatae
                    molestias magnam tempore laboriosam.
                </p>
            </div>
        </div>
    );
}
