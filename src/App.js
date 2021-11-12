import './App.css';
import { HomePage } from './Components/HomePage'
import { ScheduleComponent } from './Components/Schedule';
import React, { useEffect, useState } from "react";
import { verifyUser } from './libs/requests';

const App = () => {

    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const checkUserAuth = async () => {
            const token = window.localStorage.getItem('portal-jwt-Token')
            const isAuthorized = await verifyUser(token)
            setIsAuthorized(isAuthorized.success)
        }

        checkUserAuth()
    }, [])


    return (
        !isAuthorized
        ? <div>Ingen adgang</div>
        : <div>
            <HomePage />
            <ScheduleComponent></ScheduleComponent>
        </div>
    );
}

export default App;
