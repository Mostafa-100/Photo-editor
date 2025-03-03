<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUploadedImage;
use App\Http\Resources\UploadedImageResource;
use App\Models\UploadedImage;
use Carbon\Carbon;

class UploadedImageController extends Controller
{
  public function index()
  {
    $uploadedImages = auth()->user()->uploadedImages()->get();

    if ($uploadedImages->isEmpty()) {
      return response()->json(['message' => 'No uploaded images for this user'], 404);
    }

    return UploadedImageResource::collection($uploadedImages);
  }

  public function store(StoreUploadedImage $request)
  {
    $images = $request->file('images');

    foreach ($images as $image) {
      $path = $image->store('uploaded-images');
      UploadedImage::create(['path' => $path, 'user_id' => auth()->id()]);
    }

    return response()->json(['message' => 'The image has been successfuly uploaded']);
  }
}
