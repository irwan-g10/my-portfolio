export default function Example() {
    return (
        <div className="bg-light text-dark min-vh-100">
            {/* Navbar Header */}
            <div className="d-flex justify-content-between align-items-center px-md-5 border-bottom sticky-top bg-white px-4 py-3 shadow-sm">
                <div className="navbar-title">
                    <div className="fw-bold fs-4 text-primary">Atomic Site</div>
                </div>
                <div className="navbar-list d-flex align-items-center gap-md-3 fw-medium gap-2">
                    <div className="border-bottom cursor-pointer border-2 border-primary p-2 text-primary">
                        Home
                    </div>
                    <div className="cursor-pointer p-2 text-secondary">
                        About
                    </div>
                    <div className="cursor-pointer p-2 text-secondary">
                        Project
                    </div>
                    <div className="cursor-pointer p-2 text-secondary">
                        Blog
                    </div>
                    <div className="btn btn-primary rounded-pill ms-2 p-2 px-3">
                        Contact Me
                    </div>
                </div>
            </div>

            <div className="container py-4">
                {/* Hero / Greetings Section */}
                <div className="body row justify-content-between align-items-center p-md-5 my-md-5 rounded-4 gap-md-0 my-4 gap-4 bg-white p-4 shadow-sm">
                    <div className="greetings col-md-7 col-12">
                        <div className="perkenalan">
                            <h3 className="fw-semibold mb-2 text-secondary">
                                Hello Semua 👋
                            </h3>
                            <h1 className="display-6 fw-bold mb-2">
                                Nama Saya{' '}
                                <span className="text-primary">
                                    Irwan Gumilar
                                </span>
                            </h1>
                            <span className="badge bg-primary-subtle fs-6 fw-semibold rounded-pill mb-3 px-3 py-2 text-primary">
                                Saya Seorang Frontend Developer
                            </span>
                            <p className="lh-lg mt-3 text-secondary">
                                Berfokus pada pembuatan antarmuka web yang
                                intuitif, cepat, dan responsif. Berpengalaman
                                dalam membangun aplikasi web modern menggunakan
                                ekosistem React, Laravel, dan Bootstrap untuk
                                menghadirkan pengalaman pengguna yang optimal.
                            </p>
                        </div>
                    </div>

                    <div className="profesional-foto col-md-4 align-items-center justify-content-center d-flex flex-column col-12 gap-3">
                        <div
                            className="bg-secondary-subtle rounded-4 d-flex align-items-center justify-content-center fw-bold border border-2 border-dashed border-secondary text-secondary shadow-sm"
                            style={{ width: '180px', height: '240px' }}
                        >
                            Foto
                        </div>
                        <div className="d-flex align-items-center justify-content-center bg-light rounded-pill gap-3 border px-3 py-2">
                            <div className="fw-semibold small text-secondary">
                                Find me on:
                            </div>
                            <div className="d-flex gap-2">
                                <span className="badge rounded-circle cursor-pointer bg-primary p-2">
                                    I
                                </span>
                                <span className="badge rounded-circle cursor-pointer bg-primary p-2">
                                    F
                                </span>
                                <span className="badge rounded-circle cursor-pointer bg-primary p-2">
                                    L
                                </span>
                                <span className="badge rounded-circle cursor-pointer bg-primary p-2">
                                    W
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Project Section */}
                <div className="latest-project p-md-5 rounded-4 my-5 bg-white p-4 shadow-sm">
                    <h1 className="fw-bold border-bottom mb-4 pb-3">
                        Latest Project
                    </h1>

                    {/* Project Counter Stats */}
                    <div className="project-count row g-3 mb-5 text-center">
                        <div className="col-md-3 col-6">
                            <div className="bg-light rounded-3 border p-3">
                                <h3 className="fw-bold mb-1 text-primary">
                                    15+
                                </h3>
                                <div className="small text-muted">
                                    Client Order
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="bg-light rounded-3 border p-3">
                                <h3 className="fw-bold mb-1 text-primary">
                                    20+
                                </h3>
                                <div className="small text-muted">
                                    Completed Project
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="bg-light rounded-3 border p-3">
                                <h3 className="fw-bold mb-1 text-primary">
                                    4.9
                                </h3>
                                <div className="small text-muted">
                                    Star Rating
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="bg-light rounded-3 border p-3">
                                <h3 className="fw-bold mb-1 text-primary">
                                    12+
                                </h3>
                                <div className="small text-muted">
                                    Months of Experience
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Cards */}
                    <div className="project-list d-flex flex-column gap-4">
                        {/* =========================================================================
        1. FEATURED PROJECT (Layout Horizontal Utama - Mengambil Penuh Row)
       ========================================================================= */}
                        <div className="card rounded-4 bg-gradient overflow-hidden border-0 bg-primary text-white shadow-sm">
                            <div className="row g-0 align-items-center">
                                {/* Sisi Kiri: Gambar Preview */}
                                <div
                                    className="col-lg-7 bg-dark text-white-50 d-flex align-items-center justify-content-center col-12 py-5 text-center"
                                    style={{ minHeight: '260px' }}
                                >
                                    <span className="fs-5 fw-semibold">
                                        Preview Utama: E-Commerce Platform
                                    </span>
                                </div>
                                {/* Sisi Kanan: Detail Text */}
                                <div className="col-lg-5 p-md-5 col-12 p-4">
                                    <span className="badge bg-light rounded-pill fw-bold mb-2 px-3 py-2 text-primary">
                                        ★ Featured Project
                                    </span>
                                    <h3 className="fw-bold mb-2">
                                        E-Commerce Web Application
                                    </h3>
                                    <p className="text-white-50 small mb-3">
                                        Platform toko online lengkap dengan
                                        Payment Gateway, manajemen stok
                                        real-time, dan dashboard analitik
                                        penjualan.
                                    </p>
                                    <div className="d-flex mb-4 flex-wrap gap-2">
                                        <span className="badge bg-opacity-25 rounded-pill bg-white">
                                            Laravel
                                        </span>
                                        <span className="badge bg-opacity-25 rounded-pill bg-white">
                                            React
                                        </span>
                                        <span className="badge bg-opacity-25 rounded-pill bg-white">
                                            Inertia.js
                                        </span>
                                        <span className="badge bg-opacity-25 rounded-pill bg-white">
                                            Bootstrap 5
                                        </span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <a
                                            href="#"
                                            className="btn btn-light fw-bold rounded-3 px-4 text-primary"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href="#"
                                            className="btn btn-outline-light rounded-3 px-3"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light text-dark py-4 pb-5">
                            {/* Navigasi Atas / Breadcrumb */}
                            <div className="container mb-4">
                                <div className="d-flex justify-content-between align-items-center rounded-4 border bg-white p-3 shadow-sm">
                                    <a
                                        href="#"
                                        className="btn btn-outline-secondary btn-sm rounded-pill d-inline-flex align-items-center gap-2 px-3"
                                    >
                                        <span>&larr;</span> Kembali ke
                                        Portofolio
                                    </a>
                                    <span className="badge bg-primary-subtle fw-semibold rounded-pill px-3 py-2 text-primary">
                                        ★ Featured Project
                                    </span>
                                </div>
                            </div>

                            <div className="container">
                                {/* Header Banner Section */}
                                <div className="bg-gradient rounded-4 p-md-5 position-relative mb-4 overflow-hidden bg-primary p-4 text-white shadow-sm">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8 col-12">
                                            <span className="badge bg-opacity-25 rounded-pill fw-semibold mb-3 bg-white px-3 py-2 text-white">
                                                Full-stack Web Development
                                            </span>
                                            <h1 className="display-5 fw-bold mb-3">
                                                E-Commerce Web Application
                                            </h1>
                                            <p className="lead text-white-50 mb-4">
                                                Platform toko online skala
                                                menengah dengan sistem
                                                pembayaran otomatis, manajemen
                                                inventaris real-time, dan
                                                dashboard analitik penjualan
                                                yang aman dan responsif.
                                            </p>
                                            <div className="d-flex flex-wrap gap-3">
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-light fw-bold rounded-3 px-4 py-2 text-primary shadow-sm"
                                                >
                                                    🌐 Live Demo
                                                </a>
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-outline-light fw-semibold rounded-3 px-4 py-2"
                                                >
                                                    GitHub Repository
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-4">
                                    {/* Kolom Kanan / Utama: Detail Content */}
                                    <div className="col-lg-8 col-12">
                                        {/* Main Preview Container */}
                                        <div className="rounded-4 mb-4 border bg-white p-4 shadow-sm">
                                            <h4 className="fw-bold border-bottom mb-3 pb-2">
                                                Tampilan Antarmuka Aplikasi
                                            </h4>

                                            {/* Placeholder Screenshot Utama */}
                                            <div
                                                className="bg-dark rounded-4 d-flex flex-column align-items-center justify-content-center mb-3 overflow-hidden p-5 text-center text-white"
                                                style={{ minHeight: '360px' }}
                                            >
                                                <div className="py-4">
                                                    <span className="fs-1 d-block mb-2">
                                                        🖥️
                                                    </span>
                                                    <h5 className="fw-semibold mb-1">
                                                        Preview Utama: Dashboard
                                                        Analytics & Penjualan
                                                    </h5>
                                                    <p className="text-white-50 small px-md-5 mb-0">
                                                        Ganti area ini dengan
                                                        elemen tag &lt;img /&gt;
                                                        untuk menampilkan
                                                        screenshot asli project
                                                        kamu.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Ringkasan & Latar Belakang Project */}
                                        <div className="rounded-4 p-md-5 mb-4 border bg-white p-4 shadow-sm">
                                            <h3 className="fw-bold mb-3">
                                                Latar Belakang & Ringkasan
                                            </h3>
                                            <p className="lh-lg mb-4 text-secondary">
                                                Project ini dibangun untuk
                                                menyelesaikan kendala efisiensi
                                                yang dialami UMKM ritel dalam
                                                mengelola stok barang di
                                                berbagai platform penjualan.
                                                Sistem ini mengintegrasikan
                                                seluruh katalog produk ke dalam
                                                satu basis data terpusat,
                                                memproses pesanan masuk secara
                                                real-time, dan langsung
                                                menerbitkan invoice digital
                                                setelah transaksi berhasil.
                                            </p>

                                            <h4 className="fw-bold mb-3">
                                                Fitur-Fitur Utama
                                            </h4>
                                            <div className="row g-3">
                                                <div className="col-md-6 col-12">
                                                    <div className="bg-light rounded-3 h-100 border p-3">
                                                        <h6 className="fw-bold mb-2 text-primary">
                                                            💳 Payment Gateway
                                                            Integration
                                                        </h6>
                                                        <p className="small mb-0 text-secondary">
                                                            Dukungan otomatisasi
                                                            pembayaran via
                                                            Transfer Bank, QRIS,
                                                            dan E-Wallet dengan
                                                            callback webhook
                                                            aman.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="bg-light rounded-3 h-100 border p-3">
                                                        <h6 className="fw-bold mb-2 text-primary">
                                                            📦 Real-time
                                                            Inventory Sync
                                                        </h6>
                                                        <p className="small mb-0 text-secondary">
                                                            Pengurangan stok
                                                            otomatis saat
                                                            transaksi
                                                            terverifikasi untuk
                                                            mencegah
                                                            overselling.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="bg-light rounded-3 h-100 border p-3">
                                                        <h6 className="fw-bold mb-2 text-primary">
                                                            📊 Executive
                                                            Analytics Dashboard
                                                        </h6>
                                                        <p className="small mb-0 text-secondary">
                                                            Grafik penjualan
                                                            bulanan,
                                                            rekapitulasi laba,
                                                            serta laporan barang
                                                            terlaris
                                                            (best-seller).
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="bg-light rounded-3 h-100 border p-3">
                                                        <h6 className="fw-bold mb-2 text-primary">
                                                            ⚡ Single Page
                                                            Application (SPA)
                                                        </h6>
                                                        <p className="small mb-0 text-secondary">
                                                            Navigasi tanpa
                                                            reload halaman
                                                            berkat kombinasi
                                                            Inertia.js dan
                                                            React.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Tantangan Teknis & Solusi */}
                                        <div className="rounded-4 p-md-5 border bg-white p-4 shadow-sm">
                                            <h3 className="fw-bold mb-4">
                                                Tantangan Teknis & Solusi
                                            </h3>
                                            <div className="d-flex flex-column gap-4">
                                                <div className="border-start border-3 border-primary ps-3">
                                                    <h5 className="fw-bold text-dark mb-1">
                                                        Manajemen State
                                                        Pembayaran Real-Time
                                                    </h5>
                                                    <p className="small mb-2 text-secondary">
                                                        <strong>
                                                            Tantangan:
                                                        </strong>{' '}
                                                        Memastikan status
                                                        pesanan pembeli langsung
                                                        berubah menjadi "Lunas"
                                                        tanpa membuat halaman
                                                        menjadi berat karena
                                                        polling berulang.
                                                    </p>
                                                    <p className="small mb-0 text-secondary">
                                                        <strong>Solusi:</strong>{' '}
                                                        Menggunakan arsitektur
                                                        Webhook Laravel yang
                                                        dikombinasikan dengan
                                                        pembungkusan state
                                                        dinamis Inertia.js untuk
                                                        memperbarui antarmuka
                                                        pengguna secara efisien.
                                                    </p>
                                                </div>

                                                <div className="border-start border-3 border-primary ps-3">
                                                    <h5 className="fw-bold text-dark mb-1">
                                                        Optimasi Performa Query
                                                        Katalog Produk
                                                    </h5>
                                                    <p className="small mb-2 text-secondary">
                                                        <strong>
                                                            Tantangan:
                                                        </strong>{' '}
                                                        Lambatnya pemuatan data
                                                        saat melakukan pencarian
                                                        berantai (filter
                                                        kategori, harga, dan
                                                        urutan sekaligus).
                                                    </p>
                                                    <p className="small mb-0 text-secondary">
                                                        <strong>Solusi:</strong>{' '}
                                                        Menerapkan indeksasi
                                                        database MySQL pada
                                                        kolom pencarian utama
                                                        serta optimasi Eloquent
                                                        Query melalui penanganan
                                                        N+1 Problem.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Kolom Kiri / Sidebar: Meta Information */}
                                    <div className="col-lg-4 col-12">
                                        <div
                                            className="sticky-top"
                                            style={{ top: '20px' }}
                                        >
                                            {/* Informasi Teknis & Spesifikasi */}
                                            <div className="rounded-4 mb-4 border bg-white p-4 shadow-sm">
                                                <h5 className="fw-bold border-bottom mb-3 pb-2">
                                                    Informasi Proyek
                                                </h5>

                                                <div className="d-flex flex-column gap-3">
                                                    <div>
                                                        <span className="small d-block text-muted">
                                                            TIPE PROYEK
                                                        </span>
                                                        <span className="fw-semibold text-dark">
                                                            Client Project /
                                                            Commercial App
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="small d-block text-muted">
                                                            PERAN SAYA
                                                        </span>
                                                        <span className="fw-semibold text-dark">
                                                            Full-stack Web
                                                            Developer
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="small d-block text-muted">
                                                            DURASI PENGERJAAN
                                                        </span>
                                                        <span className="fw-semibold text-dark">
                                                            2 Bulan
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="small d-block text-muted">
                                                            TAHUN
                                                        </span>
                                                        <span className="fw-semibold text-dark">
                                                            2026
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tech Stack Badges */}
                                            <div className="rounded-4 mb-4 border bg-white p-4 shadow-sm">
                                                <h5 className="fw-bold border-bottom mb-3 pb-2">
                                                    Tech Stack Utama
                                                </h5>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <span className="badge bg-light text-dark rounded-3 fs-6 border px-3 py-2">
                                                        Laravel
                                                    </span>
                                                    <span className="badge bg-light text-dark rounded-3 fs-6 border px-3 py-2">
                                                        React.js
                                                    </span>
                                                    <span className="badge bg-light text-dark rounded-3 fs-6 border px-3 py-2">
                                                        Inertia.js
                                                    </span>
                                                    <span className="badge bg-light text-dark rounded-3 fs-6 border px-3 py-2">
                                                        Bootstrap 5
                                                    </span>
                                                    <span className="badge bg-light text-dark rounded-3 fs-6 border px-3 py-2">
                                                        MySQL
                                                    </span>
                                                    <span className="badge bg-light text-dark rounded-3 fs-6 border px-3 py-2">
                                                        Midtrans API
                                                    </span>
                                                    <span className="badge bg-light text-dark rounded-3 fs-6 border px-3 py-2">
                                                        Vite
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Call to Action Card */}
                                            <div className="bg-dark rounded-4 p-4 text-center text-white shadow-sm">
                                                <h5 className="fw-bold mb-2">
                                                    Tertarik dengan Aplikasi
                                                    Ini?
                                                </h5>
                                                <p className="text-white-50 small mb-3">
                                                    Ingin membuat platform web
                                                    serupa atau mendiskusikan
                                                    kebutuhan aplikasi bisnis
                                                    Anda?
                                                </p>
                                                <a
                                                    href="#"
                                                    className="btn btn-primary fw-semibold rounded-3 w-100 py-2"
                                                >
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
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                                    <div
                                        className="bg-secondary-subtle border-bottom fw-semibold py-5 text-center text-muted"
                                        style={{ minHeight: '160px' }}
                                    >
                                        Preview Inventory App
                                    </div>
                                    <div className="card-body d-flex flex-column p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span className="badge bg-success-subtle text-success rounded-pill px-2 py-1">
                                                ● Live System
                                            </span>
                                            <small className="text-muted">
                                                2026
                                            </small>
                                        </div>
                                        <h5 className="card-title fw-bold text-dark">
                                            Inventory Management
                                        </h5>
                                        <p className="card-text small flex-grow-1 text-secondary">
                                            Sistem pencatatan stok barang pabrik
                                            berbasis web dengan fitur pemindaian
                                            barcode.
                                        </p>
                                        <div className="border-top mt-2 pt-3">
                                            <button className="btn btn-outline-primary btn-sm rounded-pill w-100">
                                                Lihat Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3: Style Minimalist dengan Dark Banner Gambar */}
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="card rounded-4 h-100 overflow-hidden border-0 shadow-sm">
                                    <div
                                        className="bg-dark d-flex align-items-center justify-content-center py-5 text-center text-white"
                                        style={{ minHeight: '160px' }}
                                    >
                                        <span className="small text-secondary">
                                            Company Profile
                                        </span>
                                    </div>
                                    <div className="card-body d-flex flex-column p-4">
                                        <span className="small fw-bold text-uppercase mb-1 text-primary">
                                            Full Stack
                                        </span>
                                        <h5 className="card-title fw-bold text-dark">
                                            Corporate CMS
                                        </h5>
                                        <p className="card-text small flex-grow-1 text-secondary">
                                            Website profil perusahaan interaktif
                                            dilengkapi Content Management System
                                            (CMS).
                                        </p>
                                        <a
                                            href="#"
                                            className="text-decoration-none fw-semibold small mt-2 text-primary"
                                        >
                                            Explore Project &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project 4: Style Highlight Border Top (Aksen Warna) */}
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="card border-top border-warning rounded-4 h-100 overflow-hidden border-0 border-4 shadow-sm">
                                    <div
                                        className="bg-light border-bottom py-5 text-center text-muted"
                                        style={{ minHeight: '160px' }}
                                    >
                                        Yarn Monitoring Tool
                                    </div>
                                    <div className="card-body d-flex flex-column p-4">
                                        <h5 className="card-title fw-bold text-dark">
                                            Yarn Production Monitor
                                        </h5>
                                        <p className="card-text small flex-grow-1 text-secondary">
                                            Dashboard analitik untuk memantau
                                            kapasitas benang dan pasokan beam
                                            secara real-time.
                                        </p>
                                        <div className="d-flex mb-3 flex-wrap gap-1">
                                            <span className="badge bg-light text-dark border">
                                                Chart.js
                                            </span>
                                            <span className="badge bg-light text-dark border">
                                                Laravel
                                            </span>
                                        </div>
                                        <button className="btn btn-warning btn-sm text-dark fw-bold rounded-3">
                                            Case Study
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =========================================================================
        3. DUA PROJECT DENGAN LAYOUT BANNER HORIZON KECIL (2 Kolom Sejajar)
       ========================================================================= */}
                        <div className="row g-4">
                            {/* Project 5: Mini Banner Horizontal */}
                            <div className="col-md-6 col-12">
                                <div className="card rounded-4 h-100 border-0 p-3 shadow-sm">
                                    <div className="row g-0 align-items-center h-100">
                                        <div className="bg-info-subtle text-info-emphasis rounded-3 d-flex align-items-center justify-content-center col-4 h-100 py-4 text-center">
                                            <span className="small fw-bold">
                                                Task App
                                            </span>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between col-8 ps-3">
                                            <div>
                                                <span className="badge bg-primary-subtle extra-small mb-1 text-primary">
                                                    Open Source
                                                </span>
                                                <h6 className="fw-bold mb-1">
                                                    Agile Task Management
                                                </h6>
                                                <p
                                                    className="extra-small mb-2 text-muted"
                                                    style={{
                                                        fontSize: '0.825rem',
                                                    }}
                                                >
                                                    Aplikasi kolaborasi tim
                                                    dengan papan Kanban
                                                    drag-and-drop.
                                                </p>
                                            </div>
                                            <a
                                                href="#"
                                                className="btn btn-sm btn-link text-decoration-none fw-semibold small p-0 text-primary"
                                            >
                                                View Repository &rarr;
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project 6: Mini Banner Horizontal */}
                            <div className="col-md-6 col-12">
                                <div className="card rounded-4 h-100 border-0 p-3 shadow-sm">
                                    <div className="row g-0 align-items-center h-100">
                                        <div className="bg-success-subtle text-success-emphasis rounded-3 d-flex align-items-center justify-content-center col-4 h-100 py-4 text-center">
                                            <span className="small fw-bold">
                                                POS Resto
                                            </span>
                                        </div>
                                        <div className="d-flex flex-column justify-content-between col-8 ps-3">
                                            <div>
                                                <span className="badge bg-success-subtle text-success extra-small mb-1">
                                                    Client Project
                                                </span>
                                                <h6 className="fw-bold mb-1">
                                                    Restaurant Point of Sale
                                                </h6>
                                                <p
                                                    className="extra-small mb-2 text-muted"
                                                    style={{
                                                        fontSize: '0.825rem',
                                                    }}
                                                >
                                                    Kasir restoran berbasis web
                                                    dengan pencetakan struk
                                                    thermal.
                                                </p>
                                            </div>
                                            <a
                                                href="#"
                                                className="btn btn-sm btn-link text-success text-decoration-none fw-semibold small p-0"
                                            >
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
                <div className="skill p-md-5 rounded-4 my-5 bg-white p-4 shadow-sm">
                    <h1 className="fw-bold border-bottom mb-4 pb-3">
                        What I Do
                    </h1>
                    <div className="row g-4">
                        <div className="col-md-4 col-12">
                            <div className="bg-light rounded-4 h-100 border p-4">
                                <h4 className="fw-bold mb-3 text-primary">
                                    Web Design
                                </h4>
                                <p className="small mb-0 text-secondary">
                                    Merancang antarmuka pengguna (UI/UX) yang
                                    bersih, estetik, dan berfokus pada
                                    kenyamanan pengguna saat bernavigasi.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="bg-light rounded-4 h-100 border p-4">
                                <h4 className="fw-bold mb-3 text-primary">
                                    Frontend Development
                                </h4>
                                <p className="small mb-0 text-secondary">
                                    Menerjemahkan desain visual menjadi kode web
                                    yang interaktif, responsif, dan ringan
                                    menggunakan React.js.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="bg-light rounded-4 h-100 border p-4">
                                <h4 className="fw-bold mb-3 text-primary">
                                    Backend Integration
                                </h4>
                                <p className="small mb-0 text-secondary">
                                    Menghubungkan tampilan frontend dengan
                                    database dan server API berbasis Laravel
                                    secara seamless.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ========================================================================= */}
                {/* SECTION: CERTIFICATIONS & LEARNING COMPLETION (TIMELINE & BADGE STYLE)     */}
                {/* ========================================================================= */}
                <div className="card rounded-4 text-dark mb-4 border-0 bg-white shadow-sm">
                    <div className="card-body p-md-5 p-4">
                        {/* Section Title */}
                        <div className="d-flex align-items-center justify-content-between border-bottom mb-4 pb-3">
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-opacity-10 rounded-circle bg-primary p-3 text-primary">
                                    <i className="bi bi-patch-check fs-4"></i>
                                </div>
                                <div>
                                    <h4 className="fw-bold text-dark m-0">
                                        Certifications & Learning Progress
                                    </h4>
                                    <p className="small m-0 text-muted">
                                        Rekam jejak pembelajaran, lisensi, dan
                                        sertifikasi resmi
                                    </p>
                                </div>
                            </div>
                            <span className="badge bg-light rounded-pill d-none d-md-inline-block border px-3 py-2 text-primary shadow-sm">
                                <i className="bi bi-shield-check me-1"></i>{' '}
                                Verified
                            </span>
                        </div>

                        {/* Timeline List Layout */}
                        <div className="timeline-container ps-md-3 ps-2">
                            {/* Item 1 */}
                            <div className="row g-3 align-items-center border-bottom position-relative py-3">
                                <div className="col-md-3 col-12">
                                    <span className="badge bg-light mb-1 border text-muted">
                                        <i className="bi bi-calendar3 me-1"></i>{' '}
                                        Des 2025
                                    </span>
                                    <div className="fw-semibold small text-primary">
                                        <i className="bi bi-building me-1"></i>{' '}
                                        Dicoding Academy
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <h6 className="fw-bold text-dark mb-1">
                                        Full-Stack Web Development
                                    </h6>
                                    <p className="small mb-2 text-muted">
                                        Penguasaan RESTful API, otentikasi data,
                                        serta arsitektur basis data modern
                                        end-to-end.
                                    </p>
                                    <div className="d-flex flex-wrap gap-1">
                                        <span className="badge bg-light small border text-secondary">
                                            Laravel
                                        </span>
                                        <span className="badge bg-light small border text-secondary">
                                            React
                                        </span>
                                        <span className="badge bg-light small border text-secondary">
                                            REST API
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-3 text-md-end col-12">
                                    <a
                                        href="https://example.com/certificate/123"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm btn-outline-primary rounded-pill px-3"
                                    >
                                        Lihat Sertifikat{' '}
                                        <i className="bi bi-arrow-up-right ms-1"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="row g-3 align-items-center border-bottom position-relative py-3">
                                <div className="col-md-3 col-12">
                                    <span className="badge bg-light mb-1 border text-muted">
                                        <i className="bi bi-calendar3 me-1"></i>{' '}
                                        Nov 2025
                                    </span>
                                    <div className="fw-semibold small text-primary">
                                        <i className="bi bi-building me-1"></i>{' '}
                                        Laracasts
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <h6 className="fw-bold text-dark mb-1">
                                        Laravel & Inertia.js Mastery
                                    </h6>
                                    <p className="small mb-2 text-muted">
                                        Penerapan Monolith modern menghubungkan
                                        React frontend dengan Laravel backend
                                        tanpa komplikasi REST API terpisah.
                                    </p>
                                    <div className="d-flex flex-wrap gap-1">
                                        <span className="badge bg-light small border text-secondary">
                                            Laravel
                                        </span>
                                        <span className="badge bg-light small border text-secondary">
                                            Inertia.js
                                        </span>
                                        <span className="badge bg-light small border text-secondary">
                                            React
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-3 text-md-end col-12">
                                    <a
                                        href="https://example.com/certificate/456"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm btn-outline-primary rounded-pill px-3"
                                    >
                                        Lihat Sertifikat{' '}
                                        <i className="bi bi-arrow-up-right ms-1"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="row g-3 align-items-center position-relative py-3">
                                <div className="col-md-3 col-12">
                                    <span className="badge bg-light mb-1 border text-muted">
                                        <i className="bi bi-calendar3 me-1"></i>{' '}
                                        Lulus 2019
                                    </span>
                                    <div className="fw-semibold small text-secondary">
                                        <i className="bi bi-mortarboard me-1"></i>{' '}
                                        Formal Education
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <h6 className="fw-bold text-dark mb-1">
                                        Teknik Komputer & Jaringan (TKJ)
                                    </h6>
                                    <p className="small mb-2 text-muted">
                                        Pendidikan vokasi yang berfokus pada
                                        jaringan komputer, sistem operasi
                                        Linux/Windows, serta pemeliharaan
                                        hardware.
                                    </p>
                                    <div className="d-flex flex-wrap gap-1">
                                        <span className="badge bg-light small border text-secondary">
                                            Networking
                                        </span>
                                        <span className="badge bg-light small border text-secondary">
                                            Hardware
                                        </span>
                                        <span className="badge bg-light small border text-secondary">
                                            Linux
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-3 text-md-end col-12">
                                    <span className="badge bg-opacity-10 border-opacity-25 rounded-pill small border border-secondary bg-secondary px-3 py-2 text-secondary">
                                        Diploma SMK
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Hire Me Section */}
                <div className="why-hire-me p-md-5 rounded-4 my-5 bg-white p-4 shadow-sm">
                    <h1 className="fw-bold border-bottom mb-4 pb-3">
                        Why Hire Me
                    </h1>
                    <div className="row g-4">
                        <div className="col-md-6 col-12">
                            <div className="d-flex align-items-start gap-3">
                                <div className="rounded-circle fw-bold bg-primary px-3 py-2 text-white">
                                    1
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Kode Bersih & Terstruktur
                                    </h5>
                                    <p className="small text-secondary">
                                        Menulis sintaks yang rapi, modular,
                                        serta mudah dirawat atau dikembangkan
                                        kembali oleh tim.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="d-flex align-items-start gap-3">
                                <div className="rounded-circle fw-bold bg-primary px-3 py-2 text-white">
                                    2
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Desain Responsif
                                    </h5>
                                    <p className="small text-secondary">
                                        Memastikan website tampil sempurna di
                                        semua layar, dari smartphone hingga
                                        layar desktop lebar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="d-flex align-items-start gap-3">
                                <div className="rounded-circle fw-bold bg-primary px-3 py-2 text-white">
                                    3
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Komunikasi Aktif
                                    </h5>
                                    <p className="small text-secondary">
                                        Terbiasa memberikan laporan berkala
                                        mengenai perkembangan project agar
                                        sesuai target.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="d-flex align-items-start gap-3">
                                <div className="rounded-circle fw-bold bg-primary px-3 py-2 text-white">
                                    4
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Problem Solver
                                    </h5>
                                    <p className="small text-secondary">
                                        Fokus memberikan solusi teknis yang
                                        efisien untuk memecahkan masalah bisnis
                                        klien.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* My Journey Section */}
                <div className="journey p-md-5 rounded-4 my-5 bg-white p-4 shadow-sm">
                    <h1 className="fw-bold border-bottom mb-4 pb-3">
                        My Journey
                    </h1>
                    <div className="position-relative border-start ms-2 border-2 border-primary ps-4">
                        <div className="position-relative mb-4">
                            <div
                                className="position-absolute translate-middle-x rounded-circle start-0 top-0 bg-primary"
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    marginLeft: '-25px',
                                }}
                            ></div>
                            <span className="fw-bold small text-primary">
                                2024 - Sekarang
                            </span>
                            <h5 className="fw-bold mt-1 mb-1">
                                Full-stack & Frontend Developer
                            </h5>
                            <p className="small mb-0 text-secondary">
                                Aktif mengerjakan project freelancing dan
                                membangun aplikasi web menggunakan Laravel,
                                Inertia, dan React.
                            </p>
                        </div>
                        <div className="position-relative mb-4">
                            <div
                                className="position-absolute translate-middle-x rounded-circle start-0 top-0 bg-secondary"
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    marginLeft: '-25px',
                                }}
                            ></div>
                            <span className="fw-bold small text-secondary">
                                2023 - 2024
                            </span>
                            <h5 className="fw-bold mt-1 mb-1">
                                Mempelajari Web Development
                            </h5>
                            <p className="small mb-0 text-secondary">
                                Mendalami fundamental HTML, CSS, JavaScript
                                dasar hingga framework modern secara otodidak
                                dan intensif.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tools and Skills Section */}
                <div className="tools-and-skills p-md-5 rounded-4 my-5 bg-white p-4 shadow-sm">
                    <h1 className="fw-bold border-bottom mb-4 pb-3">
                        Tools and Skills
                    </h1>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            JavaScript (ES6+)
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            React.js
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            PHP
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            Laravel
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            Inertia.js
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            Bootstrap 5
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            HTML5 & CSS3
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            Git & GitHub
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            MySQL
                        </span>
                        <span className="badge bg-light text-dark fs-6 border p-3">
                            Vite
                        </span>
                    </div>
                </div>
            </div>

            {/* PASTI KAN KODE INI BERADA DI DALAM <div className="container py-4"> */}
            <div className="container py-4">
                {/* Section Contact Me */}
                <div className="contact-me p-md-5 rounded-4 my-5 bg-white p-4 shadow-sm">
                    <h1 className="fw-bold border-bottom mb-4 pb-3">
                        Contact Me
                    </h1>

                    <div className="row g-4">
                        {/* Sisi Kiri: Info & Detail Kontak (Light Theme) */}
                        <div className="col-lg-5 col-12">
                            <div className="bg-light rounded-4 d-flex flex-column justify-content-between position-relative h-100 overflow-hidden border p-4">
                                {/* Visual Accent */}
                                <div
                                    className="position-absolute rounded-circle bg-primary opacity-10"
                                    style={{
                                        width: '180px',
                                        height: '180px',
                                        top: '-40px',
                                        right: '-40px',
                                        pointerEvents: 'none',
                                    }}
                                ></div>

                                <div>
                                    {/* Status Availability */}
                                    <div className="d-inline-flex align-items-center bg-success-subtle border-success-subtle text-success rounded-pill mb-3 gap-2 border px-3 py-1">
                                        <span
                                            className="spinner-grow spinner-grow-sm text-success"
                                            role="status"
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                            }}
                                        ></span>
                                        <span className="small fw-semibold">
                                            Available for Work
                                        </span>
                                    </div>

                                    <h3 className="fw-bold text-dark mb-2">
                                        Let's Work Together!
                                    </h3>
                                    <p className="small mb-4 text-secondary">
                                        Punya ide proyek, diskusi teknis, atau
                                        tawaran pekerjaan? Silakan hubungi saya
                                        melalui formulir atau kontak di bawah
                                        ini.
                                    </p>

                                    {/* List Detail Kontak */}
                                    <div className="d-flex flex-column mb-4 gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center p-2 text-primary"
                                                style={{
                                                    width: '42px',
                                                    height: '42px',
                                                }}
                                            >
                                                ✉️
                                            </div>
                                            <div>
                                                <div
                                                    className="text-uppercase fw-bold extra-small text-muted"
                                                    style={{
                                                        fontSize: '0.7rem',
                                                    }}
                                                >
                                                    EMAIL ME
                                                </div>
                                                <a
                                                    href="mailto:ariseptiawan.dev@gmail.com"
                                                    className="text-dark text-decoration-none fw-semibold small link-primary"
                                                >
                                                    ariseptiawan.dev@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center p-2"
                                                style={{
                                                    width: '42px',
                                                    height: '42px',
                                                }}
                                            >
                                                💬
                                            </div>
                                            <div>
                                                <div
                                                    className="text-uppercase fw-bold extra-small text-muted"
                                                    style={{
                                                        fontSize: '0.7rem',
                                                    }}
                                                >
                                                    WHATSAPP
                                                </div>
                                                <a
                                                    href="https://wa.me/6281234567890"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-dark text-decoration-none fw-semibold small link-success"
                                                >
                                                    +62 812-3456-7890
                                                </a>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div
                                                className="bg-warning-subtle text-warning-emphasis rounded-3 d-flex align-items-center justify-content-center p-2"
                                                style={{
                                                    width: '42px',
                                                    height: '42px',
                                                }}
                                            >
                                                📍
                                            </div>
                                            <div>
                                                <div
                                                    className="text-uppercase fw-bold extra-small text-muted"
                                                    style={{
                                                        fontSize: '0.7rem',
                                                    }}
                                                >
                                                    LOCATION
                                                </div>
                                                <span className="text-dark fw-semibold small">
                                                    Bandung, Jawa Barat
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="border-top pt-3">
                                    <div
                                        className="text-uppercase fw-bold extra-small mb-2 text-muted"
                                        style={{ fontSize: '0.7rem' }}
                                    >
                                        FIND ME ON
                                    </div>
                                    <div className="d-flex gap-2">
                                        <a
                                            href="https://github.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                            }}
                                        >
                                            GH
                                        </a>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                            }}
                                        >
                                            IN
                                        </a>
                                        <a
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                            }}
                                        >
                                            IG
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sisi Kanan: Form Pesan */}
                        <div className="col-lg-7 d-flex flex-column justify-content-center col-12">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="row g-3">
                                    <div className="col-md-6 col-12">
                                        <label className="form-label small fw-semibold text-secondary">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control bg-light rounded-3 border px-3 py-2"
                                            placeholder="Contoh: Budi Santoso"
                                        />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label className="form-label small fw-semibold text-secondary">
                                            Alamat Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control bg-light rounded-3 border px-3 py-2"
                                            placeholder="nama@email.com"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label small fw-semibold text-secondary">
                                            Subjek / Topik
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control bg-light rounded-3 border px-3 py-2"
                                            placeholder="Penawaran Project / Pertanyaan"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label small fw-semibold text-secondary">
                                            Pesan Anda
                                        </label>
                                        <textarea
                                            className="form-control bg-light rounded-3 border px-3 py-2"
                                            rows={4}
                                            placeholder="Halo, saya tertarik untuk bekerja sama dalam membuat..."
                                        ></textarea>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary fw-semibold rounded-3 d-flex align-items-center justify-content-center w-100 gap-2 py-2 shadow-sm"
                                        >
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
            <div className="footer bg-dark mt-5 py-4 text-center text-white">
                <div className="container">
                    <div className="fw-bold fs-5 mb-2 text-primary">
                        Atomic Site
                    </div>
                    <p className="small mb-3 text-secondary">
                        Built with Laravel, Inertia.js, React, and Bootstrap 5.
                    </p>
                    <p className="small mb-0 text-secondary">
                        &copy; {new Date().getFullYear()} Irwan Gumilar. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
