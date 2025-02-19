<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'title' => $this->title,
      'content' => json_decode($this->content),
      'width' => $this->width,
      'height' => $this->height,
      'size' => $this->width . ' x ' . $this->height,
      'last_modified_at' => Carbon::parse($this->updated_at)->diffForHumans(),
    ];
  }
}
