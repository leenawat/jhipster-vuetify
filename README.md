# Jhipster-vuetify
[![NPM version][npm-image]][npm-url] [![Azure DevOps Build Status][azure-devops-image]][azure-devops-url-main] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Downloads][npmcharts-image]][npmcharts-url]
> ## ⚠️ Status: in development
> JHipster-vuetify, a Vue.js blueprint for JHipster. It will use [Vue.js](https://vuejs.org/) with [Vuetify.js](https://vuetifyjs.com/) as frontend libraries.

## Compatiblity with upstream 
This blueprint is based on https://github.com/jhipster/jhipster-vuejs where vuetify replaces vue-bootstrap in templates.

jhipster-vuejs blueprint separates vue components into two diferent files: Component.ts for the script and Component.vue for the template.

Typescript code is mostly identical with just some aditions for validation and pagination.

Vuetify templates do now overwrite original vue-bootstrap and were placed in separate files (which are then renamed when the blueprint is executed). This facilitates pulling changes from upstream.

This blueprint is (not as tested as the original) but mostly complete now and will receive regular upstream updates.

Version numbers will follow upstream versions.

Current upstream version is: 1.1.0.


<div align="center">
  <a href="http://www.jhipster.tech/">
    <img src="https://github.com/jhipster/jhipster-artwork/blob/master/logos/JHipster%20RGB-small100x25px.png?raw=true">
  </a>
  <a href="https://vuejs.org/">
    <img width=100px src="https://avatars3.githubusercontent.com/u/6128107?s=200&v=4">
  </a>
  <a href="https://vuetifyjs.com" rel="nofollow">
    <img width="100" src="https://camo.githubusercontent.com/41759602ad091b02adf7b4986b55b0a870471b98/68747470733a2f2f63646e2e767565746966796a732e636f6d2f696d616765732f6c6f676f732f6c6f676f2e737667" data-canonical-src="https://cdn.vuetifyjs.com/images/logos/logo.svg">
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
npm install -g generator-jhipster-vuetify
```

To update this blueprint:

```bash
npm update -g generator-jhipster-vuetify
```

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-vuetify
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-vuetify
```

# Usage

To use this blueprint, run 

```bash
jhipster --blueprint vuetify
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

[npm-image]: https://img.shields.io/npm/v/generator-jhipster-vuetify/latest.svg?style=flat
[npm-url]: https://npmjs.org/package/generator-jhipster-vuetify
[travis-image]: https://travis-ci.com/jhipster/jhipster-vuetify.svg?branch=master
[travis-url]: https://travis-ci.com/jhipster/jhipster-vuetify
[azure-devops-image]: https://dev.azure.com/jhipster/jhipster-vuetify/_apis/build/status/jhipster-vuetify?branchName=master
[azure-devops-url-main]: https://dev.azure.com/jhipster/jhipster-vuetify/_build
[daviddm-image]: https://david-dm.org/jhipster/jhipster-vuetify.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jhipster/jhipster-vuetify
[npmcharts-image]: https://img.shields.io/npm/dm/generator-jhipster-vuetify.svg?label=Downloads&style=flat
[npmcharts-url]: https://npmcharts.com/compare/generator-jhipster-vuetify
