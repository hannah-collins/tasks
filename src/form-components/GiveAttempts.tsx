import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, changeAttempts] = useState<number>(3);
    const [request, changeRequest] = useState<number>(0);

    function setRequest(event: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(event.target.value);
        Number.isNaN(value) ?
            changeRequest(parseInt(event.target.value))
        :   changeRequest(request);
    }

    function useAttempt() {
        changeAttempts(attempts - 1);
    }

    function gainAttempt() {
        changeAttempts(attempts + request);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Request Attemps:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={setRequest}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={gainAttempt}>gain</Button>
            Attemps: {attempts}
        </div>
    );
}
