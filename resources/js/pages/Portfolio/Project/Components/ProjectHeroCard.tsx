import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ProjectHeroCard() {
    return (
        <div className="relative flex justify-center">
            <Card className="z-50 h-full w-100 bg-slate-950">
                <div className="relative overflow-hidden">
                    <div className="absolute top-5 right-5 z-100 text-sm text-xs font-extrabold">
                        <Card className="rounded-full bg-slate-600 p-1 px-3">
                            Laravel Developer
                        </Card>
                    </div>
                    <img
                        src="/images/website.png"
                        className="card-img-top z-0 h-full w-full rounded object-cover transition-all duration-500"
                        alt="Project Image"
                    />
                </div>
                <div>Webiste Portofolio</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, sequi nam error, nihil tempora quidem officiis sit
                    numquam, consectetur eius odit suscipit blanditiis saepe
                    voluptate magni id dolor fugiat delectus ab exercitationem.
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                    <Badge label="React JS" />
                    <Badge label="Laravel" />
                    <Badge label="Inertia.js" />
                    <Badge label="Bootstrap" />
                    <Badge label="+5" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Button title="Github" />
                    <Button title="View Demo" />
                </div>
            </Card>
            <Card className="absolute -right-20 z-40 h-full w-100 scale-90 bg-slate-950">
                <div className="relative overflow-hidden">
                    <div className="absolute top-5 right-5 z-100 text-sm text-xs font-extrabold">
                        <Card className="rounded-full bg-slate-600 p-1 px-3">
                            Laravel Developer
                        </Card>
                    </div>
                    <img
                        src="/images/website.png"
                        className="card-img-top z-0 h-full w-full rounded object-cover transition-all duration-500"
                        alt="Project Image"
                    />
                </div>
                <div>Webiste Portofolio</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, sequi nam error, nihil tempora quidem officiis sit
                    numquam, consectetur eius odit suscipit blanditiis saepe
                    voluptate magni id dolor fugiat delectus ab exercitationem.
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                    <Badge label="React JS" />
                    <Badge label="Laravel" />
                    <Badge label="Inertia.js" />
                    <Badge label="Bootstrap" />
                    <Badge label="+5" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Button title="Github" />
                    <Button title="View Demo" />
                </div>
            </Card>
            <Card className="absolute -right-40 h-full w-100 scale-80 bg-slate-950">
                <div className="relative overflow-hidden">
                    <div className="absolute top-5 right-5 z-100 text-sm text-xs font-extrabold">
                        <Card className="rounded-full bg-slate-600 p-1 px-3">
                            Laravel Developer
                        </Card>
                    </div>
                    <img
                        src="/images/website.png"
                        className="card-img-top z-0 h-full w-full rounded object-cover transition-all duration-500"
                        alt="Project Image"
                    />
                </div>
                <div>Webiste Portofolio</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, sequi nam error, nihil tempora quidem officiis sit
                    numquam, consectetur eius odit suscipit blanditiis saepe
                    voluptate magni id dolor fugiat delectus ab exercitationem.
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                    <Badge label="React JS" />
                    <Badge label="Laravel" />
                    <Badge label="Inertia.js" />
                    <Badge label="Bootstrap" />
                    <Badge label="+5" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Button title="Github" />
                    <Button title="View Demo" />
                </div>
            </Card>
        </div>
    );
}
