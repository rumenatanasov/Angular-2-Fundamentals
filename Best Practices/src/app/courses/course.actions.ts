import { Injectable } from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store';
import {CourseService} from './course.service';
export const FILTER_COURSES = 'courses/FILTER';
export const GET_COURSES = 'courses/GET';
@Injectable()
export class CourseActions {
    constructor(private ngRedux: NgRedux<IAppState>,
                private courseService: CourseService){
    }
    filterCourses(searchText: string) {
        this.ngRedux.dispatch({
            type: FILTER_COURSES,
            searchText
        })
         
    }
    getCourses() {
        this.courseService
        .getCourses()
        .subscribe(courses => {
            this.ngRedux.dispatch({
                type: GET_COURSES,
                courses
            })
        })
    }
}