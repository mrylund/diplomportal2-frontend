import React, { useEffect, useState } from "react"
import { getCurrentUser } from "../libs/requests"
import { getTokenFromClien } from "../utils"

export const HomePage = () => {
    
    const [curStudent, setCurStudent] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchCurStudent = async () => {
            const response = await getCurrentUser();
            const curUser = response.data;
            setCurStudent(curUser)
            setLoaded(true)
        };

        fetchCurStudent()
    }, [])
    

    return (
        // While the page load
        !loaded
        ? <div>Loading...</div>
        
        // Show the name for the student
        : curStudent 
        ? 
        <div className="p-3">
            <h2>Velkommen tilbage, {curStudent.name || curStudent.studynumber}</h2>
        </div>
        : <div className="p-3">Fejl</div> 
        
    );
    
}