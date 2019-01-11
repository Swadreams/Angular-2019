import { Component } from "@angular/core";

@Component({
  selector: 'cm-root',
  template: `
    <div>
      <h1> {{pageTitle}} </h1>
      <cm-courses></cm-courses>
    </div>
  `
})

export class AppComponent {
  pageTitle: string  = "Swadreams Courses Management";
}