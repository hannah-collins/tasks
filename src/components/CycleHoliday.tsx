import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Holiday: 🍎🍯"
        | "Holiday: 📜"
        | "Holiday: 🎭"
        | "Holiday: 🕎"
        | "Holiday: 🍋🌿";
    const [holiday, changeHoliday] = useState<Holiday>("Holiday: 🕎");
    function alphabetNext() {
        changeHoliday(
            holiday === "Holiday: 🕎" ? "Holiday: 🎭"
            : holiday === "Holiday: 🎭" ? "Holiday: 🍎🍯"
            : holiday === "Holiday: 🍎🍯" ? "Holiday: 📜"
            : holiday === "Holiday: 📜" ? "Holiday: 🍋🌿"
            : "Holiday: 🕎",
        );
    }

    function yearNext() {
        changeHoliday(
            holiday === "Holiday: 🍎🍯" ? "Holiday: 🍋🌿"
            : holiday === "Holiday: 🍋🌿" ? "Holiday: 📜"
            : holiday === "Holiday: 📜" ? "Holiday: 🕎"
            : holiday === "Holiday: 🕎" ? "Holiday: 🎭"
            : "Holiday: 🍎🍯",
        );
    }
    return (
        <div>
            <Button onClick={alphabetNext}>Next by Alphabet</Button>
            <Button onClick={yearNext}>Next by Year</Button>
            {holiday}
        </div>
    );
}
