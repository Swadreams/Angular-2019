import { Component, OnInit } from '@angular/core';
import { ICourse } from './course';

@Component({
  selector: 'cm-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  pageTitle: string = "Course Detail";
  course: ICourse;

  constructor() { }

  ngOnInit() {
  }

}
