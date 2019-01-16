import { Component, OnInit } from '@angular/core';

import { ICourse } from './course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cm-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  pageTitle: string = "Course Detail";
  course: ICourse;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    
    let id = +this.route.snapshot.paramMap.get('id');

    this.pageTitle += `${id}`;
    
    this.course = {
      "courseId": id,
      "courseName": "Angular",
      "trainer": "Ellis Hester",
      "courseCode": "ZIDOX-00",
      "nextBatchDate": "08-01-2019",
      "description": "Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n",
      "price": 4679.76,
      "starRating": 3.6,
      "imageUrl": "https://angular.io/assets/images/logos/angular/angular.png"
    }
  }

  onBack() {
    this.router.navigate(['/courses']);
  }

}
