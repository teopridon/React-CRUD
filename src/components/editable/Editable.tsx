import React, { ReactNode } from "react";

interface EditableProps {
    enableEditing: boolean;
    onUpdate: () => void;
    onDelete: () => void;
    children: ReactNode;
    [key: string]: any;
}

function Editable(props: EditableProps) {
    const { enableEditing, onUpdate, onDelete, children, ...rest } = props;
    return (
        <div {...rest}>
            {children}
            <div>
                <button
                    className="btn btn-secondary btn-sm me-2"
                    onClick={onUpdate}
                    disabled={!enableEditing}
                >
                    Update
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Editable;