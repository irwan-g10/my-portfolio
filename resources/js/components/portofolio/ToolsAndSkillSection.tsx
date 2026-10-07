import Card from "../Common/Card"
import SectionTitle from "../Common/SectionTitle"
import JellyRadio from "../JellyRadio"

export default function ToolsAndSkillSection() {

    const skills = [
        "PHP", "JavaScript", "CSS", "Node.js", "Inertia.js",
        "Bootstrap", "Express.js", "Hapi.js", "MongoDB", "PostgreSQL",
        "MySQL", "Laravel", "React.js", "Postman", "Microsoft Office",
        "Claude AI", "Gemini AI", "ChatGPT", "GitHub Copilot"
    ];

    return (
        <div className="w-4/5 mx-auto mb-10">
            <SectionTitle title="Tools and Skills" />
            {/* <div className="flex flex-row gap-2 justify-center align-items-center mb-5 flex-wrap"> */}
            <div className="mb-5 flex justify-center items-center">
                <JellyRadio
                    items={[
                        { value: 'All', label: 'All' },
                        { value: 'Programming Language', label: 'Programming Language' },
                        { value: 'Framework', label: 'Framework' },
                        { value: 'Database', label: 'Database' },
                        { value: 'Version Control', label: 'Version Control' },
                        { value: 'AI Coding Asistant', label: 'AI Coding Asistant' },
                        { value: 'Tools', label: 'Tools' },
                    ]}
                    defaultValue="All"
                    onChange={(value, index) => console.log(value, index)}
                    chipColor="#27272a"
                    activeColor="#f5f5f5"
                    textColor="#f5f5f5"
                    activeTextColor="#18181b"
                    size="md"
                    gap={8}
                    radius={18}
                    swell={0.2}
                    barge={6}
                    shrink={0.05}
                    jelly={1}
                    bounce={0.25}
                    stagger={22}
                    stiffness={580}
                />
                {/* <div className="btn btn-outline-primary fw-bold">All</div>
                <div className="btn btn-outline-primary fw-bold">Programming Languages</div>
                <div className="btn btn-outline-primary fw-bold">Framework</div>
                <div className="btn btn-outline-primary fw-bold">Database</div>
                <div className="btn btn-outline-primary fw-bold">Version Control</div>
                <div className="btn btn-outline-primary fw-bold">AI Coding Asistant</div>
                <div className="btn btn-outline-primary fw-bold">Tools</div> */}
            </div>
            <div className="flex flex-row gap-2 justify-center items-center flex-wrap">
                {skills.map((skill, index) => (

                    <Card key={index} content={<div className="">{skill}</div>} className="w-fit p-2 text-sm text-slate-300 bg-slate-500/10 border-slate-400/20 " />
                ))}
            </div>


        </div>
    )
}