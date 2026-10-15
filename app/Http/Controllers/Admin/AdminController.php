<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard/Dashboard');
    }

    public function project()
    {
        return Inertia::render('Admin/Project/Project');
    }
    public function addProject()
    {
        return Inertia::render('Admin/Project/AddProject');
    }

    public function skill()
    {
        return Inertia::render('Admin/Skill/Skill');
    }

    public function certificate()
    {
        return Inertia::render('Admin/Certificate/Certificate');
    }
}
