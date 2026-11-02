import Button from '@/components/ui/Button';

export default function TechStackTableContent({ techStacks }) {
    return (
        <div className="w-full">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr>
                        <th className="">
                            <input type="checkbox" />
                        </th>
                        <th className="">No</th>
                        <th className="">Tech Stack Name</th>
                        <th className="">Jobdesc</th>
                        <th className="">Description</th>
                        <th className="text-end">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-600">
                    {techStacks.map((project, index) => (
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
                            <td className="py-3">{project.job_desc}</td>
                            <td className="py-3">{project.description}</td>
                            <td className="flex justify-end gap-2 py-3">
                                <Button
                                    icon={<i className="bi bi-trash3"></i>}
                                    className="h-7 w-7 rounded-sm text-xs"
                                />
                                <Button
                                    icon={
                                        <i className="bi bi-pencil-square"></i>
                                    }
                                    href={`/tech-stacks/${project.id}/update`}
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
