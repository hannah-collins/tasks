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
            <div>Holiday:</div>
            {holiday === "Rosh Hashana" && <div>🍎🍯</div>}
            {holiday === "Purim" && <div>🎭</div>}
            {holiday === "Chanukah" && <div>🕎</div>}
            {holiday === "Simchat Torah" && <div>📜</div>}
            {holiday === "Sukkot" && <div>🍋🌿</div>}
        </div>
    );
}
