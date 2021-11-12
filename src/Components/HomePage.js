import React, { useEffect, useState } from "react"
import { getCurrentUser } from "../libs/requests"

export const HomePage = () => {
    
    const [curStudent, setCurStudent] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchCurStudent = async () => {
            const response = await getCurrentUser(window.localStorage.getItem('portal-jwt-Token'));
            const curUser = response.data;
            console.log("front curuser",curUser)
            setCurStudent(curUser)
            setLoaded(true)
        };

        fetchCurStudent()
    }, [])
    
    console.log("react er dræb", curStudent)

    return (
        // While the page load
        !loaded
        ? <div>Loading...</div>
        
        // Show the name for the student
        : curStudent 
        ? 
        <div>
            <h2>Hej {curStudent.name || curStudent.studynumber}</h2>
        </div>
        : <div>Fejl</div> 
        
    );
    
}