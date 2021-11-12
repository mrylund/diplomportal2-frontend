import './App.css';
import { DataTextComponent } from './Components/DataText'
import { ScheduleComponent } from './Components/Schedule';
import React, { useEffect, useState } from "react";
import { verifyUser } from './libs/requests';

const App = () => {

    console.log(process.env);
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const checkUserAuth = async () => {
            const token = window.localStorage.getItem('portal-jwt-Token')
            console.log('token', token)
            const isAuthorized = await verifyUser(token)
            console.log('isauth', isAuthorized)
            setIsAuthorized(isAuthorized.success)
        }

        checkUserAuth()
    }, [])

    console.log('auth', isAuthorized)

    return (
        !isAuthorized
        ? <div>Ingen adgang</div>
        : <div>
            <h1>Hejsa</h1>
            <DataTextComponent />
            <ScheduleComponent></ScheduleComponent>
        </div>
    );
}

export default App;
