<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable =['title','role','created_date','contributor','demo_url','github_url','description','status','tech_stack','features','thumbnail','galery'];

    protected $cast = [
        'features' => 'array',
        'galery' => 'array',
        'created_date' => 'date'
    ]
}
