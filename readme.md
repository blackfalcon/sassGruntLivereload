# Sass using Grunt w/LiveReload support

This repo is a simple example of a Gruntfile that will process the Sass in your project and provide LiveReload support.

This project has a dependency on Ruby Sass. To ensure that you have Sass installed, enter

```
$ sass --version
```

If you do not have Sass installed, enter

```
$ gem install sass
```

## The quick setup

Follow these steps to pull this repo down and get it working

1. `$ cd ~/Desktop
1. `$ bower install sass-grunt-livereload`
1. `$ mv bower_components/sass-grunt-livereload ~/Desktop/project`
1. `$ cd project`
1. `$ npm install`
1. `$ grunt` to create initial set of assets
1. `$ python -m SimpleHTTPServer`
1. Open a new Terminal shell
1. `$ grunt watch`
1. Go to `http://localhost:8000/`
1. Edit any of the Sass and watch the browser update

## To download and use

This is not a project to use specifically, but the parts you need to run Sass locally with `grunt-watch` and have LiveReload support are here.

You can either clone down this repo and use it, but be sure to delete the `.git/` file! Or, you can use `bower install sass-grunt-livereload` and this will pull the repo down without any Git history.

Or, you can simply copy and paste from the code examples into your project to get up and running.

## Using

The key parts to this repo are the `Gruntfile.js` and `package.json` files. You will need `sass` and `stylesheets` directories, or rename them as needed but be sure to update the `Gruntfile.js`.

## npm install

When you have the `package.json` file in your project, be sure to run `npm install` and this will load the needed libraries. Also, remember to put `node_modules/` in your `.gitignore`. You don't need to commit those libraries to version control.

## Running grunt, grunt-watch and LiveReload

The `Gruntfile.js` provided has grunt watch support with LiveReload. When ready to process Sass, run, `grunt watch`.

You can simply run `grunt` if you just want a quick compile

In the `index.html` file there is a javascript reference.

```html
<script src="http://localhost:35729/livereload.js"></script>
```

Be sure to add this to your project in a common template so that it load on every page. Once added, refresh the browser and then LiveReload should work with every touch of a Sass file.
