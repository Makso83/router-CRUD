import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PostMain from "./Components/PostMain";

function App() {
    return (
        <BrowserRouter>
            <PostMain />
        </BrowserRouter>
    );
}

export default App;
