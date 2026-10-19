<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\ProjectController;
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
//         return Inertia::render('Admin/AdminHome');
//     })->name('dashboard');
// });
// Route::middleware(['auth', 'verified']) ->group(function() {
    Route::get('/admin/dashboard',[AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/admin/project',[AdminController::class, 'project'])->name('project');
    // Route::get('/admin/project/add',[AdminController::class, 'addProject'])->name('addProject');
    Route::get('/admin/skill',[AdminController::class, 'skill'])->name('skill');
    Route::get('/admin/certificate',[AdminController::class, 'certificate'])->name('certificate');
// });

Route::get('/admin/project/add', [ProjectController::class, 'create'])->name('projects.create');
Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');


require __DIR__.'/settings.php';
