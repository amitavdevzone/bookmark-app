const mix = require('laravel-mix');

mix.ts('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
