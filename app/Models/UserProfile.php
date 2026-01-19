<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    // protected $table = 'user_profiles';

    protected $fillable = [
        'user_id',
        'name',
        'about_me',
        'profile_picture_url',
        'cover_picture_url',
        'social_links',
        'birthday',
        'city',
        'province',
        'username',

    ];

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }
}
