export default function SocialButton({ icon }) {
    return (
        <div className="">
            <button className="md:text-2xl text-slate-100 bg-purple-400/40 border-purple-400/80 backdrop-blur-xl p-2 rounded-full flex  gap-2 font-semibold  hover:bg-black/40 hover:border-slate-200/50 border-2 transition-all border-blue-500 hover:text-slate-200 flex gap-3 justify-center items-center">{icon}</button>
        </div>
    )
}