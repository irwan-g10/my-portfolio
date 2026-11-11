<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LevelSkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('level_skills')->insert([
            ['level_name' => 'Beginner', 'created_at' => now(), 'updated_at' => now()],
            ['level_name' => 'Intermediate', 'created_at' => now(), 'updated_at' => now()],
            ['level_name' => 'Advance', 'created_at' => now(), 'updated_at' => now()],
            ['level_name' => 'Expert', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
