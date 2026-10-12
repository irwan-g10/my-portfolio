import { FaGithub, FaStar } from 'react-icons/fa6';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectHeroCard() {
    return (
        <div className="rounded-2xl border p-5 py-10 shadow-sm">
            <div className="flex">
                <div className="gambar flex flex-3 items-center justify-start">
                    <img
                        src="/images/website.png"
                        alt="Project Image"
                        className="img-fluid object-fit-cover rounded-5 border border-secondary shadow-sm"
                        style={{ height: '250px' }}
                    />
                </div>
                <div className="deskripsi flex flex-2 flex-col gap-2">
                    <div
                        className="mb-2 mb-3 flex items-center gap-2 rounded-full border bg-blue-500 p-1 px-5 font-bold text-white italic shadow-sm"
                        style={{ width: 'fit-content' }}
                    >
                        <FaStar />
                        <span>On-Going Project</span>
                    </div>
                    <h3 className="text-xl font-bold">
                        E-Commerce Web Application
                    </h3>
                    <div className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Similique aliquam eum adipisci ullam ex, saepe cum
                        atque at aut dolorum officiis pariatur voluptate
                        laudantium. Quod fugiat, placeat est sunt, vel aut sequi
                        nemo eum totam odit ut vero deleniti! Fuga?
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Badge label="React JS" />
                        <Badge label="Laravel" />
                        <Badge label="Inertia.js" />
                        <Badge label="Bootstrap" />
                        <Badge label="+5" />
                    </div>
                    <div className="align-items-center mt-3 flex justify-end gap-3">
                        <Button title="Live Demo" />
                        <Button
                            title="GIthub"
                            icon={<FaGithub />}
                        />
                    </div>
                </div>
            </div>
            {/* <ProjectList /> */}
        </div>
    );
}
