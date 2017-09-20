import {IAppState} from './IAppState';
import {FILTER_COURSES, GET_COURSES} from '../courses/course.actions'
const courses = []
const initialState: IAppState = {
    courses: courses,
    filteredCourses: courses
}

function filterCourses(state, action) {
return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => {
        const lowerCaseName = c.name.toLowerCase()
        return lowerCaseName
        .indexOf(action.searchText.toLowerCase()) > -1;
    })
})
}
function getCourses(state, action) {
    return Object.assign({}, state, {
        courses: action.courses,
        filteredCourses: action.courses
    })
}
export function reducer (state = initialState, action) {
    switch(action.type) {
        case FILTER_COURSES: 
        return filterCourses(state, action);

        case GET_COURSES: 
        return getCourses(state, action);
        default: return state;
    }
}