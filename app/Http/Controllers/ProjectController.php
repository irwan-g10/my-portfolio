<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Admin/Project/Index', ['projects' => Project::with('skills')->paginate(5)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Project/Create', ['skills' => Skill::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'role' => 'nullable|string',
            'created_date' => 'nullable|string',
            'contributor' => 'nullable|string',
            'demo_url' => 'nullable|string',
            'github_url' => 'nullable|string',
            'description' => 'nullable|string',
            'status' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'features' => 'nullable|array',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'galery' => 'nullable|array',
            'skills' => 'nullable|array', 
            'skills.*' => 'exists:skills,id', 
            'galery.*' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',

        ]);

        // dd($validate);

       // 1. Buat project dulu dan AMBIL data request KECUALI 'skills'
    $project = Project::create($request->except('skills','galery','thumbnail'));

    // 2. Masukkan relasi skill yang dipilih ke tabel pivot 'project_to_skill'
    if ($request->has('skills')) {
        $project->skills()->sync($request->input('skills'));
    }
    if($request->hasFile('galery')){
        foreach($request->file('galery') as $file){
            $filename = 'galery_'.time().'-'.uniqid().'.'. $file->getClientOriginalExtension();

            $path = $file->storeAs('projects/galery',$filename,'public');
            $project->galeries()->create(
                ['image_path' => $path]
            );
        }

    }
    if($request->hasFile('thumbnail')){
        $filename = 'thumbnail'.time().'-'.uniqid().'.'. $request->file('thumbnail')->getClientOriginalExtension();

        $path = $request->file('thumbnail')->storeAs('projects/thumbnail', $filename, 'public');
        $project->update([
        'thumbnail' => $path
    ]);
    }

        return redirect()->route('projects.index')->with('success', 'Project berhasil ditambahkan!');
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
