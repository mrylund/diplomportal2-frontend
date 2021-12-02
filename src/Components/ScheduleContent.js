import '../styles/ScheduleContent.css'


export const ScheduleContent = (props) => {
    return (
        <div>
            <div>
                <h2 className="big-text">{props.weekdayName}</h2>
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
            <h5 className="course-time-and-name">{props.course.startTime + '-' +props.course.endTime + ' - '}</h5>
            <h5 className="course-time-and-name"><a className="a-schedule-item"href={"/course/"+props.course.courseNumber}>{props.course.title}</a></h5>
        </div>
    )
}