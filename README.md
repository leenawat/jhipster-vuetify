# JHipster-vuetify
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Downloads][npmcharts-image]][npmcharts-url]
> ## ⚠️ Status: in development
> JHipster-vuetify, a Vue.js blueprint for JHipster. It will use [Vue.js](https://vuejs.org/) as the frontend library. Check out our latest beta release `1.0.0-beta.0` to try this out. 

<div align="center">
  <a href="http://www.jhipster.tech/">
    <img src="https://github.com/jhipster/jhipster-artwork/blob/master/logos/JHipster%20RGB-small100x25px.png?raw=true">
  </a>
  <a href="https://vuejs.org/">
    <img width=100px src="https://avatars3.githubusercontent.com/u/6128107?s=200&v=4">
  </a>
</div>

# Introduction

This is a [JHipster](http://www.jhipster.tech/) blueprint.

# Prerequisites

As this is a [JHipster](http://www.jhipster.tech/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://www.jhipster.tech/installation/)

# Installation


## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-vuetify@1.0.0-beta.0
```

To update this blueprint:

```bash
npm update -g generator-jhipster-vuetify
```

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-vuetify@1.0.0-beta.0
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-vuetify
```

# Usage

To use this blueprint, run 

```bash
jhipster --blueprint vuejs
```


## Running local Blueprint version for development

During development of blueprint, please note the below steps. They are very important.

1. Clone the projects

You'll probably need the current master of **generator-jhipster** :

- fork generator-jhipster: `https://github.com/jhipster/generator-jhipster/fork`
- clone locally your fork: `git clone https://github.com/<your_username>/generator-jhipster`
- `cd generator-jhipster`
- `git remote add upstream https://github.com/jhipster/generator-jhipster`
- so you'll be able to update regularly your fork, using `git fetch upstream && git checkout master && git rebase upstream/master`
- `npm ci`
- `npm link`

Then, about **jhipster-vuetify** :

- fork jhipster-vuetify: `https://github.com/jhipster/jhipster-vuetify/fork`
- clone locally your fork: `git clone https://github.com/<your_username>/jhipster-vuetify`
- `cd jhipster-vuetify`
- `git remote add upstream https://github.com/jhipster/jhipster-vuetify`
- so you'll be able to update regularly your fork, using `git fetch upstream && git checkout master && git rebase upstream/master`
- `npm ci`
- `npm link`
- `npm link generator-jhipster`


2. Create a new folder for the app to be generated and link JHipster and your blueprint there

```bash
mkdir my-app
cd my-app
npm link generator-jhipster-vuetify
jhipster -d --blueprint vuejs
```

# License

Apache-2.0 © [Deepu K Sasidharan](https://deepu.js.org)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-vuetify.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-vuetify
[travis-image]: https://travis-ci.com/jhipster/jhipster-vuetify.svg?branch=master
[travis-url]: https://travis-ci.com/jhipster/jhipster-vuetify
[daviddm-image]: https://david-dm.org/jhipster/jhipster-vuetify.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jhipster/jhipster-vuetify
[npmcharts-image]: https://img.shields.io/npm/dm/generator-jhipster-vuetify.svg?label=Downloads&style=flat
[npmcharts-url]: https://npmcharts.com/compare/generator-jhipster-vuetify
