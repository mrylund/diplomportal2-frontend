

export const ScheduleContent = (props) => {
    return (
        <div>
            <div>
                <h2>{props.weekdayName}</h2>
            </div>
            <div>
                <h4>{props.weekdayTime + ' ' + props.courseName}</h4>
            </div>
        </div>
    )
}