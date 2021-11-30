import '../styles/ScheduleContent.css'


export const ScheduleContent = (props) => {
    return (
        <div>
            <div>
                <h2 class="big-text">{props.weekdayName}</h2>
            </div>
            <div>
                {props.courses.map((course, id) => {
                    return <CourseTimeAndName course={course} key={id} />
                })}
            </div>
        </div>
    )
}

const CourseTimeAndName = (props) => {
    return (
        <div style={{display:"block", textAlign:"left"}}>
            <h5 class="course-time-and-name" key={props.key}>{props.course.timeSlot + ' - '}</h5>
            <h5 class="course-time-and-name" key={props.key}><a class="a-schedule-item"href={"#course/"+props.course.courseNumber}>{props.course.title}</a></h5>
        </div>
    )
}