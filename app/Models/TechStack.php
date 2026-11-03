<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TechStack extends Model
{
    protected $fillable = ['title','job_desc','description','icon_id'];
    protected $guarded = ['id'];

    public function icons()
    {
        return $this->belongsTo(Icon::class);
    }
}
