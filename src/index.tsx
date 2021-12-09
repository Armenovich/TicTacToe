import "./main.scss";
import React from "react";
import ReactDom from "react-dom";
import Game from "./components/Game.tsx";

ReactDom.render(
    <React.StrictMode>
        <Game/>
    </React.StrictMode>,
    document.getElementById("root")
)