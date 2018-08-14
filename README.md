# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4. tt

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Installing Karma and plugins
The recommended approach is to install Karma (and all the plugins your project needs) locally in the project's directory.

# Install Karma:
$ npm install karma --save-dev

# Install plugins that your project needs:
$ npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
This will install karma, karma-jasmine, karma-chrome-launcher and jasmine-core packages into node_modules in your current working directory and also save these as devDependencies in package.json, so that any other developer working on the project will only have to do npm install in order to get all these dependencies installed.

# Run Karma:
$ ./node_modules/karma/bin/karma start
Commandline Interface
Typing ./node_modules/karma/bin/karma start sucks and so you might find it useful to install karma-cli globally. You will need to do this if you want to run Karma on Windows from the command line.

$ npm install -g karma-cli
Then, you can run Karma simply by karma from anywhere and it will always run the local version.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
