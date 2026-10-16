import Badge from '../ui/Badge';
import Card from '../ui/Card';

export default function ProjectCard({ onClick }) {
    return (
        <div
            className="group relative h-70 w-100 overflow-hidden rounded-2xl border-2 border-slate-100/20"
            onClick={onClick}
        >
            <img
                src="/images/website.png"
                className="card-img-top h-full w-full rounded object-cover transition-all duration-500 group-hover:scale-110"
                alt="Project Image"
            />
            <div className="cardbody absolute inset-0 flex flex-col items-center justify-end gap-2 bg-slate-950/50 p-5 backdrop-blur-xs group-hover:backdrop-blur-none">
                <div className="text-xl font-black">Project Title</div>
                <div className="card-text mb-2 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Delectus at corrupti tempora. Consectetur, dolorum ratione?
                </div>
                <hr className="my-2 w-full rounded-full border border-slate-100" />
                <div className="mb-5 flex flex-wrap gap-2">
                    <Badge label="React JS" />
                    <Badge label="Laravel" />
                    <Badge label="Inertia.js" />
                    <Badge label="Bootstrap" />
                    <Badge label="+5" />
                </div>
            </div>
            <div className="absolute top-3 right-3 text-sm text-xs font-semibold">
                <Card
                    content={'Laravel Developer'}
                    className="rounded-full bg-slate-100 p-1 px-3 text-slate-950"
                />
            </div>
            {/* <div className="card-body flex flex-col gap-2 p-5">
                <div className="absolute top-5 right-5 text-sm text-xs font-semibold">
                    <Card
                        content={'Laravel Developer'}
                        className="rounded-full border-slate-400/20 bg-slate-400/10 p-1 px-3 text-slate-950"
                    />
                </div>
                <div className="text-xl font-black">Project Title</div>
                <div className="card-text mb-2 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Delectus at corrupti tempora. Consectetur, dolorum ratione?
                </div>
                <hr className="my-2 w-full" />
                <div className="mb-5 flex flex-wrap gap-2">
                    <Badge label="React JS" />
                    <Badge label="Laravel" />
                    <Badge label="Inertia.js" />
                    <Badge label="Bootstrap" />
                    <Badge label="+5" />
                </div>
            </div> */}
        </div>
    );
}
