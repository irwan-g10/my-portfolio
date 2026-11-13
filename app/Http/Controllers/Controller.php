<?php

namespace App\Http\Controllers;

use Closure;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Throwable;

abstract class Controller
{
    protected function handleAPiRequests(
        Closure $callback,
        string $logMessage
    ) {
        try {
            return $callback;
        } catch (ValidationException | ModelNotFoundException | HttpExceptionInterface $e) {
            throw $e;
        } catch (Throwable $e) {
            Log::error($logMessage, [
                'exception' => $e,
            ]);
            return response()->json([
                'status' => 'failed',
                'message' => app()->isProduction()
                    ? 'Internal server error'
                    : $e->getMessage(),
            ], 500);
        }
    }
}
