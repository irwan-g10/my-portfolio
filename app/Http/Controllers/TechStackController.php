<?php

namespace App\Http\Controllers;

use App\Models\TechStack;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TechStackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/TechStack/TechStack',['techStacks' => TechStack::paginate(5)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id = null)
    {
        $techStack = null;
        if($id){
            $techStack = TechStack::findOrFail($id);
        }
        return Inertia::render('Admin/TechStack/CreateTechStack',[
            'techStack' => $techStack,
            'isUpdate' => $id ? true : false
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'job_desc'=> 'nullable|string',
            'description' => 'nullable|string',
        ]);

        // dd($validate);
        TechStack::create($validate);

        return redirect()->route('tech-stacks.index')->with('success', 'Tech Stack created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id)
    {
        
    $validate = $request->validate([
            'title' => 'required|string|max:255',
            'job_desc'=> 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $project = TechStack::findOrFail($id);
        $project->update($validate);

        return redirect()->back()->with('success', 'Tech Stack updated successfully.');
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
