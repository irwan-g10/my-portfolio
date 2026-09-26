import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <div className="bg-light text-dark min-vh-100">
            {/* Navbar Header */}
            <div className="d-flex justify-content-between align-items-center px-4 px-md-5 py-3 shadow-sm border-bottom bg-white sticky-top">
                <div className="navbar-title">
                    <div className="fw-bold fs-4 text-primary">Atomic Site</div>
                </div>
                <div className="navbar-list d-flex align-items-center gap-2 gap-md-3 fw-medium">
                    <div className="p-2 text-primary border-bottom border-2 border-primary cursor-pointer">Home</div>
                    <div className="p-2 text-secondary cursor-pointer">About</div>
                    <div className="p-2 text-secondary cursor-pointer">Project</div>
                    <div className="p-2 text-secondary cursor-pointer">Blog</div>
                    <div className="p-2 btn btn-primary rounded-pill px-3 ms-2">Contact Me</div>
                </div>
            </div>

            <div className="container py-4">
                {/* Hero / Greetings Section */}
                <div className="body row justify-content-between align-items-center p-4 p-md-5 my-4 my-md-5 bg-white rounded-4 shadow-sm gap-4 gap-md-0">
                    <div className="greetings col-12 col-md-7">
                        <div className="perkenalan">
                            <h3 className="text-secondary fw-semibold mb-2">Hello Semua 👋</h3>
                            <h1 className="display-6 fw-bold mb-2">
                                Nama Saya <span className="text-primary">Irwan Gumilar</span>
                            </h1>
                            <span className="badge bg-primary-subtle text-primary fs-6 fw-semibold px-3 py-2 rounded-pill mb-3">
                                Saya Seorang Frontend Developer
                            </span>
                            <p className="mt-3 text-secondary lh-lg">
                                Berfokus pada pembuatan antarmuka web yang intuitif, cepat, dan responsif. Berpengalaman dalam membangun aplikasi web modern menggunakan ekosistem React, Laravel, dan Bootstrap untuk menghadirkan pengalaman pengguna yang optimal.
                            </p>
                        </div>
                    </div>

                    <div className="profesional-foto col-12 col-md-4 align-items-center justify-content-center d-flex flex-column gap-3">
                        <div 
                            className="bg-secondary-subtle border border-2 border-dashed border-secondary text-secondary rounded-4 d-flex align-items-center justify-content-center fw-bold shadow-sm"
                            style={{ width: '180px', height: '240px' }}
                        >
                            Foto
                        </div>
                        <div className="d-flex gap-3 align-items-center justify-content-center bg-light px-3 py-2 rounded-pill border">
                            <div className="fw-semibold text-secondary small">Find me on:</div>
                            <div className="d-flex gap-2">
                                <span className="badge bg-primary rounded-circle p-2 cursor-pointer">I</span>
                                <span className="badge bg-primary rounded-circle p-2 cursor-pointer">F</span>
                                <span className="badge bg-primary rounded-circle p-2 cursor-pointer">L</span>
                                <span className="badge bg-primary rounded-circle p-2 cursor-pointer">W</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Project Section */}
                <div className="latest-project my-5 p-4 p-md-5 bg-white rounded-4 shadow-sm">
                    <h1 className="fw-bold mb-4 border-bottom pb-3">Latest Project</h1>
                    
                    {/* Project Counter Stats */}
                    <div className="project-count row text-center g-3 mb-5">
                        <div className="col-6 col-md-3">
                            <div className="p-3 bg-light rounded-3 border">
                                <h3 className="fw-bold text-primary mb-1">15+</h3>
                                <div className="text-muted small">Client Order</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-3 bg-light rounded-3 border">
                                <h3 className="fw-bold text-primary mb-1">20+</h3>
                                <div className="text-muted small">Completed Project</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-3 bg-light rounded-3 border">
                                <h3 className="fw-bold text-primary mb-1">4.9</h3>
                                <div className="text-muted small">Star Rating</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-3 bg-light rounded-3 border">
                                <h3 className="fw-bold text-primary mb-1">12+</h3>
                                <div className="text-muted small">Months of Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Project Cards */}
                    <div className="project-list row g-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                                <div className="bg-secondary-subtle text-center py-5 border-bottom text-muted fw-semibold">
                                    Gambar Project 1
                                </div>
                                <div className="project-detail card-body">
                                    <h5 className="card-title fw-bold">E-Commerce Web Application</h5>
                                    <p className="card-text text-secondary small">Aplikasi toko online responsif dengan integrasi payment gateway dan keranjang belanja.</p>
                                </div>
                                <div className="card-footer bg-white border-0 pb-3">
                                    <button className="btn btn-outline-primary btn-sm w-100 rounded-pill">Detail</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                                <div className="bg-secondary-subtle text-center py-5 border-bottom text-muted fw-semibold">
                                    Gambar Project 2
                                </div>
                                <div className="project-detail card-body">
                                    <h5 className="card-title fw-bold">Company Profile & Dashboard</h5>
                                    <p className="card-text text-secondary small">Website profil perusahaan modern dilengkapi dengan sistem manajemen konten internal.</p>
                                </div>
                                <div className="card-footer bg-white border-0 pb-3">
                                    <button className="btn btn-outline-primary btn-sm w-100 rounded-pill">Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What I Do Section */}
                <div className="skill my-5 p-4 p-md-5 bg-white rounded-4 shadow-sm">
                    <h1 className="fw-bold mb-4 border-bottom pb-3">What I Do</h1>
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <div className="p-4 bg-light rounded-4 h-100 border">
                                <h4 className="fw-bold text-primary mb-3">Web Design</h4>
                                <p className="text-secondary small mb-0">Merancang antarmuka pengguna (UI/UX) yang bersih, estetik, dan berfokus pada kenyamanan pengguna saat bernavigasi.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="p-4 bg-light rounded-4 h-100 border">
                                <h4 className="fw-bold text-primary mb-3">Frontend Development</h4>
                                <p className="text-secondary small mb-0">Menerjemahkan desain visual menjadi kode web yang interaktif, responsif, dan ringan menggunakan React.js.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="p-4 bg-light rounded-4 h-100 border">
                                <h4 className="fw-bold text-primary mb-3">Backend Integration</h4>
                                <p className="text-secondary small mb-0">Menghubungkan tampilan frontend dengan database dan server API berbasis Laravel secara seamless.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Hire Me Section */}
                <div className="why-hire-me my-5 p-4 p-md-5 bg-white rounded-4 shadow-sm">
                    <h1 className="fw-bold mb-4 border-bottom pb-3">Why Hire Me</h1>
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-primary text-white rounded-circle px-3 py-2 fw-bold">1</div>
                                <div>
                                    <h5 className="fw-bold mb-1">Kode Bersih & Terstruktur</h5>
                                    <p className="text-secondary small">Menulis sintaks yang rapi, modular, serta mudah dirawat atau dikembangkan kembali oleh tim.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-primary text-white rounded-circle px-3 py-2 fw-bold">2</div>
                                <div>
                                    <h5 className="fw-bold mb-1">Desain Responsif</h5>
                                    <p className="text-secondary small">Memastikan website tampil sempurna di semua layar, dari smartphone hingga layar desktop lebar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-primary text-white rounded-circle px-3 py-2 fw-bold">3</div>
                                <div>
                                    <h5 className="fw-bold mb-1">Komunikasi Aktif</h5>
                                    <p className="text-secondary small">Terbiasa memberikan laporan berkala mengenai perkembangan project agar sesuai target.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-start gap-3">
                                <div className="bg-primary text-white rounded-circle px-3 py-2 fw-bold">4</div>
                                <div>
                                    <h5 className="fw-bold mb-1">Problem Solver</h5>
                                    <p className="text-secondary small">Fokus memberikan solusi teknis yang efisien untuk memecahkan masalah bisnis klien.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* My Journey Section */}
                <div className="journey my-5 p-4 p-md-5 bg-white rounded-4 shadow-sm">
                    <h1 className="fw-bold mb-4 border-bottom pb-3">My Journey</h1>
                    <div className="position-relative ps-4 border-start border-2 border-primary ms-2">
                        <div className="mb-4 position-relative">
                            <div className="position-absolute start-0 top-0 translate-middle-x bg-primary rounded-circle" style={{ width: '12px', height: '12px', marginLeft: '-25px' }}></div>
                            <span className="text-primary fw-bold small">2024 - Sekarang</span>
                            <h5 className="fw-bold mt-1 mb-1">Full-stack & Frontend Developer</h5>
                            <p className="text-secondary small mb-0">Aktif mengerjakan project freelancing dan membangun aplikasi web menggunakan Laravel, Inertia, dan React.</p>
                        </div>
                        <div className="mb-4 position-relative">
                            <div className="position-absolute start-0 top-0 translate-middle-x bg-secondary rounded-circle" style={{ width: '12px', height: '12px', marginLeft: '-25px' }}></div>
                            <span className="text-secondary fw-bold small">2023 - 2024</span>
                            <h5 className="fw-bold mt-1 mb-1">Mempelajari Web Development</h5>
                            <p className="text-secondary small mb-0">Mendalami fundamental HTML, CSS, JavaScript dasar hingga framework modern secara otodidak dan intensif.</p>
                        </div>
                    </div>
                </div>

                {/* Tools and Skills Section */}
                <div className="tools-and-skills my-5 p-4 p-md-5 bg-white rounded-4 shadow-sm">
                    <h1 className="fw-bold mb-4 border-bottom pb-3">Tools and Skills</h1>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark border p-3 fs-6">JavaScript (ES6+)</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">React.js</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">PHP</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">Laravel</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">Inertia.js</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">Bootstrap 5</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">HTML5 & CSS3</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">Git & GitHub</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">MySQL</span>
                        <span className="badge bg-light text-dark border p-3 fs-6">Vite</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer bg-dark text-white text-center py-4 mt-5">
                <div className="container">
                    <div className="fw-bold fs-5 text-primary mb-2">Atomic Site</div>
                    <p className="text-secondary small mb-3">Built with Laravel, Inertia.js, React, and Bootstrap 5.</p>
                    <p className="mb-0 text-secondary small">&copy; {new Date().getFullYear()} Irwan Gumilar. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}