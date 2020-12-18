<?php

namespace App\Services;

use App\Models\Tag;

class BookmarkService
{
    public function getBookmarkData(string $url)
    {
        $data = \OpenGraph::fetch($url, true);

        $data['title'] = $this->getPropertyData('title', $data);
        $data['description'] = $this->getPropertyData('description', $data);
        $data['image'] = $this->getPropertyData('image', $data);

        return $data;
    }

    private function getPropertyData(string $name, array $data)
    {
        if ($data[$name] === '' &&
            isset($data["twitter:{$name}"]) &&
            $data["twitter:{$name}"] !== '') {
                return $data["twitter:{$name}"];
        }

        return $data[$name];
    }

    public function handleBookmarkTags(array $tags)
    {
        $newTags = collect();
        $existingTagNames = collect();

        foreach ($tags as $tag) {
            if (isset($tag['__isNew__'])) {
                $tag = Tag::create(['name' => $tag['value']]);
                $newTags->push($tag);
            } else {
                $existingTagNames->push(['name' => $tag['value']]);
            }
        }

        $existingTags = Tag::whereIn('name', $existingTagNames->pluck('name'))->get();
        return $existingTags->merge($newTags)->pluck('id');
    }
}
