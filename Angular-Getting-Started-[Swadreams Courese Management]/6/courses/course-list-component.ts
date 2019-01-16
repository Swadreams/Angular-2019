import { Component } from "@angular/core";
import { ICourse } from "./course";

@Component({
    selector: 'cm-courses',
    templateUrl: 'course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class CourseListComponent {
    pageTitle: string = "Courses List!";

    // imageWidth: number = 50;
    // imageMargin: number = 2;

    showImage: boolean = false;
    //listFilter: string = 'React';

    filteredCourses: ICourse[];

    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCourses = this.listFilter ? this.performFilter(this.listFilter) : this.courses;
    }

    constructor() {
        this.filteredCourses = this.courses;
        this.listFilter = 'React';
    }

    performFilter(filterBy: string): ICourse[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.courses.filter((course: ICourse) => course.courseName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }



    courses: ICourse[] = [
        {
            "courseId": 1,
            "courseName": "Angular",
            "courseCode": "C-0001",
            "nextBatchDate": "Feb 11, 2019",
            "description": "Getting started with Angular course gives you hands on experience on Angular.",
            "price": 10000.99,
            "starRating": 4.5,
            "imageUrl": "https://angular.io/assets/images/logos/angular/angular.png"
        },
        {
            "courseId": 2,
            "courseName": "React",
            "courseCode": "C-0002",
            "nextBatchDate": "Mar 11, 2019",
            "description": "Getting started with React course gives you hands on experience on React.",
            "price": 11000.94525,
            "starRating": 3.5,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        console.log('Initialization done');
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Course List: ' + message;
    }
}