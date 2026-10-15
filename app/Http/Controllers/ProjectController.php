<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;

class ProjectController extends Controller
{
    public function create() {
        return Inertia::render('Admin/Project/Project');
    }

    public function store(Request $request){
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'skill' => 'nullable|string',
            'status' => 'nullable|string',
            'thumbnail' => 'nullable|string',
        ]);

       Project::create($validated);

        return redirect()->route('projects.index')->with('success', 'Project berhasil ditambahkan!');
    }
}
