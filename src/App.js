import './App.css';
import { MyNavbar } from './Components/Navigationbar/Navbar';
import { DataTextComponent } from './Components/DataText'



function App() {
    console.log("hej")

    return (
        <div>
            <MyNavbar />
            <h1>Hej</h1>
            <DataTextComponent />
        </div>
    );
}

export default App;
