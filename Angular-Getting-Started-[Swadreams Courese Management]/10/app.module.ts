import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list-component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { CourseDetailComponent } from './courses/course-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { CourseDetailGuard } from './courses/course-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,

    ConvertToSpacesPipe,

    CourseDetailComponent,

    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/:id', 
        canActivate: [CourseDetailGuard],
        component: CourseDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
