<?php

namespace App\Http\Controllers;

use App\Models\LevelSkill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LevelSkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/LevelSkill/LevelSkill');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // dd('halo');
        return Inertia::render('Admin/LevelSkill/CreateLevelSkill');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'string|required|max:255'
        ]);

        LevelSkill::create($validate);

        return redirect()->route('skills.index')->with('Success', 'Level Created Succesfully');
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
