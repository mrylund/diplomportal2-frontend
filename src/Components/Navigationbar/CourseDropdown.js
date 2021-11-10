import React, { useEffect, useState } from "react"
import { NavDropdown } from "react-bootstrap";
import { getCourses } from "@libs/requests.js";

// Creates a NavDropdown with course number and course title: <number> - <title>
export const CourseDropdown = (props) => {
    const [courses, setCourses] = useState([]);

    // Get courses from backend and set the state
    const fetchCourses = async () => {
        const response = await getCourses()
        const courses = response.data
        setCourses(courses)
    }

    // Fetch the courses only when the component is first mounted or updated.
    // This is what the second parameter (empty array) means.
    useEffect(() => {
        fetchCourses()
    }, [])

    return (
        <NavDropdown title="Kurser">
            {courses.map((course, index) => <NavDropdown.Item key={index} href={"#course/"+course.id}>{course.coursenumber} - {course.title}</NavDropdown.Item>)}
        </NavDropdown>
    )
}
