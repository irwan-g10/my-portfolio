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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('about_me')->nullable();
            $table->string('profile_picture_url')->nullable();
            $table->string('cover_picture_url')->nullable();
            $table->string('social_links')->nullable();
            $table->date('birthday')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('username')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
