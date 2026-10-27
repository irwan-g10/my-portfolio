<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('role')->nullable();
            $table->date('created_date')->nullable();
            $table->string('contributor')->nullable();
            $table->string('demo_url')->nullable();
            $table->string('github_url')->nullable();
            $table->text('description')->nullable();
            $table->string('status')->nullable();
            $table->string('tech_stack')->nullable();
            $table->json('features')->nullable();
            $table->string('thumbnail')->nullable();
            $table->json('galery')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
