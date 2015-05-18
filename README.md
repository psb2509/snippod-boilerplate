# **Snippod-Boilerplate**

## Overview

[**Snippod-Boilerplate**](https://github.com/shalomeir/snippod-boilerplate) is a webapp baseline boilerplate using react+flux and django REST architectures. This boilerplate was made for **Snippod's baseline**.
We'd like to build this starter kit based on full stack single page web application architecture.
Snippod's architecture used a this kind of technology, **React + Flux (RefluxJS) + django REST framewrok + RDBMS**.
[This stack](https://www.gliffy.com/go/publish/7756603) is presented by diagram too.

You can check out the hosted version [**DEMO**](http://snippod-boilerplate-dev.elasticbeanstalk.com/) at [http://snippod-boilerplate-dev.elasticbeanstalk.com/](http://snippod-boilerplate-dev.elasticbeanstalk.com/).

![Alt stack image](https://raw.githubusercontent.com/shalomeir/snippod-boilerplate/master/snippod-boilerplate-stack.png "Stack Diagram")

## Base Repository, Module

Frontside [Snippod-Boilerplate](https://github.com/shalomeir/snippod-boilerplate) is based on [Yeogurt Generator](https://github.com/larsonjj/generator-yeogurt). 
And we recommend to check this [react-tweets](https://github.com/scotch-io/react-tweets) examples.
Also serverside are maded by [django REST framework](http://www.django-rest-framework.org/). We recommend to check this [blog post](https://thinkster.io/django-angularjs-tutorial/) and [repository](https://github.com/brwr/thinkster-django-angular) for server side.

We made this using these technologies.

* [React](http://facebook.github.io/react/)
* [Reflux](https://github.com/spoike/refluxjs)
* [Immutable js](http://facebook.github.io/immutable-js/)
* [Django](https://www.djangoproject.com/) and [Djnago REST Framework](http://www.django-rest-framework.org/)

## Getting Started
Preliminaries :
* Python 3.4
* virtualenv (optional)
* npm

You have to git clone this repository.
```
git clone https://github.com/shalomeir/snippod-boilerplate
```

### Installation for frontend WebApp
In the ['snippod-webapp'](https://github.com/shalomeir/snippod-boilerplate/tree/master/snippod_webapp) directory **'./snippod_webapp/'**

There are a few dependencies that this project relies on: Node.js, Grunt & Bower

- `npm install && bower install`

### Installation for REST API Server
In the ['snippod-server' Root](https://github.com/shalomeir/snippod-boilerplate) directory **'./'**

- `virtualenv venv`
- `source venv/bin/activate`
- `pip install -r requirements.txt`
- `python manage.py makemigrations && python manage.py migrate`
- `python manage.py createsuperuser`


### Usage for frontend WebApp
In the ['snippod-webapp'](https://github.com/shalomeir/snippod-boilerplate/tree/master/snippod_webapp) directory **'./snippod_webapp/'**

- `grunt serve` for previewing your site/app on a development server.
 (If you want live debugging, un-comment [django dev setting file](https://github.com/shalomeir/snippod-boilerplate/blob/master/snippod_boilerplate/settings/dev.py) 69 line
 and install [LiveReload chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).)
- `grunt build` for build site/app for django 'collectstatic' command.


### Usage for REST API Server 
In the ['snippod-server' Root](https://github.com/shalomeir/snippod-boilerplate) directory **'./'**

- `python manage.py runserver`

## Description
### Front side
Almost main javascript source are located (**'./snippod_webapp/client/scripts/'** directory)[https://github.com/shalomeir/snippod-boilerplate/tree/master/snippod_webapp/client/scripts].
Since, We'd like to apply node server for react server-side rendering, but didn't make yet.

This front side ajax call usually doing in Actions. Reflux provide async auto generation for action. We use this and Promise.

### Server side
Django Rest framework provide browserble API. So you can see all get json by browserble API address too.
- account list: ['/api/v1/accounts/'](http://snippod-boilerplate-dev.elasticbeanstalk.com/api/v1/accounts/)
- post list: ['/api/v1/posts/'](http://snippod-boilerplate-dev.elasticbeanstalk.com/api/v1/posts/)
- post list sorted by upvote count: ['/api/v1/posts/?sorting=upvotes'](http://snippod-boilerplate-dev.elasticbeanstalk.com/api/v1/posts/?sorting=upvotes)
- comment list: ['/api/v1/comments/'](http://snippod-boilerplate-dev.elasticbeanstalk.com/api/v1/comments/)
- single account, post or comment like this ['/api/v1/posts/:postId/'](http://snippod-boilerplate-dev.elasticbeanstalk.com/api/v1/posts/4/)
- user's post or comment like this ['/api/v1/user/:userId/posts/'](http://snippod-boilerplate-dev.elasticbeanstalk.com/api/v1/user/4/posts/)

## Reference
### Front side
- [yeogurt generator](https://github.com/larsonjj/generator-yeogurt)
- [Evan's React News](https://github.com/echenley/react-news) & [blog post](http://henleyedition.com/building-an-app-using-react-and-refluxjs/)
- [gaeron's Flux React Router Example](https://github.com/gaearon/flux-react-router-example)
 
### Server side
- [Thinkster.io Django and AngularJS Tutorial](https://thinkster.io/django-angularjs-tutorial/)

## Contributing

Contributions, questions and comments are all welcome and encouraged.

## License
[MIT License](http://opensource.org/licenses/MIT).

Copyright 2015 [Seonggyu Lee](http://www.shalomeir.com/).