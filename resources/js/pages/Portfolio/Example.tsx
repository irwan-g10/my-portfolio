import { Link } from '@inertiajs/react';

export default function Example() {
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
                    <div className="project-list d-flex flex-column gap-4">

                        {/* =========================================================================
        1. FEATURED PROJECT (Layout Horizontal Utama - Mengambil Penuh Row)
       ========================================================================= */}
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-primary bg-gradient text-white">
                            <div className="row g-0 align-items-center">
                                {/* Sisi Kiri: Gambar Preview */}
                                <div className="col-12 col-lg-7 bg-dark text-white-50 text-center py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '260px' }}>
                                    <span className="fs-5 fw-semibold">Preview Utama: E-Commerce Platform</span>
                                </div>
                                {/* Sisi Kanan: Detail Text */}
                                <div className="col-12 col-lg-5 p-4 p-md-5">
                                    <span className="badge bg-light text-primary rounded-pill mb-2 px-3 py-2 fw-bold">★ Featured Project</span>
                                    <h3 className="fw-bold mb-2">E-Commerce Web Application</h3>
                                    <p className="text-white-50 small mb-3">
                                        Platform toko online lengkap dengan Payment Gateway, manajemen stok real-time, dan dashboard analitik penjualan.
                                    </p>
                                    <div className="d-flex gap-2 mb-4 flex-wrap">
                                        <span className="badge bg-white bg-opacity-25 rounded-pill">Laravel</span>
                                        <span className="badge bg-white bg-opacity-25 rounded-pill">React</span>
                                        <span className="badge bg-white bg-opacity-25 rounded-pill">Inertia.js</span>
                                        <span className="badge bg-white bg-opacity-25 rounded-pill">Bootstrap 5</span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <a href="#" className="btn btn-light text-primary fw-bold rounded-3 px-4">Live Demo</a>
                                        <a href="#" className="btn btn-outline-light rounded-3 px-3">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light text-dark py-4 pb-5">
                            {/* Navigasi Atas / Breadcrumb */}
                            <div className="container mb-4">
                                <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded-4 shadow-sm border">
                                    <a href="#" className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-inline-flex align-items-center gap-2">
                                        <span>&larr;</span> Kembali ke Portofolio
                                    </a>
                                    <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill">
                                        ★ Featured Project
                                    </span>
                                </div>
                            </div>

                            <div className="container">
                                {/* Header Banner Section */}
                                <div className="bg-primary bg-gradient text-white rounded-4 p-4 p-md-5 shadow-sm mb-4 position-relative overflow-hidden">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-lg-8">
                                            <span className="badge bg-white bg-opacity-25 text-white rounded-pill px-3 py-2 fw-semibold mb-3">
                                                Full-stack Web Development
                                            </span>
                                            <h1 className="display-5 fw-bold mb-3">E-Commerce Web Application</h1>
                                            <p className="lead text-white-50 mb-4">
                                                Platform toko online skala menengah dengan sistem pembayaran otomatis, manajemen inventaris real-time, dan dashboard analitik penjualan yang aman dan responsif.
                                            </p>
                                            <div className="d-flex gap-3 flex-wrap">
                                                <a href="#" target="_blank" rel="noreferrer" className="btn btn-light text-primary fw-bold px-4 py-2 rounded-3 shadow-sm">
                                                    🌐 Live Demo
                                                </a>
                                                <a href="#" target="_blank" rel="noreferrer" className="btn btn-outline-light fw-semibold px-4 py-2 rounded-3">
                                                    GitHub Repository
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4">
                                    {/* Kolom Kanan / Utama: Detail Content */}
                                    <div className="col-12 col-lg-8">

                                        {/* Main Preview Container */}
                                        <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
                                            <h4 className="fw-bold mb-3 border-bottom pb-2">Tampilan Antarmuka Aplikasi</h4>

                                            {/* Placeholder Screenshot Utama */}
                                            <div className="bg-dark text-white rounded-4 overflow-hidden mb-3 text-center d-flex flex-column align-items-center justify-content-center p-5" style={{ minHeight: '360px' }}>
                                                <div className="py-4">
                                                    <span className="fs-1 d-block mb-2">🖥️</span>
                                                    <h5 className="fw-semibold mb-1">Preview Utama: Dashboard Analytics & Penjualan</h5>
                                                    <p className="text-white-50 small mb-0 px-md-5">Ganti area ini dengan elemen tag &lt;img /&gt; untuk menampilkan screenshot asli project kamu.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Ringkasan & Latar Belakang Project */}
                                        <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-4">
                                            <h3 className="fw-bold mb-3">Latar Belakang & Ringkasan</h3>
                                            <p className="text-secondary lh-lg mb-4">
                                                Project ini dibangun untuk menyelesaikan kendala efisiensi yang dialami UMKM ritel dalam mengelola stok barang di berbagai platform penjualan. Sistem ini mengintegrasikan seluruh katalog produk ke dalam satu basis data terpusat, memproses pesanan masuk secara real-time, dan langsung menerbitkan invoice digital setelah transaksi berhasil.
                                            </p>

                                            <h4 className="fw-bold mb-3">Fitur-Fitur Utama</h4>
                                            <div className="row g-3">
                                                <div className="col-12 col-md-6">
                                                    <div className="p-3 bg-light rounded-3 border h-100">
                                                        <h6 className="fw-bold text-primary mb-2">💳 Payment Gateway Integration</h6>
                                                        <p className="text-secondary small mb-0">Dukungan otomatisasi pembayaran via Transfer Bank, QRIS, dan E-Wallet dengan callback webhook aman.</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="p-3 bg-light rounded-3 border h-100">
                                                        <h6 className="fw-bold text-primary mb-2">📦 Real-time Inventory Sync</h6>
                                                        <p className="text-secondary small mb-0">Pengurangan stok otomatis saat transaksi terverifikasi untuk mencegah overselling.</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="p-3 bg-light rounded-3 border h-100">
                                                        <h6 className="fw-bold text-primary mb-2">📊 Executive Analytics Dashboard</h6>
                                                        <p className="text-secondary small mb-0">Grafik penjualan bulanan, rekapitulasi laba, serta laporan barang terlaris (best-seller).</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="p-3 bg-light rounded-3 border h-100">
                                                        <h6 className="fw-bold text-primary mb-2">⚡ Single Page Application (SPA)</h6>
                                                        <p className="text-secondary small mb-0">Navigasi tanpa reload halaman berkat kombinasi Inertia.js dan React.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tantangan Teknis & Solusi */}
                                        <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border">
                                            <h3 className="fw-bold mb-4">Tantangan Teknis & Solusi</h3>
                                            <div className="d-flex flex-column gap-4">
                                                <div className="border-start border-3 border-primary ps-3">
                                                    <h5 className="fw-bold text-dark mb-1">Manajemen State Pembayaran Real-Time</h5>
                                                    <p className="text-secondary small mb-2">
                                                        <strong>Tantangan:</strong> Memastikan status pesanan pembeli langsung berubah menjadi "Lunas" tanpa membuat halaman menjadi berat karena polling berulang.
                                                    </p>
                                                    <p className="text-secondary small mb-0">
                                                        <strong>Solusi:</strong> Menggunakan arsitektur Webhook Laravel yang dikombinasikan dengan pembungkusan state dinamis Inertia.js untuk memperbarui antarmuka pengguna secara efisien.
                                                    </p>
                                                </div>

                                                <div className="border-start border-3 border-primary ps-3">
                                                    <h5 className="fw-bold text-dark mb-1">Optimasi Performa Query Katalog Produk</h5>
                                                    <p className="text-secondary small mb-2">
                                                        <strong>Tantangan:</strong> Lambatnya pemuatan data saat melakukan pencarian berantai (filter kategori, harga, dan urutan sekaligus).
                                                    </p>
                                                    <p className="text-secondary small mb-0">
                                                        <strong>Solusi:</strong> Menerapkan indeksasi database MySQL pada kolom pencarian utama serta optimasi Eloquent Query melalui penanganan N+1 Problem.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Kolom Kiri / Sidebar: Meta Information */}
                                    <div className="col-12 col-lg-4">
                                        <div className="sticky-top" style={{ top: '20px' }}>

                                            {/* Informasi Teknis & Spesifikasi */}
                                            <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
                                                <h5 className="fw-bold mb-3 border-bottom pb-2">Informasi Proyek</h5>

                                                <div className="d-flex flex-column gap-3">
                                                    <div>
                                                        <span className="text-muted small d-block">TIPE PROYEK</span>
                                                        <span className="fw-semibold text-dark">Client Project / Commercial App</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted small d-block">PERAN SAYA</span>
                                                        <span className="fw-semibold text-dark">Full-stack Web Developer</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted small d-block">DURASI PENGERJAAN</span>
                                                        <span className="fw-semibold text-dark">2 Bulan</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted small d-block">TAHUN</span>
                                                        <span className="fw-semibold text-dark">2026</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tech Stack Badges */}
                                            <div className="bg-white rounded-4 p-4 shadow-sm border mb-4">
                                                <h5 className="fw-bold mb-3 border-bottom pb-2">Tech Stack Utama</h5>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <span className="badge bg-light text-dark border px-3 py-2 rounded-3 fs-6">Laravel</span>
                                                    <span className="badge bg-light text-dark border px-3 py-2 rounded-3 fs-6">React.js</span>
                                                    <span className="badge bg-light text-dark border px-3 py-2 rounded-3 fs-6">Inertia.js</span>
                                                    <span className="badge bg-light text-dark border px-3 py-2 rounded-3 fs-6">Bootstrap 5</span>
                                                    <span className="badge bg-light text-dark border px-3 py-2 rounded-3 fs-6">MySQL</span>
                                                    <span className="badge bg-light text-dark border px-3 py-2 rounded-3 fs-6">Midtrans API</span>
                                                    <span className="badge bg-light text-dark border px-3 py-2 rounded-3 fs-6">Vite</span>
                                                </div>
                                            </div>

                                            {/* Call to Action Card */}
                                            <div className="bg-dark text-white rounded-4 p-4 shadow-sm text-center">
                                                <h5 className="fw-bold mb-2">Tertarik dengan Aplikasi Ini?</h5>
                                                <p className="text-white-50 small mb-3">
                                                    Ingin membuat platform web serupa atau mendiskusikan kebutuhan aplikasi bisnis Anda?
                                                </p>
                                                <a href="#" className="btn btn-primary w-100 fw-semibold rounded-3 py-2">
                                                    Hubungi Saya Sekarang &rarr;
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* =========================================================================
        2. TIGA PROJECT DENGAN CARD VERTIKAL (3 Kolom Sejajar)
       ========================================================================= */}
                        <div className="row g-4">

                            {/* Project 2: Style Badge & Clean Header */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                    <div className="bg-secondary-subtle text-center py-5 border-bottom text-muted fw-semibold" style={{ minHeight: '160px' }}>
                                        Preview Inventory App
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="badge bg-success-subtle text-success rounded-pill px-2 py-1">● Live System</span>
                                            <small className="text-muted">2026</small>
                                        </div>
                                        <h5 className="card-title fw-bold text-dark">Inventory Management</h5>
                                        <p className="card-text text-secondary small flex-grow-1">
                                            Sistem pencatatan stok barang pabrik berbasis web dengan fitur pemindaian barcode.
                                        </p>
                                        <div className="pt-3 border-top mt-2">
                                            <button className="btn btn-outline-primary btn-sm w-100 rounded-pill">Lihat Detail</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3: Style Minimalist dengan Dark Banner Gambar */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                                    <div className="bg-dark text-white text-center py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '160px' }}>
                                        <span className="small text-secondary">Company Profile</span>
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column">
                                        <span className="text-primary small fw-bold text-uppercase mb-1">Full Stack</span>
                                        <h5 className="card-title fw-bold text-dark">Corporate CMS</h5>
                                        <p className="card-text text-secondary small flex-grow-1">
                                            Website profil perusahaan interaktif dilengkapi Content Management System (CMS).
                                        </p>
                                        <a href="#" className="text-primary text-decoration-none fw-semibold small mt-2">
                                            Explore Project &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project 4: Style Highlight Border Top (Aksen Warna) */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 border-0 border-top border-4 border-warning shadow-sm rounded-4 overflow-hidden">
                                    <div className="bg-light text-center py-5 border-bottom text-muted" style={{ minHeight: '160px' }}>
                                        Yarn Monitoring Tool
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column">
                                        <h5 className="card-title fw-bold text-dark">Yarn Production Monitor</h5>
                                        <p className="card-text text-secondary small flex-grow-1">
                                            Dashboard analitik untuk memantau kapasitas benang dan pasokan beam secara real-time.
                                        </p>
                                        <div className="d-flex gap-1 mb-3 flex-wrap">
                                            <span className="badge bg-light text-dark border">Chart.js</span>
                                            <span className="badge bg-light text-dark border">Laravel</span>
                                        </div>
                                        <button className="btn btn-warning btn-sm text-dark fw-bold rounded-3">Case Study</button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* =========================================================================
        3. DUA PROJECT DENGAN LAYOUT BANNER HORIZON KECIL (2 Kolom Sejajar)
       ========================================================================= */}
                        <div className="row g-4">

                            {/* Project 5: Mini Banner Horizontal */}
                            <div className="col-12 col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                                    <div className="row g-0 align-items-center h-100">
                                        <div className="col-4 bg-info-subtle text-info-emphasis rounded-3 text-center py-4 d-flex align-items-center justify-content-center h-100">
                                            <span className="small fw-bold">Task App</span>
                                        </div>
                                        <div className="col-8 ps-3 d-flex flex-column justify-content-between">
                                            <div>
                                                <span className="badge bg-primary-subtle text-primary extra-small mb-1">Open Source</span>
                                                <h6 className="fw-bold mb-1">Agile Task Management</h6>
                                                <p className="text-muted extra-small mb-2" style={{ fontSize: '0.825rem' }}>
                                                    Aplikasi kolaborasi tim dengan papan Kanban drag-and-drop.
                                                </p>
                                            </div>
                                            <a href="#" className="btn btn-sm btn-link text-primary p-0 text-decoration-none fw-semibold small">
                                                View Repository &rarr;
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project 6: Mini Banner Horizontal */}
                            <div className="col-12 col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
                                    <div className="row g-0 align-items-center h-100">
                                        <div className="col-4 bg-success-subtle text-success-emphasis rounded-3 text-center py-4 d-flex align-items-center justify-content-center h-100">
                                            <span className="small fw-bold">POS Resto</span>
                                        </div>
                                        <div className="col-8 ps-3 d-flex flex-column justify-content-between">
                                            <div>
                                                <span className="badge bg-success-subtle text-success extra-small mb-1">Client Project</span>
                                                <h6 className="fw-bold mb-1">Restaurant Point of Sale</h6>
                                                <p className="text-muted extra-small mb-2" style={{ fontSize: '0.825rem' }}>
                                                    Kasir restoran berbasis web dengan pencetakan struk thermal.
                                                </p>
                                            </div>
                                            <a href="#" className="btn btn-sm btn-link text-success p-0 text-decoration-none fw-semibold small">
                                                Detail Project &rarr;
                                            </a>
                                        </div>
                                    </div>
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
                {/* ========================================================================= */}
{/* SECTION: CERTIFICATIONS & LEARNING COMPLETION (TIMELINE & BADGE STYLE)     */}
{/* ========================================================================= */}
<div className="card border-0 shadow-sm rounded-4 mb-4 bg-white text-dark">
    <div className="card-body p-4 p-md-5">
        
        {/* Section Title */}
        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
            <div className="d-flex align-items-center gap-3">
                <div className="p-3 bg-primary bg-opacity-10 rounded-circle text-primary">
                    <i className="bi bi-patch-check fs-4"></i>
                </div>
                <div>
                    <h4 className="fw-bold text-dark m-0">Certifications & Learning Progress</h4>
                    <p className="text-muted small m-0">Rekam jejak pembelajaran, lisensi, dan sertifikasi resmi</p>
                </div>
            </div>
            <span className="badge bg-light text-primary border px-3 py-2 rounded-pill shadow-sm d-none d-md-inline-block">
                <i className="bi bi-shield-check me-1"></i> Verified
            </span>
        </div>

        {/* Timeline List Layout */}
        <div className="timeline-container ps-2 ps-md-3">
            
            {/* Item 1 */}
            <div className="row g-3 align-items-center py-3 border-bottom position-relative">
                <div className="col-12 col-md-3">
                    <span className="badge bg-light text-muted border mb-1">
                        <i className="bi bi-calendar3 me-1"></i> Des 2025
                    </span>
                    <div className="fw-semibold text-primary small">
                        <i className="bi bi-building me-1"></i> Dicoding Academy
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h6 className="fw-bold text-dark mb-1">
                        Full-Stack Web Development
                    </h6>
                    <p className="text-muted small mb-2">
                        Penguasaan RESTful API, otentikasi data, serta arsitektur basis data modern end-to-end.
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                        <span className="badge bg-light text-secondary border small">Laravel</span>
                        <span className="badge bg-light text-secondary border small">React</span>
                        <span className="badge bg-light text-secondary border small">REST API</span>
                    </div>
                </div>
                <div className="col-12 col-md-3 text-md-end">
                    <a 
                        href="https://example.com/certificate/123" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-outline-primary rounded-pill px-3"
                    >
                        Lihat Sertifikat <i className="bi bi-arrow-up-right ms-1"></i>
                    </a>
                </div>
            </div>

            {/* Item 2 */}
            <div className="row g-3 align-items-center py-3 border-bottom position-relative">
                <div className="col-12 col-md-3">
                    <span className="badge bg-light text-muted border mb-1">
                        <i className="bi bi-calendar3 me-1"></i> Nov 2025
                    </span>
                    <div className="fw-semibold text-primary small">
                        <i className="bi bi-building me-1"></i> Laracasts
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h6 className="fw-bold text-dark mb-1">
                        Laravel & Inertia.js Mastery
                    </h6>
                    <p className="text-muted small mb-2">
                        Penerapan Monolith modern menghubungkan React frontend dengan Laravel backend tanpa komplikasi REST API terpisah.
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                        <span className="badge bg-light text-secondary border small">Laravel</span>
                        <span className="badge bg-light text-secondary border small">Inertia.js</span>
                        <span className="badge bg-light text-secondary border small">React</span>
                    </div>
                </div>
                <div className="col-12 col-md-3 text-md-end">
                    <a 
                        href="https://example.com/certificate/456" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-outline-primary rounded-pill px-3"
                    >
                        Lihat Sertifikat <i className="bi bi-arrow-up-right ms-1"></i>
                    </a>
                </div>
            </div>

            {/* Item 3 */}
            <div className="row g-3 align-items-center py-3 position-relative">
                <div className="col-12 col-md-3">
                    <span className="badge bg-light text-muted border mb-1">
                        <i className="bi bi-calendar3 me-1"></i> Lulus 2019
                    </span>
                    <div className="fw-semibold text-secondary small">
                        <i className="bi bi-mortarboard me-1"></i> Formal Education
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h6 className="fw-bold text-dark mb-1">
                        Teknik Komputer & Jaringan (TKJ)
                    </h6>
                    <p className="text-muted small mb-2">
                        Pendidikan vokasi yang berfokus pada jaringan komputer, sistem operasi Linux/Windows, serta pemeliharaan hardware.
                    </p>
                    <div className="d-flex flex-wrap gap-1">
                        <span className="badge bg-light text-secondary border small">Networking</span>
                        <span className="badge bg-light text-secondary border small">Hardware</span>
                        <span className="badge bg-light text-secondary border small">Linux</span>
                    </div>
                </div>
                <div className="col-12 col-md-3 text-md-end">
                    <span className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25 px-3 py-2 rounded-pill small">
                        Diploma SMK
                    </span>
                </div>
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

            {/* PASTI KAN KODE INI BERADA DI DALAM <div className="container py-4"> */}
            <div className="container py-4">

                {/* Section Contact Me */}
                <div className="contact-me my-5 p-4 p-md-5 bg-white rounded-4 shadow-sm">
                    <h1 className="fw-bold mb-4 border-bottom pb-3">Contact Me</h1>

                    <div className="row g-4">
                        {/* Sisi Kiri: Info & Detail Kontak (Light Theme) */}
                        <div className="col-12 col-lg-5">
                            <div className="bg-light rounded-4 p-4 h-100 border d-flex flex-column justify-content-between position-relative overflow-hidden">
                                {/* Visual Accent */}
                                <div
                                    className="position-absolute bg-primary rounded-circle opacity-10"
                                    style={{ width: '180px', height: '180px', top: '-40px', right: '-40px', pointerEvents: 'none' }}
                                ></div>

                                <div>
                                    {/* Status Availability */}
                                    <div className="d-inline-flex align-items-center gap-2 bg-success-subtle border border-success-subtle text-success rounded-pill px-3 py-1 mb-3">
                                        <span className="spinner-grow spinner-grow-sm text-success" role="status" style={{ width: '8px', height: '8px' }}></span>
                                        <span className="small fw-semibold">Available for Work</span>
                                    </div>

                                    <h3 className="fw-bold text-dark mb-2">Let's Work Together!</h3>
                                    <p className="text-secondary small mb-4">
                                        Punya ide proyek, diskusi teknis, atau tawaran pekerjaan? Silakan hubungi saya melalui formulir atau kontak di bawah ini.
                                    </p>

                                    {/* List Detail Kontak */}
                                    <div className="d-flex flex-column gap-3 mb-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-primary-subtle text-primary rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                                                ✉️
                                            </div>
                                            <div>
                                                <div className="text-uppercase text-muted fw-bold extra-small" style={{ fontSize: '0.7rem' }}>EMAIL ME</div>
                                                <a href="mailto:ariseptiawan.dev@gmail.com" className="text-dark text-decoration-none fw-semibold small link-primary">
                                                    ariseptiawan.dev@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-success-subtle text-success rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                                                💬
                                            </div>
                                            <div>
                                                <div className="text-uppercase text-muted fw-bold extra-small" style={{ fontSize: '0.7rem' }}>WHATSAPP</div>
                                                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-dark text-decoration-none fw-semibold small link-success">
                                                    +62 812-3456-7890
                                                </a>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-warning-subtle text-warning-emphasis rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                                                📍
                                            </div>
                                            <div>
                                                <div className="text-uppercase text-muted fw-bold extra-small" style={{ fontSize: '0.7rem' }}>LOCATION</div>
                                                <span className="text-dark fw-semibold small">Bandung, Jawa Barat</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-3 border-top">
                                    <div className="text-uppercase text-muted fw-bold extra-small mb-2" style={{ fontSize: '0.7rem' }}>FIND ME ON</div>
                                    <div className="d-flex gap-2">
                                        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                            GH
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                            IN
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                                            IG
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sisi Kanan: Form Pesan */}
                        <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label small fw-semibold text-secondary">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            className="form-control bg-light border py-2 px-3 rounded-3"
                                            placeholder="Contoh: Budi Santoso"
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label small fw-semibold text-secondary">Alamat Email</label>
                                        <input
                                            type="email"
                                            className="form-control bg-light border py-2 px-3 rounded-3"
                                            placeholder="nama@email.com"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label small fw-semibold text-secondary">Subjek / Topik</label>
                                        <input
                                            type="text"
                                            className="form-control bg-light border py-2 px-3 rounded-3"
                                            placeholder="Penawaran Project / Pertanyaan"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label small fw-semibold text-secondary">Pesan Anda</label>
                                        <textarea
                                            className="form-control bg-light border py-2 px-3 rounded-3"
                                            rows={4}
                                            placeholder="Halo, saya tertarik untuk bekerja sama dalam membuat..."
                                        ></textarea>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <button type="submit" className="btn btn-primary fw-semibold w-100 py-2 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2">
                                            <span>Kirim Pesan Sekarang</span>
                                            <span>&rarr;</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
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