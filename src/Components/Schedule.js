import React, { useEffect, useState } from "react"
import { getStudent } from "../libs/requests"
import { ScheduleContent } from "./ScheduleContent"

export const ScheduleComponent = (props) => {

    const [student, setStudent] = useState()
    const [loaded, setLoaded] = useState(false)

    const fetchStudent = async () => {
        const response = await getStudent('s152716')
        setStudent(response.data)
        setLoaded(true)
    }
    useEffect(() => {
        fetchStudent();
    }, [])


    // const weekDict = {
    //     'mo': 'Mandag',
    //     'ti': 'Tirsdag',
    //     'on': 'Onsdag',
    //     'to': 'Torsdag',
    //     'fr': 'Fredag'
    // }

    // const timeDict = {
    //     // '0': {'start': '08:00', 'end': '12:00'},
    //     // '1': {'start': '13:00', 'end': '17:00'},
    //     // '2': {'start': '18:00', 'end': '22:00'}
    //     '0': '08:00-12:00',
    //     '1': '13:00-17:00',
    //     '2': '18:00-22:00',
    // }

    return (
        <div>
            {!student && !loaded ? 
            (
                <p>Loading...</p>
            ) : 
            (
                <div className="schedule-box">
                    <h2>Skema</h2>
                    <div className="schedule-weekday">
                        {/* List weekdays the student has courses */}
                        { student.schedule.map((day, index) => {
                            return <ScheduleContent
                            key={index}
                            weekdayName={day.weekdayName}
                            weekdayTime={day.weekdayTime}
                            courseName={day.courseName}
                            />
                            }) }
                    </div>
                </div>
            )}
        </div>
    )
}

