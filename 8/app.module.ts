import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list-component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,

    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
