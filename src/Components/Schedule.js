import React, { useEffect, useState } from "react"
import { getCourses, getStudent } from "../libs/requests"

export const ScheduleComponent = (props) => {
    console.log("jeg er i schedule")

    let [courses, setCourses] = useState([])

    const fetchCourses = async () => {
        const response = await getCourses()
        setCourses(response.data)
    }
    useEffect(() => {
        fetchCourses()
    })

    // let [student, setStudent] = useState()

    // const fetchStudent = async () => {
    //     const response = await getStudent('s152716')
    //     console.log("resp", response)
    //     setStudent(response.data)
    // }
    // useEffect(() => {
    //         fetchStudent();
    // })

    console.log(courses)
    
    return (
        <div>
            <h1>hej</h1>
        </div>
    )
}