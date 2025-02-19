<?php

use App\Http\Controllers\DefaultImageController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', fn(Request $request) => $request->user());

  Route::apiResource('projects', ProjectController::class)->except('index');

  Route::get('/user/projects', [ProjectController::class, 'getUserProjects']);

  Route::get('/default-images', [DefaultImageController::class, 'index']);

  Route::get('/uploaded-images', [DefaultImageController::class, 'index']);

  Route::post('/uploaded-images', [DefaultImageController::class, 'store']);
});


require __DIR__ . '/auth.php';
