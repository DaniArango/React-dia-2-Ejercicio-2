import React, { useState, useEffect } from "react";


const Greeting = () => {
    const [name, setName] = useState("¡¡¡Hola Euralio!!!");
    useEffect(() => {
        setTimeout(() => {
            setName("¡¡¡Hola Alfonsina!!!");
        }, 3000);
    }, []);
    return (
        <div>
            <p>{name} <br /> Bienvenid@</p>
        </div>
    );
};

export default Greeting;