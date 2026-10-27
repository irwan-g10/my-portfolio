import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ProjectTableContent({ data }) {
    // data.map((i) => console.log(i.skills));
    console.log(data);
    return (
        <div className="w-full">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr>
                        <th className="">
                            <input type="checkbox" />
                        </th>
                        <th className="">No</th>
                        <th className="">Project Name</th>
                        <th className="">Tech Stack</th>
                        <th className="">Colaborator</th>
                        <th className="">Role</th>
                        <th className="">Skill</th>
                        <th className="">Status</th>
                        <th className="">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-600">
                    {data.map((project, index) => (
                        <tr
                            key={project.id}
                            className=""
                        >
                            <td className="py-3">
                                <input type="checkbox" />
                            </td>
                            <td className="py-3 whitespace-nowrap">
                                {index + 1}
                            </td>
                            <td className="py-3">{project.title}</td>
                            <td className="py-3">{project.techStack}</td>
                            <td className="py-3">{project.collaborator}</td>
                            <td className="py-3">{project.role}</td>
                            <td className="flex gap-2 py-3">
                                {project.skills.map((skill) => (
                                    <Badge label={skill.name} />
                                ))}
                            </td>
                            <td className="py-3">{project.status}</td>
                            <td className="flex justify-end gap-2 py-3">
                                <Button
                                    icon={<i className="bi bi-trash3"></i>}
                                    className="h-7 w-7 rounded-sm text-xs"
                                />
                                <Button
                                    icon={
                                        <i className="bi bi-pencil-square"></i>
                                    }
                                    className="h-7 w-7 rounded-sm text-xs"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
