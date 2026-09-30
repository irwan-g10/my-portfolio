import SectionTitle from "../Common/SectionTitle"

export default function ToolsAndSkillSection() {
    return (
        <div className="container mb-5">
            <SectionTitle title="Tools and Skills" />
            <div className="d-flex gap-2 justify-content-center align-items-center fw-bold text-primary mb-3">
                <div className="btn btn-outline-primary fw-bold">All</div>
                <div className="btn btn-outline-primary fw-bold">Programming Languages</div>
                <div className="btn btn-outline-primary fw-bold">Framework</div>
                <div className="btn btn-outline-primary fw-bold">Database</div>
                <div className="btn btn-outline-primary fw-bold">Version Control</div>
                <div className="btn btn-outline-primary fw-bold">AI Coding Asistant</div>
                <div className="btn btn-outline-primary fw-bold">Tools</div>
            </div>
            <div className="d-flex gap-2 justify-content-center align-items-center flex-wrap fw-bold text-secondary  p-2">
                <label className="p-2 border rounded small">PHP</label>
                <label className="p-2 border rounded small">Javascript</label>
                <label className="p-2 border rounded small">CSS</label>
                <label className="p-2 border rounded small">Node.js</label>
                <label className="p-2 border rounded small">Inertia.js</label>
                <label className="p-2 border rounded small">Bootstrap</label>
                <label className="p-2 border rounded small">Express.js</label>
                <label className="p-2 border rounded small">Hapi.js</label>
                <label className="p-2 border rounded small">MongoDB</label>
                <label className="p-2 border rounded small">PostgreSQL</label>
                <label className="p-2 border rounded small">MySQL</label>
                <label className="p-2 border rounded small">Laravel</label>
                <label className="p-2 border rounded small">React.js</label>
                <label className="p-2 border rounded small">Postman</label>
                <label className="p-2 border rounded small">Microsoft Office</label>
                <label className="p-2 border rounded small">Claude AI</label>
                <label className="p-2 border rounded small">Gemini AI</label>
                <label className="p-2 border rounded small">ChatGPT</label>
                <label className="p-2 border rounded small">Github Copiot</label>
            </div>


        </div>
    )
}