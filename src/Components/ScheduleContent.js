

export const ScheduleContent = (props) => {
    return (
        <div>
            <div>
                <h2>{props.day}</h2>
            </div>
            <div>
                <h4>{props.time + ' ' + props.title}</h4>
            </div>
        </div>
    )
}