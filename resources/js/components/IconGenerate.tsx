export default function IconGenerate({ icon }) {
    console.log(icon);
    let iconElement;
    if (icon.type === 'image') {
        iconElement = (
            <img
                src={icon.source}
                alt={icon.name}
                className="h-10 w-10"
            />
        );
    } else if (icon.type === 'dev-icons') {
        iconElement = <i className={`devicon-${icon.source} text-6xl`}></i>;
    } else if (icon.type === 'bootstrap-icons') {
        iconElement = <i className={`bi bi-${icon.source} text-6xl`}></i>;
    } else {
        iconElement = <span>Unknown Icon Type</span>;
    }
    return (
        <div className="flex items-center justify-center p-2">
            {iconElement}
        </div>
    );
}
