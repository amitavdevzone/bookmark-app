<?php

namespace App\Services;

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
}
