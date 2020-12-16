<?php

namespace App\Models;

use App\Models\Tag;
use Spatie\ModelCleanup\CleanupConfig;
use Spatie\ModelCleanup\GetsCleanedUp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bookmark extends Model implements GetsCleanedUp
{
    use HasFactory;

    protected $guarded = [];

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function cleanUp(CleanupConfig $config): void
    {
        $config
            ->olderThanDays(1)
            ->scope(function ($query) {
                $query->where('is_active', 0);
            });
    }
}
