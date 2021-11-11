import React, { useEffect, useState } from "react"
import { getStudent } from "../libs/requests"

export const ScheduleComponent = (props) => {
    console.log("jeg er i schedule")

    const [student, setStudent] = useState()

    const fetchStudent = async () => {
        const response = await getStudent('s185092')
        console.log("Har fetched", response.data)
        setStudent(response.data)
        console.log("student", student)
    }
    useEffect(() => {
        fetchStudent();
    }, [])

    const weekDict = {
        'mo': 'Mandag',
        'ti': 'Tirsdag',
        'on': 'Onsdag',
        'to': 'Torsdag',
        'fr': 'Fredag'
    }

    const timeDict = {
        // '0': {'start': '08:00', 'end': '12:00'},
        // '1': {'start': '13:00', 'end': '17:00'},
        // '2': {'start': '18:00', 'end': '22:00'}
        '0': '08:00-12:00',
        '1': '13:00-17:00',
        '2': '18:00-22:00',
    }

    return (
        <div>
            {!student ? 
            (
                <p>Loading...</p>
            ) : 
            (
                <div className="schedule-box">
                    <h2>Skema</h2>
                    <div className="schedule-weekday">
                        {/* List weekdays the student has courses */}
                        {/* {student.schedule.map((d, id) => {
                                    return (
                                        <div key={id}>
                                            <h4>{weekDict[d.weekDay.substring(0,2)]}</h4>
                                            <p>{timeDict[d.weekDay.slice(-1)]} {d.course.title}</p>
                                        </div> 
                                    ) 
                                }    
                            )
                        } */}
                    </div>
                </div>
            )}
        </div>
    )
}

