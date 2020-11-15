<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookmarkController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/bookmarks', [BookmarkController::class, 'index'])->name('bookmark.index');
    Route::get('/bookmark/add', [BookmarkController::class, 'add'])->name('bookmark.add');

    Route::post('/bookmark/preview', [BookmarkController::class, 'getPreviewData'])
        ->name('bookmark.preview');
});
