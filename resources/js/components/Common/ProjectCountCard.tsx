import GlareHover from "../GlareHover";

export default function ProjectCountCard({ count = 0, label = 'label' }) {
    return (
        <div style={{  position: 'relative' }}>
            <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
            >
                <div className=" flex flex-col items-center justify-center " >
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-xs font-bold absolute bottom-3">{label}</div>
                </div>
            </GlareHover>
        </div>

    )
}