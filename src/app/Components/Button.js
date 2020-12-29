import React, { useState } from "react";

const Button = () => {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => {
        state === "CLICK ME" ? setState("CLICKED") : setState("CLICK ME")}
    }>{state}</button>;
};

export default Button;