import React, { useEffect, useState } from "react"
import { getCurrentUser, getStudent } from "../libs/requests"
import { ScheduleContent } from "./ScheduleContent"
import '../styles/Schedule.css'

export const ScheduleComponent = (props) => {

    const [student, setStudent] = useState()
    const [loaded, setLoaded] = useState(false)

    const fetchStudent = async () => {
        const response = await getCurrentUser()
        setStudent(response.data)
        setLoaded(true)
    }
    useEffect(() => {
        fetchStudent();
    }, [])

    return (
        <div>
            {!student && !loaded ? 
            (
                <p>Loading...</p>
            ) : 
            (
                <div className="schedule-box p-3">
                    <h2 className="big-text-schedule pb-2 border-2">Skema</h2>
                    <div className="schedule-weekday">
                        {/* List weekdays the student has courses */}
                        { student.schedule.map((day, index) => {
                            return <ScheduleContent
                            key={index}
                            weekdayName={day.weekdayName}
                            courses={day.courses}
                            />
                            }) }
                    </div>
                </div>
            )}
        </div>
    )
}

