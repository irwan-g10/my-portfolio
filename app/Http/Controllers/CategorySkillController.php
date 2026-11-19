<?php

namespace App\Http\Controllers;

use App\Models\CategorySkill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Throwable;

class CategorySkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        return $this->handleGetAllAPiRequests(
            model: CategorySkill::class,
            searchCol: 'category_name',
            request: $request
        );
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
        return $this->handleAPiRequests(function () use ($request) {
            $validate = $request->validate([
                'category_name' => 'required|string|max:255'
            ]);

            $categorySkills = CategorySkill::create($validate);
            return response()->json([
                'status' => 'success',
                'message' => 'Category Skill created succesfully',
                'data' => $categorySkills
            ], 201);
        }, 'Failed to create category skill');
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
    public function edit(string $id) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return $this->handleAPiRequests(function () use ($request, $id) {
            $categorySkills = CategorySkill::findOrFail($id);

            $validate = $request->validate([
                'category_name' => 'required|string|max:255'
            ]);

            $categorySkills->update($validate);

            return response()->json([
                'status' => 'success',
                'message' => 'Category Skill updated successfully',
                'data' => $categorySkills
            ]);
        }, 'Failed to update Category Skill');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return $this->handleAPiRequests(function () use ($id) {
            $categorySkill = CategorySkill::findOrFail($id);
            $categorySkill->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Category Skill deleted successfully'
            ]);
        }, 'Failed to delete Category');
    }
}
