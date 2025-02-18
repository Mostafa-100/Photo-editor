<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
  /**
   * Handle an incoming authentication request.
   */
  public function store(LoginRequest $request): JsonResponse
  {
    if (!auth()->attempt($request->all())) {
      return response()->json([
        'email' => ['The provided credentials are incorrect.'],
      ], 401);
    }

    $token = auth()->user()->createToken('auth-token')->plainTextToken;

    return response()->json(['token' => $token], 200);
  }

  /**
   * Destroy an authenticated session.
   */
  public function destroy(Request $request): Response
  {
    $request->user()->tokens()->delete();

    return response()->noContent();
  }
}
