<?php

use App\Models\Bookmark;

return [

    /*
     * All models in this array that implement `Spatie\ModelCleanup\GetsCleanedUp`
     * will be cleaned.
     */
    'models' => [
        Bookmark::class,
    ],
];
