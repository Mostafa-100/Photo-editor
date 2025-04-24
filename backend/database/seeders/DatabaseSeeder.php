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
  }
}
