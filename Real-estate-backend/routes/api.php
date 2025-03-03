<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\PropertyController;


Route::prefix('/v1')->group(function () {
    Route::post("/register", [AuthenticationController::class, 'register']);
});



