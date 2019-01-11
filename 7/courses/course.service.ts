import { Injectable } from "@angular/core";
import { ICourse } from "./course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    getProducts(): ICourse[] {
        return [
            {
              "courseId": 0,
              "courseName": "Angular",
              "trainer": "Ellis Hester",
              "courseCode": "ZIDOX-00",
              "nextBatchDate": "08-01-2019",
              "description": "Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n",
              "price": 4679.76,
              "starRating": 3.6,
              "imageUrl": "https://angular.io/assets/images/logos/angular/angular.png"
            },
            {
              "courseId": 1,
              "courseName": "React",
              "trainer": "Lupe Estrada",
              "courseCode": "METROZ-11",
              "nextBatchDate": "08-01-2019",
              "description": "Quis slaboris in eu cillum ex minim. Veniam cupidatat pariatur pariatur officia in aliquip velit aliqua ullamco quis mollit. Dolore sint esse id duis ut laboris culpa pariatur consectetur aute amet eu in. Nostrud laboris commodo tempor Lorem sunt anim pariatur voluptate fugiat Lorem. Proident esse consequat dolor voluptate id ipsum exercitation mollit incididunt.\r\n",
              "price": 6595.71,
              "starRating": 3.9,
              "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
            },
        ]
    }
}