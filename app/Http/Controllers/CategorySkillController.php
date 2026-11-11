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
        try {
            $paginate = $request->query('paginate');
            $search = $request->query('search');
            $sort = $request->query('sort', 'latest');

            $query = CategorySkill::when($search, function ($q, $search) {
                return $q->where('category_name',);
            });

            switch ($sort) {
                case 'name_asc':
                    $query->orderBy('name', 'asc');
                    break;
                case 'name_desc':
                    $query->orderBy('name', 'desc');
                    break;
                case 'oldest':
                    $query->oldest();
                    break;
                default:
                    $query->latest();
                    break;
            };

            if ($paginate) {
                $categorySkills = $query->paginate($paginate)->withQueryString();
            } else {
                $categorySkills = $query->get();
            }


            return response()->json([
                'status' => 'success',
                'message' => 'Category Skill retrieved succesfully',
                'data' => $categorySkills
            ]);
        } catch (Throwable $e) {
            Log::error('Failed to retrieve category skills', [
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'status' => 'failed',
                'message' => $e->getMessage()
            ], 500);
        }
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
        //nb  
    }
}
