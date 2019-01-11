import { Component } from "@angular/core";
import { ICourse } from "./course";
import { CourseService } from "./course.service";

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
    courses: ICourse[] = [];
    errorMessage: string;

    filteredCourses: ICourse[];

    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCourses = this.listFilter ? this.performFilter(this.listFilter) : this.courses;
    }

    constructor(private courseService: CourseService) {        
    }

    performFilter(filterBy: string): ICourse[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.courses.filter((course: ICourse) => course.courseName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        //this.courses = this.courseService.getProducts();
        this.courseService.getProducts().subscribe(
            courses => {
                this.courses = courses;                
                this.filteredCourses = this.courses;
            },
            error => this.errorMessage = <any> error
        );
        //this.filteredCourses = this.courses;
        //this.listFilter = 'React';
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Course List: ' + message;
    }
}