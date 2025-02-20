<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
  public function index()
  {
    $projects = auth()->user()->projects()->paginate(20);

    if ($projects->isEmpty()) {
      return response()->json(['error' => 'No projects for this user'], 404);
    }

    return ProjectResource::collection($projects);
  }

  public function store(StoreProjectRequest $request)
  {
    $project = $request->validated();

    $project['user_id'] = $request->user()->id;

    Project::create($project);

    return response()->json(['message' => 'The project has successfuly created']);
  }

  public function show(Project $project)
  {
    return ProjectResource::make($project);
  }

  public function update(UpdateProjectRequest $request, Project $project)
  {
    $data = $request->except('user_id');

    $project->update($data);

    return response()->json(['message' => 'The project has successfuly updated']);
  }

  public function destroy(Project $project)
  {
    $project->delete();

    return response()->json(['message' => 'The project has successfuly deleted']);
  }
}
