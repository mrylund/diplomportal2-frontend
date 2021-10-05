import React from "react"
import { getStudents } from "../libs/requests"

export class DataTextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        };
    }

    componentDidMount() {
        const fetchStudents = async () => {
            const response = await getStudents();
            const students = response.data;
            this.setState({
                students
            });
        };
        
        fetchStudents();
    }

    render() {
        return (
            <div>
                <h1>Students</h1>
                <ul>{this.state.students.map((s, index) => <li key={index}>{s.name} - {s.studyNumber}</li>)}</ul>
            </div>
        );
    }
}