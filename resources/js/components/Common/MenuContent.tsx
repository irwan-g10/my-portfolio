export default function MenuContent({ children, title = '' }) {
    return (
        <div className="500 m-10">
            <div className="text-3xl font-bold">{title}</div>
            {children}
        </div>
    );
}
