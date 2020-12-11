<?php

namespace App\Models;

use Spatie\ModelCleanup\CleanupConfig;
use Spatie\ModelCleanup\GetsCleanedUp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bookmark extends Model implements GetsCleanedUp
{
    use HasFactory;

    protected $guarded = [];

    public function cleanUp(CleanupConfig $config): void
    {
        $config
            ->olderThanDays(1)
            ->scope(function ($query) {
                $query->where('is_active', 0);
            });
    }
}
