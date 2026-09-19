import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, changeMode] = useState<boolean>(false);
    const [isStudent, changeStatus] = useState<boolean>(true);
    const [name, changeName] = useState<string>("Your Name");

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        changeMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        changeName(event.target.value);
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        changeStatus(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode && (
                <div>
                    <Form.Group controlId="formMovieName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={updateStatus}
                    />
                </div>
            )}
            {isStudent && <div>{name} is a student.</div>}
            {!isStudent && <div>{name} is not a student.</div>}
        </div>
    );
}
