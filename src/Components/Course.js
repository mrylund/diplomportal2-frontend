import React, { useEffect, useState } from "react";
import { getCourse } from "../libs/requests";
import '../styles/course.css'
const PublicGoogleSheetsParser = require('public-google-sheets-parser')

// TODO: implement real google sheet api
export const Course = (props) => {

    const [data, setData] = useState([])
    const [course, setCourse] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const courseId = props.match.params.id

        const fetchCourse = async () => {
            const response = await getCourse(courseId);
            const course = response.data;
            setCourse(course)
    
            const parser = new PublicGoogleSheetsParser(course.sheetsId)
            parser.parse().then((items) => {
                setData(items)
                setLoaded(true)
            })
        };

        fetchCourse();
    }, [props.match.params.id]) // update everytime the id in the url changes

    
    return (
        !loaded
        ? <div className="text-center mt-5">Loading...</div>
        : data.length === 0 

        ? <div className="text-center mt-5">Google Sheet ikke tilgængelig for dette kursus.</div>
        : <div className="table-custom">
            <h2>Lektioner for {course.title} </h2>
            <table className="table table-striped table-light">
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
    var preparationText = props.preparation.includes('google.com/') ? 'Forberedelse' : 'Link'
    var preparationIsLink = props.preparation.includes('http') ? true : false
    var lectureText = props.lecture.includes('google.com/') ? 'Forelæsning' : 'Link'
    var lectureIsLink = props.lecture.includes('http') ? true : false
    var materialText = props.material.includes('google.com/') ? 'Undervisning' : 'Link'
    var materialIsLink = props.material.includes('http') ? true : false

    return (
        <tr>
            <td>{props.lesson}</td>
            <td>{props.topic}</td>
            <td>{_time}</td>
            <td>{props.room}</td>
            {preparationIsLink ? <td><a href={props.preparation} target='_blank' rel="noreferrer">{preparationText}</a></td> : <td>{props.preparation}</td>} 
            {lectureIsLink ? <td><a href={props.lecture} target='_blank' rel="noreferrer">{lectureText}</a></td> : <td>{props.lecture}</td>}
            {materialIsLink ? <td><a href={props.material} target='_blank' rel="noreferrer">{materialText}</a></td> : <td>{props.material}</td>}
        </tr>
    )
}