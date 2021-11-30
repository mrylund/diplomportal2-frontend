

export const ScheduleContent = (props) => {
    return (
        <div>
            <div>
                <h2>{props.weekdayName}</h2>
            </div>
            <div>
                {props.courses.map((course, id) => {
                    return <CourseTimeAndName key={id} course={course} />
                })}
            </div>
        </div>
    )
}

const CourseTimeAndName = (props) => {
    return (
        <div style={{display:"block", textAlign:"left"}}>
            <h5 style={{display:"inline-block", textAlign:"center"}}>{props.course.timeSlot + ' '}</h5>
            <h5 style={{display:"inline-block", textAlign:"center"}}><a href={"#course/"+props.course.courseNumber}>{props.course.title}</a></h5>
        </div>
    )
}