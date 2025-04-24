<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
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
      "id" => "required|uuid",
      'content' => 'required|json',
      'title' => 'string|max:255',
      'width' => 'required|integer|gt:0|lt:2000',
      'height' => 'required|integer|gt:0|lt:2000',
    ];
  }
}
