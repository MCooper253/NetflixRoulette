import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => {
        state === "CLICK ME" ? setState("CLICKED") : setState("CLICK ME")}
    }>{state}</button>;
}

render(<App />, document.getElementById("root"));