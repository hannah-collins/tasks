import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, changeAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        changeAnswer(event.target.value);
    }

    function renderOption(option: string): React.JSX.Element {
        return <option value={option}>{option}</option>;
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userAnswer">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map(
                        (option: string): React.JSX.Element =>
                            renderOption(option),
                    )}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
