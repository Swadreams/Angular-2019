# Folder 1: First thing first. Running application and introduce project.
Updated 
    1. app.component.html 
    2. app.component.ts
to show started text.

# Folder 2: Introduction to Components
1. Cleared app.component.ts file
2. Created AppComponent
3. Added pageTitle propert in class
4. Created inline template and showed the pageTitle
5. Show property changes by using debugger.


# Folder 3: Templates, Interpolation and Directives

1. Install bootstrap font-awesome
    - Run command [ npm install bootstrap font-awesome ]
2. Add Reference of bootstrap and font-awesome libraries into the outer styles folder
    -  @import "~/bootstrap/dist/css/bootstrap.min.css";
    -  @import "~font-awesome/css/font-awesome.css.map";
3. Created courses folder
4. Added course-list.component.html file and added structure for card and table.
5. Added course-list-component.ts and created CourseListComponent
6. Used structural directive 
    - *ngIf
    - *ngFor


* Learned Below modules in Folder 3: 
1. Building a template
2. Building a component
3. Using a Component as Directive
4. Binding with Interpolation
5. Adding logic with Directive : ngIf
6. Adding logic with Directive : ngFor


#Folder 4: Data binding and Pipes
1. Added [(ngModel)] property to display filtered value and respective FormsModule to work ngModule
2. Pipes

* Topics covered
1. Property binding [src]="imageUrl"
2. Handling events with Event Binding (click)="toggleImage"
3. Handling input with Two-way binding
4. Transforming data with pipes


# Folder 5: 
1. Create course.ts
2. Define Interface 
3. Show that if we mistype property it shows image error on page and what happens in the code it shows error if define interface against property.
4. Show how to add css, create file [course-list-component.css],
5. color: #337AB7
6. To create a space filter :- 
   > Create a shared folder
   > File [ convert-to-space.pipe.ts]
   > craete filtet convertToSpaces and use at CourseCode
7. Filtering List based on input
   > Add setter and getter for listFilter
   > Create performFilter method to do filtering over courses


* Topcis covered
1. Defining Interface
2. Encapsulating Component Styles
3. Using Lifecycle Hooks
4. Building custom pipes
5. Filtering a list


# Folder 6: 
1. Create starComponent.ts to show rating in the form of stars instead of numbers.
2. Create respective template and css. Add fa-star classes to show star.
3. Use cm-star component in course-list.component.html
4. Need rating @input from parent component
5. Use @output to raise an event from child component.

* Topics covered: 
1. Building a Nested Component.
2. Using a nested Component
3. Passing data to nested component.
4. Passing data from a component.
