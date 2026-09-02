import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header">
                Hannah Collins UD CISC275 with React Hooks and TypeScript
            </h1>
            <h2 className="App-header" style={{ backgroundColor: "red" }}>
                New Second Header :3
            </h2>
            <img src="././Downloads/picture.jpg" alt="Picture of me" />
            List of some colors:
            <ul>
                <li>Yellow</li>
                <li>Purple</li>
                <li>Blue</li>
                <li>Green</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
        </div>
    );
}

export default App;
