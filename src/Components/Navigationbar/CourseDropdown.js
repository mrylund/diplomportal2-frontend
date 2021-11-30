import React, { useEffect, useState } from "react"
import { NavDropdown } from "react-bootstrap";
import { getCurrentUser } from "../../libs/requests";

// Creates a NavDropdown with course number and course title: <number> - <title>
export const CourseDropdown = (props) => {
    const [courses, setCourses] = useState([]);

    // Get courses from backend and set the state
    const fetchCourses = async () => {
        // Current user holds an array of courses for the logged in user
        const response = await getCurrentUser()
        // If the user is not logged in there is no response
        if (response) {
            const courses = response.data.courses
            setCourses(courses)
        }
    }
    // Fetch the courses only when the component is first mounted or updated.
    // This is what the second parameter (empty array) means.
    useEffect(() => {
        fetchCourses()
    }, [])

    return (
        !!courses
        ? <NavDropdown title="Kurser">
            {courses.map((course, index) => <NavDropdown.Item key={index} href={"#course/"+course.courseNumber}>{course.courseNumber} - {course.title}</NavDropdown.Item>)}
        </NavDropdown>
        // Do not show if no courses fetched
        : <></>
        
    )
}
