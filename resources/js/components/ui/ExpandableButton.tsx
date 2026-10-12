import Button from './Button';

export default function ExpandableButton({ title = '' }) {
    let icon = <i className="bi bi-arrow-right"></i>;
    return (
        <div className="backdrop-blur- absolute inset-x-0 bottom-0 flex h-50 items-end justify-center bg-linear-to-t from-slate-100 via-slate-100/90 to-slate-100/10 dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950/10">
            {/* Lihat Lebih Banyak */}
            <Button
                title={title}
                icon={icon}
                className="backdrop-none border-none bg-transparent hover:scale-110 hover:bg-transparent"
            />
        </div>
    );
}
