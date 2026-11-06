export default function IconGenerate({ icon, className }) {
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
        iconElement = <i className={`devicon-${icon.source}`}></i>;
    } else if (icon.type === 'bootstrap-icons') {
        iconElement = <i className={`bi bi-${icon.source}`}></i>;
    } else {
        iconElement = <span>Unknown Icon Type</span>;
    }
    return (
        <div className={`flex items-center justify-center ${className}`}>
            {iconElement}
        </div>
    );
}
