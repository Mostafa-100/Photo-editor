<?php

namespace Database\Seeders;

use App\Models\DefaultImage;
use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // User::factory(10)->create();

    User::factory()->create([
      'id' => Str::uuid(),
      'name' => 'user',
      'email' => 'user@example.com',
      'password' => Hash::make('12345')
    ]);

    Project::factory(10)->create();

    $defaultImages = [
      ['id' => Str::uuid(), 'path' => 'default-images/NRQV-hBF10M-unsplash.jpg', 'owner_fullname' => 'bailey zindel'],
      ['id' => Str::uuid(), 'path' => 'default-images/d4feocYfzAM-unsplash.jpg', 'owner_fullname' => 'damiano baschiera'],
      ['id' => Str::uuid(), 'path' => 'default-images/h5wvMCdOV3w-unsplash.jpg', 'owner_fullname' => 'goutham krishna'],
      ['id' => Str::uuid(), 'path' => 'default-images/EwKXn5CapA4-unsplash.jpg', 'owner_fullname' => 'jeremy bishop'],
      ['id' => Str::uuid(), 'path' => 'default-images/mWRR1xj95hg-unsplash.jpg', 'owner_fullname' => 'christian joudrey'],
    ];

    DefaultImage::insert($defaultImages);
  }
}
