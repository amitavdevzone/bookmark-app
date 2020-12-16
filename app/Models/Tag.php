<?php

namespace App\Models;

use App\Models\Bookmark;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function bookmarks()
    {
        return $this->morphedBy(Bookmark::class, 'taggable');
    }
}
