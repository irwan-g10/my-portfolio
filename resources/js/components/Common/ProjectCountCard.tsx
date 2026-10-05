import GlareHover from "../GlareHover";

export default function ProjectCountCard({ count = 0, label = 'label' }) {
    return (
        <div className="relative">
            <GlareHover
                width="120px"
                height="120px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
            >
                <div className=" flex flex-col items-center justify-center " >
                    <div className="text-2xl font-bold text-purple-500">{count}</div>
                    <div className="text-xs absolute bottom-3">{label}</div>
                </div>
            </GlareHover>
        </div>

    )
}