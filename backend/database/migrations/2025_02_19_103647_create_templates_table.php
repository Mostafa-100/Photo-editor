<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('templates', function (Blueprint $table) {
      $table->uuid('id')->primary();
      $table->json('content');
      $table->string('title');
      $table->integer('width');
      $table->integer('height');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('templates');
  }
};
