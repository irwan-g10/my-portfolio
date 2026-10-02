export default function Button({icon, title=''}) {
    let content;

    
    content = (
        <button className="text-md bg-blue-500 text-white py-1 px-5 rounded-md flex  gap-2 font-semibold  hover:bg-transparent border-2 transition-all border-blue-500 hover:text-blue-500 flex gap-3 justify-center items-center">{title} {icon}</button>
    )

    return (
        <div className="">
            {content}
        </div>
    )
}