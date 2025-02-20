<?php

namespace App\Http\Controllers;

use App\Http\Resources\DefaultImageResource;
use App\Models\DefaultImage;

class DefaultImageController extends Controller
{
  public function index()
  {
    $defaultImages = DefaultImage::all();

    if ($defaultImages->isEmpty()) {
      return response()->json(['error' => 'There is no default images'], 404);
    }

    return DefaultImageResource::collection($defaultImages);
  }
}
