<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\JourneyController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\TechStackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/welcome', function () {
return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');
Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');

    Route::get('/example', [ExampleController::class, 'index'])->name('example');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('Admin/AdminLayout');
//     })->name('dashboard');
// });
// Route::middleware(['auth', 'verified']) ->group(function() {
    Route::get('/dashboard',[AdminController::class, 'dashboard'])->name('dashboard');
    // Route::get('/admin/project',[AdminController::class, 'index'])->name('projects.index');
    // Route::get('/admin/project/add',[AdminController::class, 'addProject'])->name('addProject');
    // });
    
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');
    
    route::get('/journey', [JourneyController::class, 'index'])->name('journey.index');
    route::get('/journey/create', [JourneyController::class, 'create'])->name('journey.create');
    
    Route::get('/certificates',[CertificateController::class, 'index'])->name('certificates.index');
    Route::get('/certificates/create',[CertificateController::class, 'create'])->name('certificates.create');
    
    Route::get('/skills',[SkillController::class, 'index'])->name('skills.index');
    Route::post('/skills',[SkillController::class, 'store'])->name('skills.store');
    Route::get('/skills/create',[SkillController::class, 'create'])->name('skills.create');
    
require __DIR__.'/settings.php';
