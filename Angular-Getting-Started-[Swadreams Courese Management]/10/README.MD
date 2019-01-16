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


# Folder 5: More on Components
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


# Folder 6: Building Nested Component
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


# Folder 7: Service and Dependency Injection
1. Create a product.service.ts within courses folder
2. Created Service and injected in providedIn: 'root'


# Notes: 
* Create json structrure from https://www.json-generator.com/ and add into courses.json under api folder.
[
  '{{repeat(10, 7)}}',
  {
    courseId: '{{index()}}',
    courseName: 'courseName',
    trainer: '{{firstName()}} {{surname()}}',
    courseCode: '{{company().toUpperCase()}}-{{index()}}{{index()}}',
    nextBatchDate: '{{date(new Date(2019, 0, 1), new Date(), "dd-MM-YYYY")}}',
    description: '{{lorem(1, "paragraphs")}}',
    price: '{{floating(1000, 10000, 2, "00.00")}}',
    starRating: '{{floating(1, 5, 1, "00.00")}}',
    imageUrl: 'http://placehold.it/32x32'
    
  }
]


#Folder 8 : Retrieving data using HTTP: 
1. import { HttpClientModule } from '@angular/common/http'; in app.mdoule.ts
2. import Observable and HttpClient in courses serivce
3. Add courses.json url in variable and provide path of folder angular.json under assets property.
4. Add Observable and tap and catchError in import and use it to get the data from json.
5. Handle errorMessages.    
6. Subscribe to Observable in course-list.component.ts


* Topics covered : 
1. Observable and Reactive Extensions
2. Sending HTTP request
3. Exception Handling
4. Subscribing to an Observable.

#Folder 9: Navigation and Routing Basics
1. Generate new component ng g c courses/course-detail --flat
2. Import router module in app.module
3. Create routing strcture
4. Modify app.component by adding navigation into it.
5. Create Welecome component
6. Place the views

* Topics covered
1. Generating code using cli
2. How Routing works
3. Configuring Routes
4. Tying Routes actions
5. Placing the views

#Folder 10: Navigation and Routing Additional Techniques
1. Configure additional route that accepts id.
2. Modify course-list.component.html and attach routerLink to courseName
3. Modify course-detail.component and add ActivatedRoute to manage if id goes more than available
4. Create a dummy course and show it after naviagation
5. Add router to navigate back and back button.
6. Create guard for course-detail ng g g course-detail
7. Apply guard in module and add canActivate to show if it is not proper id.

* Topics Covered 
1. Passing parameters to a Route
2. Activating route with Guards
