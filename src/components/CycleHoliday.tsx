import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Rosh Hashana"
        | "Simchat Torah"
        | "Purim"
        | "Chanukah"
        | "Sukkot";
    const [holiday, changeHoliday] = useState<Holiday>("Chanukah");
    function alphabetNext() {
        changeHoliday(
            holiday === "Chanukah" ? "Purim"
            : holiday === "Purim" ? "Rosh Hashana"
            : holiday === "Rosh Hashana" ? "Simchat Torah"
            : holiday === "Simchat Torah" ? "Sukkot"
            : "Chanukah",
        );
    }

    function yearNext() {
        changeHoliday(
            holiday === "Rosh Hashana" ? "Sukkot"
            : holiday === "Sukkot" ? "Simchat Torah"
            : holiday === "Simchat Torah" ? "Chanukah"
            : holiday === "Chanukah" ? "Purim"
            : "Rosh Hashana",
        );
    }
    return (
        <div>
            <Button onClick={alphabetNext}>Next by Alphabet</Button>
            <Button onClick={yearNext}>Next by Year</Button>
            {holiday === "Rosh Hashana" && <div>Holiday: 🍎🍯</div>}
            {holiday === "Purim" && <div>Holiday: 🎭</div>}
            {holiday === "Chanukah" && <div>Holiday: 🕎</div>}
            {holiday === "Simchat Torah" && <div>Holiday: 📜</div>}
            {holiday === "Sukkot" && <div>Holiday: 🍋🌿</div>}
        </div>
    );
}
