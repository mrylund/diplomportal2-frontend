import './App.css';
import { MyNavbar } from './Components/Navigationbar/Navbar';
import { DataTextComponent } from './Components/DataText'
import { ScheduleComponent } from './Components/Schedule';




function App() {

    return (
        <div>
            <MyNavbar />
            <h1>Hejsa</h1>
            <DataTextComponent />
            <ScheduleComponent></ScheduleComponent>
        </div>
    );
}

export default App;
