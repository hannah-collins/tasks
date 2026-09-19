import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    let colors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "gray",
    ];
    const [color, setColor] = useState<string>("white");
    function renderOption(colorValue: string): React.JSX.Element {
        return (
            <Form.Check
                inline
                type="radio"
                name="colorCheck"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id={"check: " + colorValue}
                label={colorValue}
                value={colorValue}
                checked={color === colorValue}
            />
        );
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map(
                (colorValue: string): React.JSX.Element =>
                    renderOption(colorValue),
            )}
            <span data-testid="coloredbox" style={{ color: color }}>
                You chose {color}
            </span>
        </div>
    );
}
