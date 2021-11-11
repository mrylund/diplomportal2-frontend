import React, { useEffect, useState } from "react";
import { getCourse } from "../libs/requests";
import '../styles/course.css'
const PublicGoogleSheetsParser = require('public-google-sheets-parser')

export const Course = (props) => {

    const [data, setData] = useState([])
    const [course, setCourse] = useState({})
    const [loaded, setLoaded] = useState(false)

    const courseId = props.match.params.id
    
    const fetchCourse = async () => {
        const response = await getCourse(courseId);
        const course = response.data;
        setCourse(course)

        const parser = new PublicGoogleSheetsParser(course.sheets)
        parser.parse().then((items) => {
            setData(items)
            setLoaded(true)
        })
    };

    useEffect(() => {
        fetchCourse();
    }, [])

    console.log("data",data)
    console.log("course:", course)
    
    return (
        !loaded
        ? <div>Loading...</div>
        : data.length == 0 

        ? <div>Google Sheet ikke tilgængeligt.</div>
        : <div className="table-custom">
            <h2>Lektioner for {course.title} </h2>
            <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">Lektion</th>
                <th scope="col">Emner</th>
                <th scope="col">Tidspunkt</th>
                <th scope="col">Lokale</th>
                <th scope="col">Forberedelse</th>
                <th scope="col">Forelæsningsmateriale</th>
                <th scope="col">Undervisningsmateriale</th>
                </tr>
            </thead>
                <tbody>
                    {data.map((lesson, index) => <Lesson 
                                                    key={index} 
                                                    lesson={"Lektion "+(index+1)}
                                                    topic={lesson.Emner}
                                                    time={(lesson.Tidspunkt)}
                                                    room={lesson.Lokale}
                                                    preparation={lesson.Forberedelse}
                                                    lecture={lesson.Forelæsningsmateriale}
                                                    material={lesson.Undervisningsmateriale}
                                                    />)}
                </tbody>
            </table>
        </div>
    )
}
// MyList(lesson.Lektion, lesson.Emner, lesson.Tidspunkt, lesson.Lokale, lesson.Forberedelse, lesson.Forelæsningsmateriale, lesson.Undervisningsmateriale, index))

export const Lesson = (props) => {
    var _time = props.time ? new Date(props.time.substring(5, props.time.length-1)).toLocaleDateString('en-AU') : ''
    return (
        <tr scope="row">
            <td>{props.lesson}</td>
            <td>{props.topic}</td>
            <td>{_time}</td>
            <td>{props.room}</td>
            <td>{props.preparation}</td>
            <td>{props.lecture}</td>
            <td>{props.material}</td>
        </tr>
    )
}