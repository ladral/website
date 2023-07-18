# Ladral website

## Description
This Git project is a modern web application built using the SASS CSS preprocessor, the AlpineJS framework and the Motion One animation library.

SASS is a powerful stylesheet language that extends the capabilities of CSS. The SASS stylesheets are written with focus on reusable code, modularity and theming by taking advantage of features such as variables, mixins, and inheritance.

AlpineJS is a lightweight framework for building interactive web applications using JavaScript. With AlpineJS, developers can add dynamic behavior to their web applications without relying on heavy frameworks like React or Vue. AlpineJS provides many of the same features found in larger frameworks, including reactive data binding and component lifecycle methods.

Motion One is an animation library that provides a simple and intuitive API for creating stunning animations in your web applications.

## Installation
### Node.js
1. node.js v18 (nvm recommended for node install)
2. install npm (shipped with node)
3. install all dependencies: `npm install`

## Usage
1. build & serve web application in development mode: `npm run dev`
2. open browser with URL: http://localhost:1234


## Dependencies
- alpine.js - lightweight JavaScript framework
- motion one - Animation library
- splide - Lightweight, flexible and accessible slider/carousel
- parcel - Bundler for client application
- cypress - E2E testing framework
- rimraf - executes UNIX command `rm -rf` (Windows compatible)

## E2E tests
1. run application (see usage)
2. start e2e tests: `npm run test:e2e`

## Build
1. install production dependencies: `npm install --production`
2. build web application for production: `npm run build`