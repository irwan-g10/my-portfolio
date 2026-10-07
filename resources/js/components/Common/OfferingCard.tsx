import Card from "./Card";

export default function OfferingCard({ title = '', image = '', description = '', scale=''}) {
    return (
        <div className={`text-slate-300/70 transition-transform duration-300 w-full origin-center ${scale}`}>
            <Card 
            content={

                <div className="flex flex-col p-3 gap-5">

                    <h5 className="text-xl  text-white font-bold flex justify-center">Back-End</h5>
                    <div className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima totam iure debitis voluptatum voluptates, quidem inventore earum. Deleniti, ab.</div>
                    <div className="features flex gap-5">
                        <div className="icon flex-1 justify-center items-center flex">
                            <i className="bi bi-server text-6xl text-whitfeature ke-e "></i>
                        </div>
                        <div className="flex-2 text-xs flex-col justify-center flex">
                            
                            <div>feature ke-1</div>
                            <div>feature ke-2</div>
                            <div>feature ke-3</div>
                            <div>feature ke-4</div>
                            <div>feature ke-5</div>
                        </div>
                    </div>
                </div>
            }
            className="bg-purple-500/10 border-purple-400/20 border-3"
            />
        </div>
    )

}