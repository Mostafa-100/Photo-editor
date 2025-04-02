<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', fn(Request $request) => $request->user());

  Route::apiResource('projects', ProjectController::class);
});

require __DIR__ . '/auth.php';
