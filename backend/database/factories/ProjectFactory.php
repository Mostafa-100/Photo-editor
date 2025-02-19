<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'title' => fake()->word(),
      'content' => "{\"version\":\"6.6.1\", \"objects\":[], \"background\":\"#fff\"}",
      'width' => fake()->randomNumber(3, true),
      'height' => fake()->randomNumber(3, true),
      'user_id' => User::all()->first()
    ];
  }
}
