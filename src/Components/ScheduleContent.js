

export const ScheduleContent = (props) => {
    return (
        <div>
            <div>
                <h2>{props.weekdayName}</h2>
            </div>
            <div>
                {props.courses.map((course, id) => {
                    return <h4 key={id}>{course.timeSlot + ' ' + course.title}</h4>
                })}
            </div>
        </div>
    )
}