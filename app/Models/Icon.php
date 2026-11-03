<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Icon extends Model
{
    protected $guarded = ['id'];
    protected $fillable = [
        'name',
        'category',
        'type',
        'source',
    ];

    public function techStacks()
    {
        return $this->hasMany(TechStack::class);
    }

    public function skills()
    {
        return $this->hasMany(Skill::class);
    }
}
