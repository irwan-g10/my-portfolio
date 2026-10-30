import Card from '../../../../components/ui/Card';

export default function OfferingCard({
    title = '',
    image = '',
    description = '',
    scale = '',
}) {
    return (
        // <Motion>
        <Card className="w-80">
            <div className="relative flex flex-col gap-5 p-3">
                <div className="flex gap-2">
                    <Card className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-950">
                        <i className="bi bi-server"></i>
                    </Card>
                    <h5 className="flex flex-1 items-center justify-center text-xl font-bold">
                        {title}
                    </h5>
                </div>
                <div className="text-sm">{description}</div>
                <div className="absolute right-0 bottom-0 h-10 w-20 rounded-br-xl border-r-3 border-b-3 border-slate-950"></div>
            </div>
        </Card>
        // </Motion>
    );
}
