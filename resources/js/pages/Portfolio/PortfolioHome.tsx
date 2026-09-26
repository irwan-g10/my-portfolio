import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <div className=" d-flex justify-content-between align-items-center px-5 py-3 shadow-sm border-bottom">
                <div className="navbar-title">
                    <div>Atomic Site</div>
                </div>
                <div className="navbar-list d-flex gap-3">

                    <div className="p-2">Home</div>
                    <div className="p-2">About</div>
                    <div className="p-2">project</div>
                    <div className="p-2">Blog </div>
                    <div className="p-2">Contact Me</div>
                </div>
            </div>



            <div className="body row justify-content-between align-items-center p-5 m-5 shadow-sm gap-5">
                <div className="greetings col">
                    <div className="perkenalan">
                        <h3>Hello Semua</h3>
                        
                        <h1>Nama Saya <span className="text-primary">Irwan Gumilar</span></h1>
                        <label className="text-secondary">Saya Seorang Frontend Developer</label>
                        <p className="mt-3">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus obcaecati quos fuga quidem ab totam corrupti repellat autem ratione? Aut dolorem eaque officiis natus veritatis sed, qui nam numquam quia mollitia possimus harum, magni alias ratione reprehenderit repellat reiciendis quae! Rerum, totam sapiente minima fugiat dolores, nam saepe mollitia quos, illum eveniet quas quis voluptatem vitae reprehenderit cupiditate sed.
                        </p>
                    </div>
                </div>
                <div className="profesional-foto  col-4 align-items-center justify-content-center d-flex flex-column gap-3 ">
                    <div className="bg-secondary p-5">foto</div>
                    <div className="d-flex gap-3 align-items-center justify-content-center ">
                        <div>find me on</div>
                        <div className="d-flex gap-3">
                            <div>I</div>
                            <div>F</div>
                            <div>L</div>
                            <div>W</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="latest-project">
                <h1>Latest Project</h1>
                <div className="project-count">
                    <div>Client Order</div>
                    <div>Completed Project</div>
                    <div>Star Rating</div>
                    <div>Months of Experience</div>
                </div>
                <div className="project-list">
                    <div>
                        <div>gambar</div>
                        <div className="project-detail">
                            <p>Project Name</p>
                            <p>Description of the project.</p>
                        </div>
                        <div>Detail</div>
                    </div>
                </div>
            </div>

            <div className="skill ">
                <h1>What I Do</h1>
            </div>
            <div className="project-count">Project Count</div>
            <div className="why-hire-me">Why Hire Me</div>
            <div className="journey">My Journey</div>
            <div className="tools-and-skills">Tools and Skills</div>
            <div className="footer">Footer</div>
        </>

        
    )
}
