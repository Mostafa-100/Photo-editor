<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
  use HasFactory, HasUuids;

  protected $fillable = [
    'id',
    'title',
    'content',
    'width',
    'height',
    'user_id',
  ];
}
