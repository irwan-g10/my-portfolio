<?php

namespace App\Http\Controllers;

use App\Models\CategorySkill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorySkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/CategorySkill/CategorySkill', ['categorySkills' => CategorySkill::paginate(5)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CategorySkill/CreateCategorySkill');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        CategorySkill::create($validate);

        // dd($validate);

        return redirect()->route('category-skills.index')->with('success', 'Category Skill created successfully.');
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
