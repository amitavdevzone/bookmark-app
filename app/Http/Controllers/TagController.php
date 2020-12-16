<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function search(Request $request)
    {
        $postData = $this->validate($request, [
            'tag' => ['required']
        ]);

        return Tag::query()
            ->where('name', 'like', "{$postData['tag']}%")
            ->limit(10)
            ->get();
    }
}
