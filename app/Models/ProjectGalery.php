<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectGalery extends Model
{
    protected $fillable = ['project_id','image_path'];

    public function Project() {
        return $this->belongsTo(Project::class);
    }
}
