import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface StatisticCardProps {
    total?: string;
    title?: string;
    active?: boolean;
    onClick?: () => void;
}

export default function StatisticCard({
    total,
    title,
    active = false,
    onClick,
}: StatisticCardProps) {
    let pulseActive;
    const activeStyle = 'border-emerald-500/20 bg-emerald-500/10 ';
    if (active) {
        pulseActive = (
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500"></div>
        );
    }
    return (
        <Card
            className={`flex origin-bottom cursor-pointer flex-col justify-between text-xs transition-transform duration-300 ${active && activeStyle}`}
            onClick={onClick}
        >
            <div className="flex justify-between border-b-2 border-slate-950 pb-2">
                <div className="text-lg font-semibold">{title}</div>
                <Card className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 p-0">
                    {pulseActive}
                </Card>
            </div>
            <div className="flex justify-between gap-2">
                <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">{total}</span>
                    <span className="text-">Total {title} </span>
                </div>
                <Button
                    title="Add Project"
                    icon={<i className="bi bi-plus"></i>}
                    href={'projects/create'}
                />
            </div>
        </Card>
    );
}
