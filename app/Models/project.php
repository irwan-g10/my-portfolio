<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    protected $fillable =['title','role','created_date','contributor','demo_url','github_url','description','status','tech_stack','features','thumbnail','galery'];

    protected $casts = [
        'features' => 'array',
        'galery' => 'array',
        'created_date' => 'date'
    ];

    protected $guarded = ['id'];

    public function skills(): BelongsToMany {
        return $this->belongsToMany(Skill::class, 'project_skill', 'project_id', 'skill_id');
    }
}
