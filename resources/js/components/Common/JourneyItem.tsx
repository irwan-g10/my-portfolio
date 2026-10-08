import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import ExpandableButton from "./ExpandableButton";
import JourneyItemCard from "./JourneyItemCard";

export default function JourneyItem({ left = true }) {

    let content;


    if (left) {
        content = (
            <div className="flex justify-end ">
                <div className=" p-2 flex gap-2 relative">
                    <div className="timeline bg-blue-500 absolute top-25 left-2 bottom-25" style={{ width: '5px' }}></div>
                    <div className="flex flex-col gap-3">

                        <JourneyItemCard />
                        <JourneyItemCard />
                        <JourneyItemCard />
                    </div>
                </div>
                    
            </div>

        )
    } else {
        content = (
            <div className="row gap-2 p-2 ">
                <div className="col-auto p-2">
                    <div
                        className="bg-primary rounded-pill d-flex justify-content-center align-items-center"
                        style={{ width: "5px", height: "100%" }}>
                        <div className="buletan bg-primary border-4 border-light rounded-circle position-absolute"
                            style={{ width: "20px", height: "20px" }}></div>
                    </div>
                </div>
                <div className="col-1 p-2 justify-content-start align-items-center fw-bold d-flex">2025</div>
                <div className="col border rounded-5 p-3">
                    <h5>Dicoding Indonesia</h5>
                    <div className="">Front End Developer</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate nostrum ab animi, eveniet inventore beatae molestias magnam tempore laboriosam.</p>
                </div>
                <div className="col"></div>
            </div>
        )

    }
    return (
        <div className="px-5">
            {content}
            
        </div>
    )
}