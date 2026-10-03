export default function JourneyItemCard() {
    return (
        <div className="flex gap-4 items-center">
            <div className="buletan bg-blue-500 border-4 absolute start-0 border-white rounded-full "
                style={{ width: "20px", height: "20px" }}></div>
            <div className="font-bold ps-10">2025</div>
            <div className=" border rounded-lg p-5 shadow-sm">
                <h5 className="text-xl font-bold">Dicoding Indonesia</h5>
                <div className="text- italic">Front End Developer</div>
                <p className="text-sm" style={{ maxWidth: '350px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate nostrum ab animi, eveniet inventore beatae molestias magnam tempore laboriosam.</p>
            </div>
        </div>
    )
}