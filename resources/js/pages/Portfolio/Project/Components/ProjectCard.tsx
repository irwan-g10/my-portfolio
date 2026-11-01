import Card from '@/components/ui/Card';
import Badge from '../../../../components/ui/Badge';

export default function ProjectCard({ onClick }) {
    return (
        <div
            className="group relative h-50 w-80 overflow-hidden rounded-2xl border-2 border-slate-100/20 transition-transform duration-300 hover:-translate-y-5 hover:scale-105 hover:rotate-5"
            onClick={onClick}
        >
            <img
                src="/images/website.png"
                className="card-img-top h-full w-full rounded object-cover transition-all duration-500 group-hover:scale-110"
                alt="Project Image"
            />
            <div className="cardbody absolute inset-0 flex flex-col justify-between bg-slate-950/50 p-5 backdrop-blur-[2px] group-hover:backdrop-blur-none">
                <div className="flex w-full justify-end text-sm text-[9px] font-semibold">
                    <Card className="rounded-full p-1 px-3">
                        Laravel Developer
                    </Card>
                </div>
                <div className="text-center">
                    <div className="mb-2 text-sm font-black">Project Title</div>
                    <div className="card-text text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Delectus at corrupti tempora.
                    </div>
                </div>
                <div>
                    <hr className="my-2 w-full rounded-full border border-slate-100" />
                    <div className="flex scale-90 flex-wrap justify-center gap-2">
                        <Badge label="React JS" />
                        <Badge label="Laravel" />
                        <Badge label="Bootstrap" />
                        <Badge label="+5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
