import React, { useEffect, useState } from "react";
const PublicGoogleSheetsParser = require('public-google-sheets-parser')

export const Course = (props) => {

    const [data, setData] = useState([])

    const spreadsheetId = '1sOwdGbJwDn9t3iYSs8koSUivmnN6rI26JwS4hm-ZeR4'
    const parser = new PublicGoogleSheetsParser(spreadsheetId)
    
    useEffect(() => {
        parser.parse().then((items) => {
            setData(items)
        })
    }, [])

    console.log(data)
    
    return (
        
        <div>
            <h1>Kursus med id: {props.match.params.id}</h1>
            <table class="table table-dark">
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
                {data.map((lesson, index) => <Lesson 
                                                    key={index} 
                                                    lesson={lesson.Lektion}
                                                    topic={lesson.Emner}
                                                    time={(lesson.Tidspunkt)}
                                                    room={lesson.Lokale}
                                                    preparation={lesson.Forberedelse}
                                                    lecture={lesson.Forelæsningsmateriale}
                                                    material={lesson.Undervisningsmateriale}
                                                />)}
            </table>
        </div>
    )
}
// MyList(lesson.Lektion, lesson.Emner, lesson.Tidspunkt, lesson.Lokale, lesson.Forberedelse, lesson.Forelæsningsmateriale, lesson.Undervisningsmateriale, index))

export const Lesson = (props) => {
    var _time = props.time ? new Date(props.time.substring(5, props.time.length-1)).toLocaleDateString('en-AU') : ''
    return (
        <tbody>
            <tr>
            <td>{props.lesson}</td>
            <td>{props.topic}</td>
            <td>{_time}</td>
            <td>{props.room}</td>
            <td>{props.preparation}</td>
            <td>{props.lecture}</td>
            <td>{props.material}</td>
            </tr>
        </tbody>
    )
}