import "./index.css";

import { Header } from "./components/Header";
import { Router } from "./router";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="flex h-screen w-screen box-border bg-purple-100">
                <NavBar />
                <div className="flex flex-col w-screen">
                    <Header />
                    <Router />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
