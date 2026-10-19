<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Admin/Project/Project');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Project/AddProject');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'skill' => 'nullable|string',
            'status' => 'nullable|string',
            'thumbnail' => 'nullable|string',
        ]);

       Project::create($validate);

        return redirect()->route('projects.create')->with('success', 'Project berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
