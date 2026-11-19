<?php

namespace Database\Factories;

use App\Models\Skill;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends Factory<Skill>
 */
class SkillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Skill::class;
    public function definition(): array
    {
        $categoryIds = DB::table('category_skills')->pluck('id');
        $levelIds = DB::table('level_skills')->pluck('id');
        $level = $levelIds->random();
        return [
            'skill_name' => ucfirst(fake()->unique()->word()),
            'category_id' => $categoryIds->random(),
            'level_id' => $level,
            'percentage' => $level * (100 / $levelIds->count())
        ];
    }
}
