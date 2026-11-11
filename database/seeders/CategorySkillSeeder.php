<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category_skills')->insert([
            ['category_name' => 'Programming Language', 'created_at' => now(), 'updated_at' => now()],
            ['category_name' => 'Framework', 'created_at' => now(), 'updated_at' => now()],
            ['category_name' => 'Database', 'created_at' => now(), 'updated_at' => now()],
            ['category_name' => 'Ai Coding Assistant', 'created_at' => now(), 'updated_at' => now()],
            ['category_name' => 'Version Control', 'created_at' => now(), 'updated_at' => now()],
            ['category_name' => 'Tools', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
