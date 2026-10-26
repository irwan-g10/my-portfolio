import JourneyItemCard from './JourneyItemCard';

export default function JourneyItem({ left = true }) {
    let content;

    if (left) {
        content = (
            <div className="flex justify-end">
                <div className="relative flex gap-2 p-2">
                    <div
                        className="timeline absolute top-25 bottom-25 left-2 bg-blue-500"
                        style={{ width: '5px' }}
                    ></div>
                    <div className="flex flex-col gap-3">
                        <JourneyItemCard />
                        <JourneyItemCard />
                        <JourneyItemCard />
                    </div>
                </div>
            </div>
        );
    } else {
        content = (
            <div className="row gap-2 p-2">
                <div className="col-auto p-2">
                    <div
                        className="rounded-pill d-flex justify-content-center align-items-center bg-primary"
                        style={{ width: '5px', height: '100%' }}
                    >
                        <div
                            className="buletan border-light rounded-circle position-absolute border-4 bg-primary"
                            style={{ width: '20px', height: '20px' }}
                        ></div>
                    </div>
                </div>
                <div className="justify-content-start align-items-center fw-bold d-flex col-1 p-2">
                    2025
                </div>
                <div className="col rounded-5 border p-3">
                    <h5>Dicoding Indonesia</h5>
                    <div className="">Front End Developer</div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta voluptate nostrum ab animi, eveniet
                        inventore beatae molestias magnam tempore laboriosam.
                    </p>
                </div>
                <div className="col"></div>
            </div>
        );
    }
    return <div className="px-5">{content}</div>;
}
