<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'title' => 'string|max:255',
      'content' => 'json',
      'width' => 'integer|gt:0|lt:2000',
      'height' => 'integer|gt:0|lt:2000',
    ];
  }

  public function withValidator($validator)
  {
    $validator->after(function ($validator) {
      if (!$this->hasAny(['title', 'content', 'width', 'height'])) {
        $validator->errors()->add('fields', 'At least one field (title, content, tags) must be provided.');
      }
    });
  }
}
