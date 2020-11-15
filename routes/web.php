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
    Route::get('/bookmark/view/{bookmark}', [BookmarkController::class, 'view'])->name('bookmark.view');

    Route::post('/bookmark/preview', [BookmarkController::class, 'getPreviewData'])
        ->name('bookmark.preview');
    Route::post('/bookmark/make-active', [BookmarkController::class, 'makeActive'])->name('bookmark.active');
});
