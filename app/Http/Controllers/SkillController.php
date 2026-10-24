<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Pest\Plugins\Only;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Skill/Index', ['skills' => Skill::paginate(5)]);
        }
        
        /**
         * Show the form for creating a new resource.
        */
        public function create()
        {
        return Inertia::render('Admin/Skill/Create');
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
        ]);
        Skill::create([
            'name' => $request->name,
            'category' => $request->category,
        ]);
        // console.log('apakah berhasil?');

        return redirect()->route('skills.index')->with('success', 'Skill Berhasil ditambahkan');
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
