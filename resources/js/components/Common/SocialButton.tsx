export default function SocialButton({ icon }) {
    return (
        <div className="">
            <button className="flex items-center justify-center gap-2 gap-3 rounded-full border-2 border-blue-500 border-purple-400/80 bg-purple-400/40 p-2 font-semibold text-slate-100 backdrop-blur-xl transition-all hover:border-slate-200/50 hover:bg-black/40 hover:text-slate-200 md:text-2xl">
                {icon}
            </button>
        </div>
    );
}
