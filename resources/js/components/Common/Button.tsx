export default function Button({icon ='', title='', className=''}) {
    let content;

    
    content = (
        <button className={`text-md text-slate-100/70 bg-purple-400/40 border-purple-400/80 backdrop-blur-xl py-1 px-5 rounded-md flex  gap-2 font-semibold  hover:bg-black/40 hover:border-slate-200/50 border-2 transition-all border-blue-500 hover:text-slate-200 flex gap-3 justify-center items-center w-full ${className}`}>{title}</button>
    )

    return (
        <div className="w-full">
            {content}
        </div>
    )
}