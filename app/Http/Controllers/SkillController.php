<?php

namespace App\Http\Controllers;

use App\Models\CategorySkill;
use App\Models\Icon;
use App\Models\LevelSkill;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Pest\Plugins\Only;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Skill/Index', [
            'skills' => Skill::with('icon')->paginate(5),
            'category' => CategorySkill::paginate(5),
            'level' => LevelSkill::paginate(5),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Skill/Create', [
            'category' => CategorySkill::all(),
        ]);
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'level' => 'nullable|string|min:0|max:100',
            'percentage' => 'nullable|integer|max:255',
            'iconSource' => 'nullable|string|max:255',
            'iconType' => 'nullable|string|max:255',
        ]);
        DB::transaction(function () use ($validate) {
            $iconId = null;

            if (!empty($validate['iconType'] && !empty($validate['iconSource']))) {

                $icon = Icon::create([
                    'name' => "skill-{$validate['name']}",
                    'category' => "Skill",
                    'type' => $validate['iconType'],
                    'source' => $validate['iconSource'],
                ]);

                $iconId = $icon->id;
            };

            Skill::create([
                'name' => $validate['name'],
                'category' => $validate['category'],
                'level' => $validate['level'],
                'percentage' => $validate['percentage'],
                'icon_id' => $iconId,
            ]);
        });

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
