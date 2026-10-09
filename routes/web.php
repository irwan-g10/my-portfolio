<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ExampleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');
Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.index');
// Route::get('/', [PortfolioController::class, 'index'])->name('home');

// Route::resource('example', ExampleController::class);
Route::get('/example', [ExampleController::class, 'index'])->name('example');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
