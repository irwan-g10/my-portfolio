export default function ProjectTableContent({ data }) {
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
                            <td className="py-3">{project.skill}</td>
                            <td className="py-3">{project.status}</td>
                            <td className="py-3whitespace-nowrap">
                                edit hapus
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
