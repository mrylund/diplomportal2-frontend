import './App.css';
import { HomePage } from './Components/HomePage'
import { ScheduleComponent } from './Components/Schedule';
import React, { useEffect, useState } from "react";
import { verifyUser } from './libs/requests';
import { getTokenFromClient } from './utils';

const App = () => {

    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const checkUserAuth = async () => {
            const token = getTokenFromClient()
            if (!!token) {
                const isAuthorized = await verifyUser(token)
                setIsAuthorized(isAuthorized.success)
            } else {
                setIsAuthorized(false)
            }
        }

        checkUserAuth()
    }, [])


    return (
        !isAuthorized
        ? <div className="text-center mt-5">Log venligst ind, for at få adgang til Diplomportal 2.0</div>
        : <div>
            <HomePage />
            <ScheduleComponent></ScheduleComponent>
        </div>
    );
}

export default App;
