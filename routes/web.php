<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\CategorySkillController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\JourneyController;
use App\Http\Controllers\LevelSkillController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\StatusProjectController;
use App\Http\Controllers\TechStackController;
use App\Models\LevelSkill;
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
Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
// Route::get('/admin/project',[AdminController::class, 'index'])->name('projects.index');
// Route::get('/admin/project/add',[AdminController::class, 'addProject'])->name('addProject');
// });

Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
Route::get('/projects/create', [ProjectController::class, 'create'])->name('projects.create');

route::get('/journey', [JourneyController::class, 'index'])->name('journey.index');
route::get('/journey/create', [JourneyController::class, 'create'])->name('journey.create');

Route::get('/certificates', [CertificateController::class, 'index'])->name('certificates.index');
Route::get('/certificates/create', [CertificateController::class, 'create'])->name('certificates.create');

Route::get('/skills', [SkillController::class, 'index'])->name('skills.index');
Route::post('/api/skills', [SkillController::class, 'store'])->name('skills.store');
Route::get('/skills/create', [SkillController::class, 'create'])->name('skills.create');

Route::get('/category-skills', [CategorySkillController::class, 'index'])->name('category-skills.index');
Route::get('/category-skills/create', [CategorySkillController::class, 'create'])->name('category-skills.create');


Route::get('/level-skills', [LevelSkillController::class, 'index'])->name('level-skills.index');
Route::get('/level-skills/create', [LevelSkillController::class, 'create'])->name('level-skills.create');
Route::post('/api/level-skills', [LevelSkillController::class, 'store'])->name('level-skills.store');


Route::post('/api/category-skills', [CategorySkillController::class, 'store'])->name('category-skills.store');

Route::get('/tech-stacks', [TechStackController::class, 'index'])->name('tech-stacks.index');
Route::get('/tech-stacks/create', [TechStackController::class, 'create'])->name('tech-stacks.create');
Route::get('/tech-stacks/{id}/update', [TechStackController::class, 'create'])->name('tech-stacks.update');

Route::post('/api/tech-stacks', [TechStackController::class, 'store'])->name('tech-stacks.store');
Route::put('/api/tech-stacks/{id}', [TechStackController::class, 'edit'])->name('tech-stacks.edit');
Route::delete('/api/tech-stacks/{id}', [TechStackController::class, 'destroy'])->name('tech-stacks.destroy');

Route::get('/status-projects', [StatusProjectController::class, 'index'])->name('status-projects.index');
Route::get('/status-projects/create', [StatusProjectController::class, 'create'])->name('status-projects.create');

Route::post('/api/status-projects', [StatusProjectController::class, 'store'])->name('status-projects.store');

require __DIR__ . '/settings.php';
