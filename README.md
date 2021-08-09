# Lab1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

       1-We had landing page which contain two sections:
•	First Section:
	A School dropdown contain the below school’s items:
1.	Cairo English School
2.	British international schools in Cairo
3.	Saint George's college
	After user select certain school new row will appear contain the below inputs:
1.	input field with name section had maximum length 3 characters
2.	input field with name class name and it is mandatory
3.	dropdown field with name grade contain 3 grades (1,2,3) and it is mandatory also
4.	button add class to add new row contain (section, class name, grade fields) .
5.	remove button for each row and it is disabled if there is one row on this section
6.	Done button will be enable for user in case he adds all mandatory fields and after press down the below list of classes will be updates with new classes had been added
7.	cancel to cancel recent user actions.

•	Second Section:
Will contain list of classes and each item contain class name ,section name ,school name  and grade.

