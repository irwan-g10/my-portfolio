import Button from "./Button";
import TechLabel from "./TechLabel";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CertificationCard() {
    return (
        <div className="justify-center items-center flex flex-col">
            <div className=" grid md:grid-cols-3 justify-center items-center gap-3">
                <div className=" text-center">
                        <div className="text-sm">Desember 2025</div>
                        <div className="text-lg font-bold">Dicoding Academy</div>
                    
                </div>
                <div className="flex flex-col gap-3">
                        <h5 className="font-black text-xl">Full Stack Web Developer</h5>
                        <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit distinctio unde tenetur. Expedita, quam eligendi! Odit ullam unde officia ipsum!</div>
                        <div className="flex gap-2">
                            <TechLabel label="Laravel" />
                            <TechLabel label="Laravel" />
                            <TechLabel label="Laravel" />
                            <TechLabel label="Laravel" />
                        </div>
                </div>
                <div className="items-end flex justify-end">
                    <Button title="Lihat Sertifikat"/>
                </div>
            </div>
            <hr className='border-2 w-full md:w-3/5 my-3 rounded-full ' />
        </div>
    )
}