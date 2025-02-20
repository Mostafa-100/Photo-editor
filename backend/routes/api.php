<?php

use App\Http\Controllers\DefaultImageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UploadedImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', fn(Request $request) => $request->user());

  Route::apiResource('projects', ProjectController::class);

  Route::get('/default-images', [DefaultImageController::class, 'index']);

  Route::get('/uploaded-images', [UploadedImageController::class, 'index']);
  Route::post('/uploaded-images', [UploadedImageController::class, 'store']);
});

require __DIR__ . '/auth.php';
