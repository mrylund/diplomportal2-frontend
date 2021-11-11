import './App.css';
import { NavBar } from './Components/Navigationbar/Navbar';
import { DataTextComponent } from './Components/DataText'
import { ScheduleComponent } from './Components/Schedule';
import React from "react";


function App() {

    console.log(process.env);
    return (
        <div>
            <h1>Hejsa</h1>
            <DataTextComponent />
            <ScheduleComponent></ScheduleComponent>
        </div>
    );
}

export default App;
