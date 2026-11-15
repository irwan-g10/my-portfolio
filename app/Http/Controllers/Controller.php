<?php

namespace App\Http\Controllers;

use Closure;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
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
            return $callback();
        } catch (ValidationException | ModelNotFoundException | HttpExceptionInterface $e) {
            throw $e;
        } catch (Throwable $e) {
            Log::error($logMessage, [
                'exception' => $e,
            ]);
            return response()->json([
                'status' => 'failed',
                'message' => app()->isProduction()
                    ? 'Internal server errore'
                    : $e->getMessage(),
            ], 500);
        }
    }

    protected function handleGetAllAPiRequests(
        string $model,
        string $searchCol,
        Request $request
    ) {
        $modelName = class_basename($model);
        try {
            $paginate = $request->query('paginate');
            $search = $request->query('search');
            $sort = $request->query('sort', 'latest');

            $query = $model::when($search, function ($q, $search, $searchCol) {
                return $q->where($searchCol, 'like', '%' . $search . '%');
            });

            switch ($sort) {
                case 'name_asc':
                    $query->orderBy($searchCol, 'asc');
                    break;
                case 'name_desc':
                    $query->orderBy($searchCol, 'desc');
                    break;
                case 'oldest':
                    $query->oldest();
                    break;
                case 'latest':
                    $query->latest();
                    break;
                default:
                    $query->latest();
                    break;
            };

            if ($paginate) {
                $data = $query->paginate($paginate)->withQueryString();
            } else {
                $data = $query->get();
            }


            return response()->json([
                'status' => 'success',
                'message' => "$modelName retrieved succesfully",
                'data' => $data
            ]);
        } catch (ValidationException | ModelNotFoundException | HttpExceptionInterface $e) {
            throw $e;
        } catch (Throwable $e) {
            Log::error("Failed to retrieve $modelName", [
                'exception' => $e,
            ]);
            return response()->json([
                'status' => 'failed',
                'message' => app()->isProduction()
                    ? 'Internal server errore'
                    : $e->getMessage(),
            ], 500);
        }
    }
}
