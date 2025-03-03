<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;


Route::get('/', function () {
    return view('welcome');
});



// Route::prefix('/api/v1')->group(function () {
//     Route::post("/register", [AuthenticationController::class, 'register']);
//     Route::post("/login", [AuthenticationController::class, 'login']);
// });

