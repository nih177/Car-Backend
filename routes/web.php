<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/about', [App\Http\Controllers\Navigation::class, 'about'])->name('about');

Route::get('/p/create', [App\Http\Controllers\PostController::class, 'create']);
// // Image storing
Route::post('/p', [App\Http\Controllers\PostController::class, 'store']);
Route::post('/validate', [App\Http\Controllers\Navigation::class, 'valid']);

Route::view('/{path?}','welcome');
// Route::get('/{path?}', [
//     'uses' => 'Navigation@routes',
//     'as' => 'react',
//     'where' => ['path' => '.*']
// ]);