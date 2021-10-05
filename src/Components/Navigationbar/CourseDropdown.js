import React from "react"
import { NavDropdown } from "react-bootstrap";
import { getcourses } from "@libs/requests.js";

// Creates a NavDropdown with course number and course title: <number> - <title>
export class CourseDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        };
    }

    componentDidMount() {
        const fetchCourses = async () => {
            const response = await getcourses()
            console.log(response.data)
            const courses = response.data
            this.setState({
                courses
            })
        }

        fetchCourses()
    }

    render() {
        return (
            <NavDropdown title="Kurser">
                {this.state.courses.map((course, index) => <NavDropdown.Item key={index}>{course.courseNumber} - {course.title}</NavDropdown.Item>)}
            </NavDropdown>
        )
    }
}