import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [inProgress, swapProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    swapProgress(!inProgress);
                    changeAttempts(attempts - 1);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    swapProgress(!inProgress);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    changeAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            {inProgress && <div>Quiz in progress</div>}
            {!inProgress && <div>Quiz stopped</div>}
            <div>Attemps:{attempts}</div>
        </div>
    );
}
