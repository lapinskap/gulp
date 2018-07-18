# gulp
> First gulp experience. Gulp + HAML + SCSS


## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

I wanted to test gulp, translate sass to css, haml to html. This is a general repository in which I will compare similar frontend technologies. Rather it does not create a consistent application, sooner a several separate views.


## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* Gulp - "gulp": "^3.9.1",
* Haml - "gulp-haml": "^1.0.1"
* SCSS -  "gulp-sass": "^4.0.1"
* browserSync - "browser-sync": "^2.24.5"

## Setup

There is no nessecary setup. Gulp tasks usage:

```
gulp hello

gulp sass

gulp haml
```

## Code Examples
Simple gulp task:

```javascript
gulp.task('hello', function() {
    console.log('Hello Nice Guy');
  });
```
Simple haml code:
```haml 
#content
  .left.column
    %h2 Welcome to our site!
    %p= print_information
  .right.column
    = render :partial => "sidebar"
```

## Features
List of features ready and TODOs for future development
* HAML
* SCSS

To-do list:
* add more HAML files

## Status
Project is: _in progress_ 

I'm going to add some HAML files in the future to train the syntax.

## Inspiration
> Some unusual inspiration

## Contact
Created by [@lapinskap](https://www.facebook.com/paulina.lapinska99) - feel free to contact me!
