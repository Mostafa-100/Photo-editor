<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class UploadedImage extends Model
{

  use HasUuids;

  protected $fillable = [
    'uuid',
    'path',
    'user_id',
  ];
}
