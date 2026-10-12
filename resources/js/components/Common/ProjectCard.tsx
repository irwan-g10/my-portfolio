import Badge from '../ui/Badge';
import Card from '../ui/Card';

export default function ProjectCard({ onClick }) {
    return (
        <div
            className="relative max-w-80 overflow-hidden rounded-2xl border-2"
            onClick={onClick}
        >
            <img
                src="/images/website.png"
                className="card-img-top rounded object-cover"
                alt="Project Image"
            />
            <div className="card-body flex flex-col gap-2 p-5">
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
            </div>
        </div>
    );
}
